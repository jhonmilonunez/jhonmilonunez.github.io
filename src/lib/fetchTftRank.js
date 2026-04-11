const defaultProfile = {
  region: import.meta.env.VITE_TFT_REGION ?? 'na1',
  gameName: import.meta.env.VITE_TFT_GAME_NAME ?? 'Toe',
  tagLine: import.meta.env.VITE_TFT_TAG_LINE ?? 'spicy',
};

const defaultProxyUrl =
  import.meta.env.VITE_TFT_PROXY_URL ?? '/api/tft-rank';

export async function fetchTftRank() {
  const url = new URL(defaultProxyUrl, window.location.origin);
  url.searchParams.set('region', defaultProfile.region);
  url.searchParams.set('gameName', defaultProfile.gameName);
  url.searchParams.set('tagLine', defaultProfile.tagLine);

  const response = await fetch(url.toString(), {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch TFT rank: ${response.status}`);
  }

  return response.json();
}

export function getTftProfile() {
  return defaultProfile;
}
