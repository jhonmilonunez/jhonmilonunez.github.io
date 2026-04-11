const REGIONAL_ROUTING = {
  na1: 'americas',
  br1: 'americas',
  la1: 'americas',
  la2: 'americas',
  oc1: 'americas',
  kr: 'asia',
  jp1: 'asia',
  eun1: 'europe',
  euw1: 'europe',
  tr1: 'europe',
  ru: 'europe',
};

async function riotFetch(url, apiKey) {
  const response = await fetch(url, {
    headers: {
      'X-Riot-Token': apiKey,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Riot API request failed with ${response.status}`);
  }

  return response.json();
}

export default async function handler(req, res) {
  const apiKey = process.env.RIOT_API_KEY;
  const region = String(req.query.region ?? 'na1').toLowerCase();
  const gameName = req.query.gameName;
  const tagLine = req.query.tagLine;

  if (!apiKey) {
    return res.status(500).json({
      error: 'Missing RIOT_API_KEY environment variable.',
    });
  }

  if (!gameName || !tagLine) {
    return res.status(400).json({
      error: 'Missing gameName or tagLine query parameters.',
    });
  }

  const regionalRoute = REGIONAL_ROUTING[region];

  if (!regionalRoute) {
    return res.status(400).json({
      error: `Unsupported Riot platform region: ${region}`,
    });
  }

  try {
    const account = await riotFetch(
      `https://${regionalRoute}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(
        gameName,
      )}/${encodeURIComponent(tagLine)}`,
      apiKey,
    );

    const summoner = await riotFetch(
      `https://${region}.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/${account.puuid}`,
      apiKey,
    );

    const entries = await riotFetch(
      `https://${region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${summoner.id}`,
      apiKey,
    );

    const rankedEntry =
      entries.find((entry) => entry.queueType === 'RANKED_TFT') ?? null;

    if (!rankedEntry) {
      return res.status(200).json({
        tier: 'Unranked',
        rank: '--',
        leaguePoints: 0,
        wins: 0,
        losses: 0,
        queueType: 'RANKED_TFT',
      });
    }

    return res.status(200).json({
      tier: rankedEntry.tier,
      rank: rankedEntry.rank,
      leaguePoints: rankedEntry.leaguePoints,
      wins: rankedEntry.wins,
      losses: rankedEntry.losses,
      queueType: rankedEntry.queueType,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
