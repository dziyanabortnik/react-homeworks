import React, { useState } from 'react';
import './Tooltip.css';

interface ITooltipProps {
  text: string;
  tooltipText: string;
}

const Tooltip: React.FC<ITooltipProps> = ({ text, tooltipText }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

    return (
      <span
        className="tooltip-wrapper"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        <span className="tooltip-target">{text}</span>
        {isVisible && (
          <span className="tooltip-box">
            <a href={`tel:${tooltipText}`} className="tooltip-link">
              {tooltipText}
            </a>
          </span>
        )}
      </span>
    );
}

export default Tooltip;
