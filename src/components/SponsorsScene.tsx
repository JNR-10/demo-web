import React from 'react';

interface SponsorsSceneProps {
  onScrollNext: () => void;
}

export default function SponsorsScene({ onScrollNext }: SponsorsSceneProps) {
  return (
    <>
      <div className="kicker reveal d1">03 // ECOSYSTEM INTEGRATION</div>
      <h2 className="heading-serif reveal d2" style={{ marginBottom: '0.25rem', fontSize: '2.5rem' }}>
        Opsera, InsForge & Render
      </h2>
      <p className="body-text reveal d3" style={{ fontSize: '0.85rem', marginBottom: '1.5rem', maxWidth: '850px' }}>
        To coordinate autonomous agent swarms safely in production, our pipeline integrates script auditing, state synchronization, and high-availability hosting.
      </p>

      {/* Grid of Sponsors */}
      <div 
        className="reveal d4" 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '1.5rem', 
          width: '100%', 
          maxWidth: '1050px',
          margin: '0.5rem 0'
        }}
      >
        {/* Column 1: Opsera */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div className="metric-card" style={{ gap: '0.25rem', minHeight: '110px' }}>
            <div className="metric-label" style={{ color: 'var(--accent-primary)' }}>Governance & Compliance</div>
            <h3 className="heading-serif" style={{ fontSize: '1.15rem', textAlign: 'left', margin: '0.2rem 0', background: 'none', WebkitTextFillColor: 'initial' }}>
              Opsera Script Audit Gate
            </h3>
            <p className="metric-desc" style={{ fontSize: '0.7rem', lineHeight: '1.4', margin: 0 }}>
              Scans all subagent code and campaign configs before execution. Enforces local policy check (GDPR for Germany, APPI for Japan) and blocks insecure shell prompts.
            </p>
          </div>

          {/* Integration Code Terminal */}
          <div 
            style={{ 
              background: 'rgba(0,0,0,0.5)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '8px', 
              padding: '0.85rem', 
              fontFamily: 'var(--font-mono-family)', 
              fontSize: '0.68rem', 
              lineHeight: '1.4',
              color: '#c084fc',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem'
            }}
          >
            <div style={{ color: '#9ca3af' }}>// Opsera script scan validation call</div>
            <div>
              <span style={{ color: '#f472b6' }}>const</span> compliance = <span style={{ color: '#fb923c' }}>await</span> opsera.<span style={{ color: '#38bdf8' }}>scanScript</span>({'{'}
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              jobId: <span style={{ color: '#e9d5ff' }}>"job-uuid-1234"</span>,
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              scripts: [<span style={{ color: '#e9d5ff' }}>"src/agents/video/strategies/japan-video.ts"</span>],
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              complianceRules: [<span style={{ color: '#e9d5ff' }}>"gdpr"</span>, <span style={{ color: '#e9d5ff' }}>"appi"</span>]
            </div>
            <div>{'});'}</div>
          </div>
        </div>

        {/* Column 2: InsForge */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div className="metric-card" style={{ gap: '0.25rem', minHeight: '110px' }}>
            <div className="metric-label" style={{ color: 'var(--accent-primary)' }}>State Synchronization</div>
            <h3 className="heading-serif" style={{ fontSize: '1.15rem', textAlign: 'left', margin: '0.2rem 0', background: 'none', WebkitTextFillColor: 'initial' }}>
              InsForge State Telemetry
            </h3>
            <p className="metric-desc" style={{ fontSize: '0.7rem', lineHeight: '1.4', margin: 0 }}>
              Acts as the central state broker. Tracks running agent nodes via Model Context Protocol (MCP), preserving execution timestamps, job parameters, and audit trails.
            </p>
          </div>

          {/* Integration Code Terminal */}
          <div 
            style={{ 
              background: 'rgba(0,0,0,0.5)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '8px', 
              padding: '0.85rem', 
              fontFamily: 'var(--font-mono-family)', 
              fontSize: '0.68rem', 
              lineHeight: '1.4',
              color: '#34d399',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem'
            }}
          >
            <div style={{ color: '#9ca3af' }}>// InsForge MCP job state register</div>
            <div>
              <span style={{ color: '#f472b6' }}>await</span> insforge.<span style={{ color: '#38bdf8' }}>updateJobState</span>({'{'}
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              jobId: <span style={{ color: '#a7f3d0' }}>"job-uuid-1234"</span>,
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              status: <span style={{ color: '#a7f3d0' }}>"processing"</span>,
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              agents: {'{'} videoParent: <span style={{ color: '#a7f3d0' }}>"running"</span> {'}'}
            </div>
            <div>{'});'}</div>
          </div>
        </div>

        {/* Row 2: Render Deployment Host */}
        <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div className="metric-card" style={{ gap: '0.25rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="metric-label" style={{ color: 'var(--accent-tertiary)' }}>Infrastructure & Deployment</div>
            <h3 className="heading-serif" style={{ fontSize: '1.15rem', textAlign: 'left', margin: '0.2rem 0', background: 'none', WebkitTextFillColor: 'initial' }}>
              Render Webhook Host
            </h3>
            <p className="metric-desc" style={{ fontSize: '0.7rem', lineHeight: '1.4', margin: 0 }}>
              Hosts our Express.js webhook listening engine. Render provides the server infrastructure, listening for Tigris S3 notifications and spawning orchestrators instantly with auto-scaling to manage high campaign throughput.
            </p>
          </div>
        </div>
      </div>

      <div className="scroll-indicator reveal d6" onClick={onScrollNext} style={{ bottom: '1.5rem' }}>
        <span>Next: Conclusion</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </>
  );
}
