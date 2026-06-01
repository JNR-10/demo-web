import React from 'react';

interface SponsorsSceneProps {
  onScrollNext: () => void;
}

export default function SponsorsScene({ onScrollNext }: SponsorsSceneProps) {
  return (
    <>
      <div className="kicker reveal d1">03 // ECOSYSTEM INTEGRATION</div>
      <h2 className="heading-serif reveal d2" style={{ marginBottom: '0.25rem', fontSize: '2.5rem' }}>
        Opsera & InsForge
      </h2>
      <p className="body-text reveal d3" style={{ fontSize: '0.85rem', marginBottom: '1.5rem', maxWidth: '850px' }}>
        To coordinate autonomous agent swarms safely in production, our pipeline integrates pre-flight safety audits and real-time state machines.
      </p>

      {/* Side-by-Side Sponsors Info & Integration Code */}
      <div 
        className="reveal d4" 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '2.5rem', 
          width: '100%', 
          maxWidth: '1050px',
          margin: '0.5rem 0'
        }}
      >
        {/* Left Column: Opsera */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div className="metric-card" style={{ gap: '0.25rem' }}>
            <div className="metric-label" style={{ color: 'var(--accent-primary)' }}>Governance & Compliance</div>
            <h3 className="heading-serif" style={{ fontSize: '1.25rem', textAlign: 'left', margin: '0.2rem 0', background: 'none', WebkitTextFillColor: 'initial' }}>
              Opsera Script Audit Gate
            </h3>
            <p className="metric-desc" style={{ fontSize: '0.75rem', lineHeight: '1.4', margin: 0 }}>
              Scans all subagent code, scripts, and campaign configurations before launch. 
              Enforces regional policies (GDPR compliance for Germany, APPI compliance for Japan) and blocks insecure code execution.
            </p>
          </div>

          {/* Integration Code Terminal */}
          <div 
            style={{ 
              background: 'rgba(0,0,0,0.5)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '8px', 
              padding: '1rem', 
              fontFamily: 'var(--font-mono-family)', 
              fontSize: '0.7rem', 
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
            <div>
              <span style={{ color: '#f472b6' }}>if</span> (!compliance.passed) {'{'} <span style={{ color: '#f472b6' }}>throw new</span> <span style={{ color: '#38bdf8' }}>Error</span>(compliance.reason); {'}'}
            </div>
          </div>
        </div>

        {/* Right Column: InsForge */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div className="metric-card" style={{ gap: '0.25rem' }}>
            <div className="metric-label" style={{ color: 'var(--accent-primary)' }}>State & Process Synchronization</div>
            <h3 className="heading-serif" style={{ fontSize: '1.25rem', textAlign: 'left', margin: '0.2rem 0', background: 'none', WebkitTextFillColor: 'initial' }}>
              InsForge State telemetry
            </h3>
            <p className="metric-desc" style={{ fontSize: '0.75rem', lineHeight: '1.4', margin: 0 }}>
              Acts as the system’s central state and log broker. 
              Tracks running agent nodes via the Model Context Protocol (MCP), preserving execution timestamps, job results, and audit trails.
            </p>
          </div>

          {/* Integration Code Terminal */}
          <div 
            style={{ 
              background: 'rgba(0,0,0,0.5)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '8px', 
              padding: '1rem', 
              fontFamily: 'var(--font-mono-family)', 
              fontSize: '0.7rem', 
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
              agents: {'{'}
            </div>
            <div style={{ paddingLeft: '2rem' }}>
              videoParent: <span style={{ color: '#a7f3d0' }}>"running"</span>,
            </div>
            <div style={{ paddingLeft: '2rem' }}>
              audioParent: <span style={{ color: '#a7f3d0' }}>"running"</span>
            </div>
            <div style={{ paddingLeft: '1rem' }}>{'}'}</div>
            <div>{'});'}</div>
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
