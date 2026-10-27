import React from 'react';

/**
 * Accessible Error Message component rendered when validation fails.
 */
export default function FormErrorMessage({ id, message }) {
  if (!message) return null;

  return (
    <p id={id} className="field-error-message" role="alert" aria-live="polite">
      <span aria-hidden="true">&#9888; </span>
      {message}
    </p>
  );
}
