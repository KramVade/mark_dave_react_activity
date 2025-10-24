import React from 'react';
import '../App.css';

const SidePanel = ({ isOpen, onClose }) => {
  // We use a separate state for the animation class to allow for the closing animation
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for the animation to finish before calling the parent's onClose
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // This should match the CSS transition duration
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`side-panel-backdrop ${isOpen && !isClosing ? 'open' : ''}`} onClick={handleClose}>
      <div className={`side-panel ${isOpen && !isClosing ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="side-panel-header">
          <h2>Home Panel</h2>
          <button onClick={handleClose} className="side-panel-close-btn">&times;</button>
        </div>
        <div className="side-panel-body">
          {/* You can add content here later */}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;