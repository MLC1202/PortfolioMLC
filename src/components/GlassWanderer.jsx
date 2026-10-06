import React from 'react';
import './GlassWanderer.css';

// Forma decorativa que acompanha a rolagem; a posição vem só do CSS (animation-timeline)
export default function GlassWanderer() {
  return (
    <div className="wanderer" aria-hidden="true">
      <div className="wanderer-blob" />
      <div className="wanderer-orb float" />
    </div>
  );
}
