'use client';

import React, { useState, useEffect, useRef } from 'react';
import '@/app/story.css';

import IntroScene from './IntroScene';
import ArchitectureScene from './ArchitectureScene';
import TigrisScene from './TigrisScene';
import SponsorsScene from './SponsorsScene';
import ConclusionScene from './ConclusionScene';

export default function Story() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const deckRef = useRef<HTMLDivElement>(null);

  // 1. Accessibility prefers-reduced-motion listener
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMQChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMQChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMQChange);
    };
  }, []);

  // 2. IntersectionObserver to attach 'active' class to scenes
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const scenes = deck.querySelectorAll('.scene');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIdx(index);
          }
        });
      },
      {
        root: deck,
        threshold: 0.45, // Active when at least 45% of the scene is in view
      }
    );

    scenes.forEach((scene) => observer.observe(scene));

    return () => {
      scenes.forEach((scene) => observer.unobserve(scene));
    };
  }, []);

  // Helper function to scroll to a specific index
  const scrollToIndex = (index: number) => {
    const deck = deckRef.current;
    if (!deck) return;

    const scenes = deck.querySelectorAll('.scene');
    const targetScene = scenes[index];

    if (targetScene) {
      targetScene.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      setActiveIdx(index);
    }
  };

  // 3. Custom Keyboard Navigation (respects inputs)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If user is focusing inside inputs, select boxes, or textareas, let typical browser events pass
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.tagName === 'SELECT')
      ) {
        return;
      }

      const isDown = ['ArrowDown', 'PageDown', ' '].includes(e.key);
      const isUp = ['ArrowUp', 'PageUp'].includes(e.key);

      if (isDown || isUp) {
        e.preventDefault(); // Prevent standard scroll jump
        const totalScenes = 5;
        let targetIdx = activeIdx;

        if (isDown && activeIdx < totalScenes - 1) {
          targetIdx = activeIdx + 1;
        } else if (isUp && activeIdx > 0) {
          targetIdx = activeIdx - 1;
        }

        if (targetIdx !== activeIdx) {
          scrollToIndex(targetIdx);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIdx, reducedMotion]);

  return (
    <>
      {/* 1. Drift background nodes */}
      <div className="background-blobs" aria-hidden="true">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* 2. Page Dots Nav */}
      <nav className="nav-dots" aria-label="Presentation Navigation">
        {[0, 1, 2, 3, 4].map((idx) => {
          let label = 'Cover Slide';
          if (idx === 1) label = 'Swarm Architecture';
          if (idx === 2) label = 'Tigris Platform Features';
          if (idx === 3) label = 'Governance & State';
          if (idx === 4) label = 'Summary';

          return (
            <button
              key={idx}
              className={`nav-dot ${activeIdx === idx ? 'active' : ''}`}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}: ${label}`}
              aria-current={activeIdx === idx ? 'true' : 'false'}
            ></button>
          );
        })}
      </nav>

      {/* 3. Main deck scroll container */}
      <main className="deck" ref={deckRef}>
        <section 
          className={`scene ${activeIdx === 0 ? 'active' : ''}`} 
          data-index={0}
          aria-label="Cover Slide"
        >
          <IntroScene onScrollNext={() => scrollToIndex(1)} />
        </section>

        <section 
          className={`scene ${activeIdx === 1 ? 'active' : ''}`} 
          data-index={1}
          aria-label="Swarm Architecture"
        >
          <ArchitectureScene onScrollNext={() => scrollToIndex(2)} />
        </section>

        <section 
          className={`scene ${activeIdx === 2 ? 'active' : ''}`} 
          data-index={2}
          aria-label="Tigris Platform Features"
        >
          <TigrisScene onScrollNext={() => scrollToIndex(3)} />
        </section>

        <section 
          className={`scene ${activeIdx === 3 ? 'active' : ''}`} 
          data-index={3}
          aria-label="Governance & State"
        >
          <SponsorsScene onScrollNext={() => scrollToIndex(4)} />
        </section>

        <section 
          className={`scene ${activeIdx === 4 ? 'active' : ''}`} 
          data-index={4}
          aria-label="Summary"
        >
          <ConclusionScene onRestart={() => scrollToIndex(0)} />
        </section>
      </main>
    </>
  );
}
