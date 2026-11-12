import React, { useEffect, useRef } from 'react';
import './GlassWanderer.css';

const SAMPLES = 600;
const TIP_RADIUS = 15;
const FREE_DROPS = [
  { ahead: 42, radius: 7 },
  { ahead: 78, radius: 4.5 },
];

// Fio d'água que desce pelas margens e se revela conforme a rolagem.
// Usa JS porque a ponta precisa seguir o ponto exato do caminho SVG.
export default function GlassWanderer() {
  const wrapperRef = useRef(null);
  const svgRef = useRef(null);
  const baseRef = useRef(null);
  const coreRef = useRef(null);
  const tipRef = useRef(null);
  const freeRefs = useRef([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const svg = svgRef.current;
    const base = baseRef.current;
    const core = coreRef.current;
    const tip = tipRef.current;

    let total = 0;
    let ys = [];
    let frame = 0;

    // Tabela y → comprimento, para não varrer o caminho a cada evento de rolagem
    const lengthAtY = (y) => {
      let lo = 0;
      let hi = SAMPLES;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (ys[mid] < y) lo = mid + 1;
        else hi = mid;
      }
      if (lo === 0) return 0;
      const span = ys[lo] - ys[lo - 1] || 1;
      const fraction = (y - ys[lo - 1]) / span;
      return ((lo - 1 + fraction) / SAMPLES) * total;
    };

    const place = (element, length, radius) => {
      const point = core.getPointAtLength(Math.min(total, length));
      element.style.transform = `translate3d(${point.x - radius}px, ${point.y - radius}px, 0)`;
    };

    const update = () => {
      frame = 0;
      // display: none (celular ou movimento reduzido) zera a altura
      if (!total || !wrapper.offsetHeight) return;

      const viewport = window.innerHeight;
      const maxScroll = Math.max(1, wrapper.offsetHeight - viewport);
      const progress = Math.min(1, window.scrollY / maxScroll);
      // A ponta passa de 30% a 100% da tela, para chegar ao fim da página junto com a rolagem
      const tipY = window.scrollY + viewport * (0.3 + 0.7 * progress);
      const length = lengthAtY(tipY);

      const dash = `${length} ${total * 2}`;
      base.setAttribute('stroke-dasharray', dash);
      core.setAttribute('stroke-dasharray', dash);

      place(tip, length, TIP_RADIUS);
      FREE_DROPS.forEach((drop, index) => {
        place(freeRefs.current[index], length + drop.ahead, drop.radius);
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const build = () => {
      const width = wrapper.clientWidth;
      const height = wrapper.offsetHeight;
      if (!width || !height) {
        total = 0;
        return;
      }

      const left = width * 0.08;
      const right = width * 0.92;
      const segments = Math.max(2, Math.round(height / (window.innerHeight * 0.8)));
      const step = height / segments;

      let path = `M${left} 0`;
      for (let k = 1; k <= segments; k += 1) {
        const fromX = (k - 1) % 2 ? right : left;
        const toX = k % 2 ? right : left;
        const fromY = (k - 1) * step;
        const toY = k * step;
        path += ` C${fromX} ${fromY + step / 2} ${toX} ${toY - step / 2} ${toX} ${toY}`;
      }

      svg.setAttribute('width', width);
      svg.setAttribute('height', height);
      base.setAttribute('d', path);
      core.setAttribute('d', path);

      total = core.getTotalLength();
      ys = Array.from({ length: SAMPLES + 1 }, (_, i) => core.getPointAtLength((total * i) / SAMPLES).y);
      update();
    };

    const resizeObserver = new ResizeObserver(build);
    resizeObserver.observe(wrapper);
    window.addEventListener('scroll', schedule, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="stream" ref={wrapperRef} aria-hidden="true">
      <svg className="stream-svg" ref={svgRef}>
        <path ref={baseRef} className="stream-base" />
        <path ref={coreRef} className="stream-core" />
      </svg>
      {FREE_DROPS.map((drop, index) => (
        <span
          key={drop.ahead}
          ref={(el) => (freeRefs.current[index] = el)}
          className="stream-drop"
          style={{ width: drop.radius * 2, height: drop.radius * 2 }}
        />
      ))}
      <span
        ref={tipRef}
        className="stream-tip"
        style={{ width: TIP_RADIUS * 2, height: TIP_RADIUS * 2 }}
      />
    </div>
  );
}
