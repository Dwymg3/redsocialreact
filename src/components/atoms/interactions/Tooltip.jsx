import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({text, children}) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="tooltip-container"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && <div className="tooltip">{text}</div>}
        </div>
    );
};

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};


export default Tooltip;