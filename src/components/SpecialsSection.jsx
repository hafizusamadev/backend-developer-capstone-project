import React from 'react';
import { specialsData } from '../data/specialsData';
import SpecialCard from './SpecialCard';

/**
 * Specials / Highlights section displaying weekly specials and online menu CTA.
 */
export default function SpecialsSection() {
  return (
    <section className="specials-section" id="menu" aria-labelledby="specials-heading">
      <div className="container">
        <div className="specials-header">
          <h2 id="specials-heading" className="section-title">
            This Week's Specials!
          </h2>
          <button
            type="button"
            className="btn btn-primary"
            aria-label="View the full Little Lemon online menu"
          >
            Online Menu
          </button>
        </div>
        <div className="specials-grid">
          {specialsData.map((item) => (
            <SpecialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
