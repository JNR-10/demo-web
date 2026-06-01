import React from 'react';

interface ArchitectureSceneProps {
  onScrollNext: () => void;
}

export default function ArchitectureScene({ onScrollNext }: ArchitectureSceneProps) {
  return (
    <>
      <div className="kicker reveal d1">01 // PIPELINE WORKFLOW</div>
      <h2 className="heading-serif reveal d2" style={{ marginBottom: '0.25rem', fontSize: '2.5rem' }}>
        System Architecture Overview
      </h2>
      <p className="body-text reveal d3" style={{ fontSize: '0.85rem', marginBottom: '1.25rem', maxWidth: '850px' }}>
        Interactive layout mapping out the 8 stages of the event-driven global ad localization pipeline.
      </p>

      {/* Grid Flow Chart representing the 8 Mermaid subgraphs */}
      <div className="reveal d4" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        width: '100%',
        maxWidth: '1100px',
        fontSize: '0.8rem',
        textAlign: 'left',
        margin: '0.5rem 0'
      }}>
        {/* Tier 1: Ingestion & Trigger */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div 
            style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.06)', 
              borderRadius: '8px', 
              padding: '0.85rem',
              minHeight: '110px'
            }}
          >
            <span style={{ color: 'var(--accent-secondary)', fontSize: '0.6rem', fontFamily: 'var(--font-mono-family)' }}>1. UPLOAD TRIGGER</span>
            <h4 style={{ margin: '0.2rem 0', fontWeight: 'bold', fontSize: '0.85rem' }}>Brand Team ➔ Tigris Master</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', lineHeight: '1.4' }}>
              Master video & audio uploaded to Tigris bucket with snapshots enabled.
            </p>
          </div>

          <div 
            style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.06)', 
              borderRadius: '8px', 
              padding: '0.85rem',
              minHeight: '110px'
            }}
          >
            <span style={{ color: 'var(--accent-secondary)', fontSize: '0.6rem', fontFamily: 'var(--font-mono-family)' }}>2. EVENT-DRIVEN TRIGGER</span>
            <h4 style={{ margin: '0.2rem 0', fontWeight: 'bold', fontSize: '0.85rem' }}>Express.js Webhook</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', lineHeight: '1.4' }}>
              Tigris fires POST object notifications to webhook routing to Orchestrator.
            </p>
          </div>
        </div>

        {/* Tier 2: Governance & State */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div 
            style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.06)', 
              borderRadius: '8px', 
              padding: '0.85rem',
              minHeight: '110px'
            }}
          >
            <span style={{ color: 'var(--accent-secondary)', fontSize: '0.6rem', fontFamily: 'var(--font-mono-family)' }}>3. STATE MANAGEMENT</span>
            <h4 style={{ margin: '0.2rem 0', fontWeight: 'bold', fontSize: '0.85rem' }}>InsForge MCP Server</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', lineHeight: '1.4' }}>
              Orchestrator reads/updates active campaign jobs and state transitions via MCP.
            </p>
          </div>

          <div 
            style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.06)', 
              borderRadius: '8px', 
              padding: '0.85rem',
              minHeight: '110px'
            }}
          >
            <span style={{ color: 'var(--accent-secondary)', fontSize: '0.6rem', fontFamily: 'var(--font-mono-family)' }}>4. SECURITY GATE</span>
            <h4 style={{ margin: '0.2rem 0', fontWeight: 'bold', fontSize: '0.85rem' }}>Opsera Security Scan</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', lineHeight: '1.4' }}>
              Pre-flight script compliance scans verify prompts for GDPR rules.
            </p>
          </div>
        </div>

        {/* Tier 3: Isolated Storage & Swarms */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', gridColumn: 'span 2' }}>
          <div 
            style={{ 
              background: 'rgba(6, 182, 212, 0.05)', 
              border: '1px solid var(--accent-secondary)', 
              borderRadius: '8px', 
              padding: '0.85rem',
              minHeight: '110px'
            }}
          >
            <span style={{ color: 'var(--accent-secondary)', fontSize: '0.6rem', fontFamily: 'var(--font-mono-family)' }}>5. BUCKET ISOLATION</span>
            <h4 style={{ margin: '0.2rem 0', fontWeight: 'bold', fontSize: '0.85rem' }}>Tigris Bucket Forks</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', lineHeight: '1.4', marginBottom: '0.4rem' }}>
              Orchestrator triggers zero-copy S3 cloning for 4 isolated metadata directories:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', fontFamily: 'var(--font-mono-family)', fontSize: '0.62rem' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.4rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>🍴 japan-video</div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.4rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>🍴 germany-video</div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.4rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>🍴 japan-audio</div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.4rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>🍴 germany-audio</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div 
              style={{ 
                background: 'rgba(139, 92, 246, 0.05)', 
                border: '1px solid var(--accent-primary)', 
                borderRadius: '8px', 
                padding: '0.85rem',
                minHeight: '110px'
              }}
            >
              <span style={{ color: 'var(--accent-primary)', fontSize: '0.6rem', fontFamily: 'var(--font-mono-family)' }}>6. VIDEO AGENT TREE</span>
              <h4 style={{ margin: '0.2rem 0', fontWeight: 'bold', fontSize: '0.85rem' }}>Video Parent (Veo)</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.68rem', lineHeight: '1.3' }}>
                Video Parent spawns JP & DE Subagents to replace visuals via Google Veo inside video forks.
              </p>
            </div>

            <div 
              style={{ 
                background: 'rgba(139, 92, 246, 0.05)', 
                border: '1px solid var(--accent-primary)', 
                borderRadius: '8px', 
                padding: '0.85rem',
                minHeight: '110px'
              }}
            >
              <span style={{ color: 'var(--accent-primary)', fontSize: '0.6rem', fontFamily: 'var(--font-mono-family)' }}>7. AUDIO AGENT TREE</span>
              <h4 style={{ margin: '0.2rem 0', fontWeight: 'bold', fontSize: '0.85rem' }}>Audio Parent (ElevenLabs)</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.68rem', lineHeight: '1.3' }}>
                Audio Parent spawns JP & DE Subagents to dub audio tracks via ElevenLabs inside audio forks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 8: Output Delivery block */}
      <div 
        className="reveal d5"
        style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '12px',
          padding: '1rem 2rem',
          width: '100%',
          maxWidth: '1050px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'left',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          marginTop: '0.5rem'
        }}
      >
        <div>
          <span className="kicker" style={{ fontSize: '0.6rem', color: 'var(--accent-tertiary)', marginBottom: '0.1rem', display: 'block' }}>
            8. FINAL ASSEMBLY
          </span>
          <h4 className="heading-serif" style={{ fontSize: '1.15rem', textAlign: 'left', margin: 0, background: 'none', WebkitTextFillColor: 'initial' }}>
            Asset Assembly & CDN Output
          </h4>
        </div>
        <p className="metric-desc" style={{ fontSize: '0.7rem', margin: 0, flex: 1, maxWidth: '600px', lineHeight: '1.4' }}>
          The Asset Assembler merges localized video tracks and dubs from the respective forks (japan-video/audio & germany-video/audio) and uploads the finalized ads to the <strong>Tigris Output Bucket</strong> for CDN delivery.
        </p>
      </div>

      <div className="scroll-indicator reveal d6" onClick={onScrollNext} style={{ bottom: '1.5rem' }}>
        <span>Next: Tigris Core Features</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </>
  );
}
