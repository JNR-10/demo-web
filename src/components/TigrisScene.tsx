import React from 'react';

interface TigrisSceneProps {
  onScrollNext: () => void;
}

export default function TigrisScene({ onScrollNext }: TigrisSceneProps) {
  return (
    <>
      <div className="kicker reveal d1">02 // PLATFORM FOUNDATION</div>
      <h2 className="heading-serif reveal d2">Powered by Tigris Object Storage</h2>
      <p className="body-text reveal d3" style={{ marginBottom: '1.5rem' }}>
        Tigris provides the global data plane that coordinates our localized workflows. 
        Traditional cloud storage bottlenecks are eliminated through native features.
      </p>

      {/* Grid of Tigris Features */}
      <div className="dashboard-grid reveal d4" style={{ maxWidth: '950px' }}>
        <div className="metric-card">
          <div className="metric-label" style={{ color: 'var(--accent-secondary)' }}>01 / Zero-Copy Forking</div>
          <div className="metric-value" style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>Bucket Forks</div>
          <p className="metric-desc" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
            <strong>How it works:</strong> Standard S3 headers clone bucket metadata instantly.
            <br />
            <strong>Project Impact:</strong> Creates isolated agent sandboxes in under 100ms, preventing file overlaps without duplicating storage costs.
          </p>
        </div>

        <div className="metric-card">
          <div className="metric-label" style={{ color: 'var(--accent-secondary)' }}>02 / Proximity Placement</div>
          <div className="metric-value" style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>Dynamic Multi-Region</div>
          <p className="metric-desc" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
            <strong>How it works:</strong> Data resides closest to where requests originate natively.
            <br />
            <strong>Project Impact:</strong> Serves finalized Japanese and German video tracks to regional consumers at local speeds without configuring CDNs.
          </p>
        </div>

        <div className="metric-card">
          <div className="metric-label" style={{ color: 'var(--accent-secondary)' }}>03 / Fast Dispatch</div>
          <div className="metric-value" style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>Low Latency Files</div>
          <p className="metric-desc" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
            <strong>How it works:</strong> Optimized metadata indexer for high-speed small writes.
            <br />
            <strong>Project Impact:</strong> Delivers instant event notifications, starting orchestrators in under 500ms of file arrival.
          </p>
        </div>

        <div className="metric-card">
          <div className="metric-label" style={{ color: 'var(--accent-secondary)' }}>04 / Scalable Transfers</div>
          <div className="metric-value" style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>Zero Egress Cost</div>
          <p className="metric-desc" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
            <strong>How it works:</strong> Free inbound and outbound bandwidth routing.
            <br />
            <strong>Project Impact:</strong> Shuffling 4K raw videos and audio overlays between translation models runs cost-free, eliminating network fees.
          </p>
        </div>
      </div>

      <div className="scroll-indicator reveal d6" onClick={onScrollNext} style={{ bottom: '1.5rem' }}>
        <span>Next: Ecosystem Integrations</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </>
  );
}
