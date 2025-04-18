import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  showTooltip = () => {
    this.setState({ isVisible: true });
  };

  hideTooltip = () => {
    this.setState({ isVisible: false });
  };

  render() {
    const { text, tooltipText } = this.props;
    const { isVisible } = this.state;

    return (
      <span
        className="tooltip-wrapper"
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
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
}

export default Tooltip;
