import React from 'react';
import styles from './Input.module.css'
import {useForm} from "react-hook-form";

const Input = ({type, name, id, className, placeholder, children, labelClass, onChange, value, validation, register }) => {

    return (
        <label className={labelClass} htmlFor={id}>
            {children}
            <input
                type={type}
                id={id}
                className={styles[className]}
                placeholder={placeholder}
                value={value}
                onChange={onChange}

                {...register(name, validation)}
            />
        </label>
        );
};

export default Input;