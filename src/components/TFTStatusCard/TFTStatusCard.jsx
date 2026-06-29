import { useEffect, useState } from 'react';
import { fetchTftRank, getTftProfile } from '../../lib/fetchTftRank';
import styles from './TFTStatusCard.module.css';

// Live rank emblems (served from public/emblems).
const emblems = {
  UNRANKED: '/emblems/emblem-iron.png',
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

// Soft tier-tinted glow behind each emblem.
const glows = {
  UNRANKED: 'rgba(140,132,115,.4)',
  IRON: 'rgba(61,54,42,.45)',
  BRONZE: 'rgba(122,59,34,.45)',
  SILVER: 'rgba(126,136,148,.5)',
  GOLD: 'rgba(160,116,36,.5)',
  PLATINUM: 'rgba(47,122,107,.5)',
  EMERALD: 'rgba(46,106,56,.5)',
  DIAMOND: 'rgba(62,91,163,.5)',
  MASTER: 'rgba(107,60,161,.5)',
  GRANDMASTER: 'rgba(138,31,31,.5)',
  CHALLENGER: 'rgba(168,40,31,.5)',
};

const fallbackRank = {
  tier: 'Unranked',
  rank: '--',
  leaguePoints: 0,
  wins: 0,
  losses: 0,
};

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function TFTStatusCard() {
  const [status, setStatus] = useState('loading');
  const [rankData, setRankData] = useState(fallbackRank);
  const profile = getTftProfile();

  useEffect(() => {
    let isMounted = true;

    async function loadRank() {
      try {
        const data = await fetchTftRank();
        if (!isMounted) return;
        setRankData({
          tier: data.tier ?? fallbackRank.tier,
          rank: data.rank ?? fallbackRank.rank,
          leaguePoints: data.leaguePoints ?? fallbackRank.leaguePoints,
          wins: data.wins ?? fallbackRank.wins,
          losses: data.losses ?? fallbackRank.losses,
        });
        setStatus('ready');
      } catch {
        if (!isMounted) return;
        setStatus('fallback');
      }
    }

    loadRank();
    return () => {
      isMounted = false;
    };
  }, []);

  const total = rankData.wins + rankData.losses;
  const winRate = total ? Math.round((rankData.wins / total) * 100) : 0;
  const winPct = total ? `${(rankData.wins / total) * 100}%` : '0%';
  const lossPct = total ? `${(rankData.losses / total) * 100}%` : '0%';

  const tierKey = rankData.tier.toUpperCase();
  const emblem = emblems[tierKey] ?? emblems.UNRANKED;
  const glow = glows[tierKey] ?? glows.UNRANKED;
  const isUnranked = tierKey === 'UNRANKED';

  const caption =
    status === 'loading'
      ? 'fetching live rank…'
      : status === 'ready'
        ? 'live · Riot API'
        : 'live API soon';

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <div className={styles.titleWrap}>
          <span className={styles.title}>Ranked TFT</span>
          <span className={styles.sub}>
            {profile.gameName}#{profile.tagLine}
          </span>
        </div>
        <span className={styles.regionPill}>
          <span className={styles.regionDot} aria-hidden="true" />
          {profile.region.toUpperCase()}
        </span>
      </div>

      <div className={styles.mainRow}>
        <div className={styles.emblem}>
          <img
            className={styles.emblemImg}
            src={emblem}
            alt={`${titleCase(rankData.tier)} rank emblem`}
            style={{ filter: `drop-shadow(0 8px 16px ${glow})` }}
          />
        </div>

        <div className={styles.rankInfo}>
          <div className={styles.rankLabel}>Current rank</div>
          <div className={styles.rankRow}>
            <span className={styles.tier}>{titleCase(rankData.tier)}</span>
            {!isUnranked && <span className={styles.division}>{rankData.rank}</span>}
          </div>
          <div className={styles.lpRow}>
            <span className={styles.lpVal}>{rankData.leaguePoints}</span>
            <span className={styles.lpUnit}>LP</span>
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Wins</div>
          <div className={`${styles.statVal} ${styles.win}`}>{rankData.wins}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Losses</div>
          <div className={`${styles.statVal} ${styles.loss}`}>{rankData.losses}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Win rate</div>
          <div className={styles.statVal}>
            {winRate}
            <span className={styles.pct}>%</span>
          </div>
        </div>
      </div>

      <div className={styles.barWrap}>
        <div className={styles.barTrack}>
          <div className={styles.barWin} style={{ width: winPct }} />
          <div className={styles.barLoss} style={{ width: lossPct }} />
        </div>
        <div className={styles.barMeta}>
          <span>{total} games</span>
          <span>{caption}</span>
        </div>
      </div>
    </article>
  );
}

export default TFTStatusCard;
