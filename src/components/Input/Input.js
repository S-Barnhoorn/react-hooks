import React from 'react';
import styles from './Input.module.css'

const Input = ({type, name, id, className, placeholder, children}) => {
    return (
        <label htmlFor={id}>
            {children}
            <input
                type={type}
                name={name}
                id={id}
                className={className}
                placeholder={placeholder}
            />
        </label>
    );
};

export default Input;