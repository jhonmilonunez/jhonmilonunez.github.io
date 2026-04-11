import { useEffect, useState } from 'react';
import { fetchTftRank, getTftProfile } from '../../lib/fetchTftRank';
import styles from './TFTStatusCard.module.css';

const tierEmblems = {
  UNRANKED:'/emblems/emblem-iron.png',
  IRON: '/emblems/emblem-iron.png',
  BRONZE: '/emblems/emblem-bronze.png',
  SILVER: '/emblems/emblem-silver.png',
  GOLD: '/emblems/emblem-gold.png',
  PLATINUM: '/emblems/emblem-platinum.png',
  EMERALD: '/emblems/emblem-emerald.png',
  DIAMOND: '/emblems/emblem-diamond.png',
  MASTER: '/emblems/emblem-master.png',
  GRANDMASTER: '/emblems/emblem-grandmaster.png',
  CHALLENGER: '/emblems/emblem-challenger.png',
};

const tierClassNames = {
  UNRANKED: styles.tierUnranked,
  IRON: styles.tierIron,
  BRONZE: styles.tierBronze,
  SILVER: styles.tierSilver,
  GOLD: styles.tierGold,
  PLATINUM: styles.tierPlatinum,
  EMERALD: styles.tierEmerald,
  DIAMOND: styles.tierDiamond,
  MASTER: styles.tierMaster,
  GRANDMASTER: styles.tierGrandmaster,
  CHALLENGER: styles.tierChallenger,
};

const fallbackRank = {
  tier: 'Unranked',
  rank: '--',
  leaguePoints: 0,
  wins: 0,
  losses: 0,
  queueType: 'RANKED_TFT',
};

function TFTStatusCard() {
  const [status, setStatus] = useState('loading');
  const [rankData, setRankData] = useState(fallbackRank);
  const profile = getTftProfile();

  useEffect(() => {
    let isMounted = true;

    async function loadRank() {
      try {
        const data = await fetchTftRank();

        if (!isMounted) {
          return;
        }

        setRankData({
          tier: data.tier ?? fallbackRank.tier,
          rank: data.rank ?? fallbackRank.rank,
          leaguePoints: data.leaguePoints ?? fallbackRank.leaguePoints,
          wins: data.wins ?? fallbackRank.wins,
          losses: data.losses ?? fallbackRank.losses,
          queueType: data.queueType ?? fallbackRank.queueType,
        });
        setStatus('ready');
      } catch {
        if (!isMounted) {
          return;
        }

        setStatus('fallback');
      }
    }

    loadRank();

    return () => {
      isMounted = false;
    };
  }, []);

  const winRate =
    rankData.wins + rankData.losses > 0
      ? Math.round((rankData.wins / (rankData.wins + rankData.losses)) * 100)
      : null;
  const tierKey = rankData.tier.toUpperCase();
  const emblemSrc = tierEmblems[tierKey] ?? null;
  const tierClassName = tierClassNames[tierKey] ?? styles.tierUnranked;

  return (
    <article className={`${styles.card} ${tierClassName}`}>
      <div className={styles.header}>
        <span className={styles.label}>Current TFT Rank</span>
        <span className={styles.region}>{profile.region.toUpperCase()}</span>
      </div>

      <div className={styles.rankRow}>
        <div className={styles.crest} aria-hidden="true">
          {emblemSrc ? (
            <img
              src={emblemSrc}
              alt=""
              className={styles.crestImage}
            />
          ) : (
            <div className={styles.crestOuter}>
              <div className={styles.crestInner}>
                <div className={styles.crestCore} />
              </div>
            </div>
          )}
        </div>
        <div className={styles.rankCopy}>
          <strong>
            {rankData.tier} {rankData.rank}
          </strong>
          <span>
            {profile.gameName}#{profile.tagLine}
          </span>
        </div>
      </div>

      <div className={styles.stats}>
        <div>
          <span className={styles.statLabel}>LP</span>
          <strong>{rankData.leaguePoints}</strong>
        </div>
        <div>
          <span className={styles.statLabel}>Wins</span>
          <strong>{rankData.wins}</strong>
        </div>
        <div>
          <span className={styles.statLabel}>Losses</span>
          <strong>{rankData.losses}</strong>
        </div>
        <div>
          <span className={styles.statLabel}>Win Rate</span>
          <strong>{winRate === null ? '--' : `${winRate}%`}</strong>
        </div>
      </div>

      <p className={styles.note}>
        {status === 'loading' && 'Loading live rank from the Riot proxy...'}
        {status === 'ready' && 'Live Riot-backed rank data is connected through the proxy endpoint.'}
        {status === 'fallback' &&
          'TODO: Add a Riot API key to the server-side proxy and set VITE_TFT_PROXY_URL for live rank data.'}
      </p>
    </article>
  );
}

export default TFTStatusCard;
