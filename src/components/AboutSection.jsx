import React from 'react';

/**
 * About Section describing Mario and Adrian and the Little Lemon story.
 */
export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="container about-container">
        <div className="about-text">
          <h2 id="about-heading" className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-p">
            Little Lemon was founded by two Italian brothers, Mario and Adrian,
            who moved to the United States to fulfill their culinary dream.
            Blending authentic Mediterranean recipes with modern flair, their
            dishes capture the zest and passion of coastal Italy and Greece.
          </p>
          <p className="about-p">
            Adrian curates our warm, inviting ambiance, while Mario leads our
            kitchen, preparing every delicacy with fresh, locally sourced
            ingredients and traditional family recipes.
          </p>
        </div>
        <div className="about-images">
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=500&q=80"
            alt="Chef Mario carefully preparing a Mediterranean signature dish"
            className="about-img img-top"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80"
            alt="Chef Adrian smiling in the modern restaurant kitchen"
            className="about-img img-bottom"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
