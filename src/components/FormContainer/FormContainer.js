import React from 'react';
import styles from './FormContainer.module.css'

const FormContainer = ({children}) => {
    return (
        <form className={styles['form']}>
            <div className={styles['form__container']}>
                {children}
            </div>
        </form>
    );
};

export default FormContainer;