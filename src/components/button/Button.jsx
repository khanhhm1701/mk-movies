import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ className, onClick, children }) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick ? () => onClick() : null}
        >
            {children}
        </button>
    );
}


Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;
