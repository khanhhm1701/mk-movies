import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

const Modal = ({ id, active, children }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(active);
    }, [active]);

    return (
        <div id={id} className={`modal ${isActive ? 'active' : ''}`}>
            {children}
        </div>
    );
}


Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}


export default Modal;
