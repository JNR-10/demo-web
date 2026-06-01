import React from 'react';

interface ConclusionSceneProps {
  onRestart: () => void;
}

export default function ConclusionScene({ onRestart }: ConclusionSceneProps) {
  return (
    <>
      <div className="kicker reveal d1">04 // SUMMARY</div>
      <h2 className="heading-serif reveal d2">The Future of Content Swarms</h2>
      <p className="body-text reveal d3" style={{ marginBottom: '1.5rem' }}>
        By combining automated storage pipelines, security governance, and parallel generative AI models,
        we redefine how global brands adapt content for international markets.
      </p>

      <div className="dashboard-grid reveal d4" style={{ maxWidth: '850px', marginBottom: '2rem' }}>
        <div className="metric-card" style={{ padding: '1.25rem' }}>
          <div className="metric-label" style={{ color: 'var(--accent-secondary)' }}>Workflow Speed</div>
          <div className="metric-value" style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0.4rem 0' }}>Days to Seconds</div>
          <div className="metric-desc" style={{ fontSize: '0.75rem' }}>Parallel agent processing generates localized versions for multiple regions in just 4.5 seconds.</div>
        </div>

        <div className="metric-card" style={{ padding: '1.25rem' }}>
          <div className="metric-label" style={{ color: 'var(--accent-secondary)' }}>Resource Overhead</div>
          <div className="metric-value" style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0.4rem 0' }}>Zero-Copy Sandbox</div>
          <div className="metric-desc" style={{ fontSize: '0.75rem' }}>Tigris bucket forks spawn metadata-only workspaces instantly, avoiding manual file duplications.</div>
        </div>

        <div className="metric-card" style={{ padding: '1.25rem' }}>
          <div className="metric-label" style={{ color: 'var(--accent-secondary)' }}>Financial Footprint</div>
          <div className="metric-value" style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0.4rem 0' }}>Zero Egress Fees</div>
          <div className="metric-desc" style={{ fontSize: '0.75rem' }}>Tigris and Fly.io native networks route high-bandwidth media files for free, eliminating cloud egress bills.</div>
        </div>
      </div>

      <div className="reveal d5" style={{ display: 'flex', gap: '1rem' }}>
        <button 
          className="btn-primary" 
          style={{ width: 'auto', padding: '0.85rem 2rem' }}
          onClick={onRestart}
        >
          Restart Presentation
        </button>
      </div>

      <div className="reveal d6" style={{ marginTop: '3rem', fontFamily: 'var(--font-mono-family)', fontSize: '0.65rem', color: 'var(--text-muted)', opacity: '0.5' }}>
        Canva Global Content Swarm Orchestrator • Deployed on Render • Powered by Tigris, Opsera & InsForge
      </div>

    </>
  );
}
