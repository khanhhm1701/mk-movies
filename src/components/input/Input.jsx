import React from 'react';

import './input.scss';

const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange ? (e) => onChange(e) : null}
        />
    );
}

export default Input;
