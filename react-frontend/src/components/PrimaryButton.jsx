import React from 'react';
import PropTypes from 'prop-types';

/**
 * PrimaryButton
 * A small, accessible, and reusable primary button component.
 * Props:
 * - children: node or string to display inside the button
 * - onClick: click handler
 * - type: 'button' | 'submit' | 'reset'
 * - disabled: boolean
 * - className: additional class names
 */
export default function PrimaryButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ariaLabel,
}) {
  const base = 'px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed';
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

PrimaryButton.defaultProps = {
  onClick: undefined,
  disabled: false,
  className: '',
  ariaLabel: undefined,
};
