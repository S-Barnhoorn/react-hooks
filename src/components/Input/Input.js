import React from 'react';
import styles from './Input.module.css'

const Input = ({type, name, id, className, placeholder, children, labelClass, onChange, value }) => {
    return (
        <label className={labelClass} htmlFor={id}>
            {children}
            <input
                type={type}
                name={name}
                id={id}
                className={styles[className]}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

export default Input;