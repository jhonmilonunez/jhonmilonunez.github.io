import { useEffect, useState } from 'react';
import { fetchTftRank, getTftProfile } from '../../lib/fetchTftRank';
import styles from './TFTStatusCard.module.css';

// Riot tier palettes, adapted to the Soft Serve cream/currant tones.
const palettes = {
  UNRANKED: { grad: 'linear-gradient(140deg,#C4B5A0,#8C8473)', shadow: 'rgba(140,132,115,.5)', accent: '#FBF2E2' },
  IRON: { grad: 'linear-gradient(140deg,#6F6657,#3D362A)', shadow: 'rgba(61,54,42,.6)', accent: '#C4B5A0' },
  BRONZE: { grad: 'linear-gradient(140deg,#C97A5C,#7A3B22)', shadow: 'rgba(122,59,34,.55)', accent: '#F0D9D3' },
  SILVER: { grad: 'linear-gradient(140deg,#C8CFD8,#7E8894)', shadow: 'rgba(126,136,148,.55)', accent: '#FBF2E2' },
  GOLD: { grad: 'linear-gradient(140deg,#E6B65A,#A07424)', shadow: 'rgba(160,116,36,.55)', accent: '#FBF2E2' },
  PLATINUM: { grad: 'linear-gradient(140deg,#7DC7B8,#2F7A6B)', shadow: 'rgba(47,122,107,.55)', accent: '#FBF2E2' },
  EMERALD: { grad: 'linear-gradient(140deg,#7DBE7A,#2E6A38)', shadow: 'rgba(46,106,56,.55)', accent: '#FBF2E2' },
  DIAMOND: { grad: 'linear-gradient(140deg,#9CB6E3,#3E5BA3)', shadow: 'rgba(62,91,163,.55)', accent: '#FBF2E2' },
  MASTER: { grad: 'linear-gradient(140deg,#B58CD6,#6B3CA1)', shadow: 'rgba(107,60,161,.6)', accent: '#FBF2E2' },
  GRANDMASTER: { grad: 'linear-gradient(140deg,#D86B6B,#8A1F1F)', shadow: 'rgba(138,31,31,.6)', accent: '#FBF2E2' },
  CHALLENGER: { grad: 'linear-gradient(140deg,#E8C97A,#9DD6E3,#A8281F)', shadow: 'rgba(168,40,31,.6)', accent: '#FBF2E2' },
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
  const palette = palettes[tierKey] ?? palettes.UNRANKED;
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
        <div
          className={styles.emblem}
          style={{
            background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,.6), rgba(255,255,255,0) 60%), ${palette.grad}`,
            boxShadow: `inset 0 1px 2px rgba(255,255,255,.6), 0 14px 28px -18px ${palette.shadow}`,
          }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path
              d="M32 4 L58 20 L52 50 L32 60 L12 50 L6 20 Z"
              fill="rgba(255,255,255,.18)"
              stroke="rgba(255,255,255,.55)"
              strokeWidth="1.5"
            />
            <path d="M32 14 L48 24 L44 44 L32 50 L20 44 L16 24 Z" fill="rgba(255,255,255,.32)" />
            <path d="M32 22 L40 28 L37 40 L32 43 L27 40 L24 28 Z" fill="#FBF2E2" />
            <circle cx="32" cy="32" r="3.5" fill={palette.accent} />
          </svg>
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
