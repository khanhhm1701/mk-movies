import React from 'react';

import './button.scss';
import Button from './Button';

export const OutlineButton = ({ className, onClick, children }) => {
    return (
        <Button
            className={`btn-outline ${className}`}
            onClick={onClick ? () => onClick() : null}
        >
            {children}
        </Button>
    );
}
