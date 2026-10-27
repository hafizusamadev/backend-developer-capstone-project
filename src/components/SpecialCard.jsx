import React from 'react';

/**
 * Card representing an individual special dish.
 */
export default function SpecialCard({ item }) {
  return (
    <article className="special-card">
      <div className="special-card-image-wrapper">
        <img src={item.image} alt={item.alt} className="special-card-image" loading="lazy" />
      </div>
      <div className="special-card-body">
        <div className="special-card-header">
          <h3 className="special-title">{item.title}</h3>
          <span className="special-price">{item.price}</span>
        </div>
        <p className="special-description">{item.description}</p>
        <button
          type="button"
          className="order-btn"
          aria-label={`Order ${item.title} for delivery`}
        >
          Order a delivery <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </article>
  );
}
