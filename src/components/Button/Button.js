import React from 'react';
import styles from './Button.module.css'

const Button = ({type, className, disabled}) => {
    return (
        <button
            type={type}
            className={styles[className]}
            disabled={disabled}
        >
            Sent
        </button>
    );
};

export default Button;