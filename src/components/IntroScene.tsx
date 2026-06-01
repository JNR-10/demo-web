import React from 'react';

interface IntroSceneProps {
  onScrollNext: () => void;
}

export default function IntroScene({ onScrollNext }: IntroSceneProps) {
  return (
    <>
      <div className="kicker reveal d1">McDonald's US Campaign Swarm</div>
      <h1 className="heading-serif reveal d2">
        Global Ad Localization<br />
        via AI Agent Swarms
      </h1>
      <p className="body-text reveal d3">
        Automate regional adaptation instantly. When a master asset lands in Tigris object storage,
        event-driven notifications launch parent-child agent swarms to adapt video and audio for Japan and Germany in parallel.
      </p>
      
      <div className="scroll-indicator reveal d4" onClick={onScrollNext}>
        <span>Explore Swarm Architecture</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </>
  );
}
