import React from 'react';
import './Form.module.css'
import styles from "../State/State.module.css";
import FormContainer from "../../components/FormContainer/FormContainer";
import Input from "../../components/Input/Input";

const Form = () => {
    return (
        <div className={styles['state__container']}>
            <FormContainer>
                <h1>Mega mooi formulier</h1>
                <div className={styles['input__container']}>
                    <div className={styles['input__left']}>
                        <div className={styles['name__container']}>
                            <Input
                                type='text'
                                name='firstname'
                                id='firstname__id'
                                className='input__item'
                                placeholder='First name...'
                            />
                            <Input
                                type='text'
                                name='lastname'
                                id='lastname__id'
                                className='input__item'
                                placeholder='Last name...'
                            />
                        </div>
                        <Input
                            type='email'
                            name='email'
                            id='email__id'
                            className='input__item'
                            placeholder='Email...'
                        />
                        <Input
                            type='password'
                            name='password'
                            id='repeat__id'
                            className='input__item'
                            placeholder='Password...'
                        />
                        <Input
                            type='password'
                            name='repeat-password'
                            id='repeat-password__id'
                            className='input__item'
                            placeholder='Repeat password...'
                        />
                    </div>
                    <div className={styles["input__right"]}>
                        <Input
                            type='text'
                            name='firstname'
                            id='firstname__id'
                            className='input__item'
                            placeholder='Firstname...'
                        />
                        <Input
                            type='text'
                            name='lastname'
                            id='lastname__id'
                            className='input__item'
                            placeholder='Lastname...'
                        />
                    </div>
                </div>
            </FormContainer>
        </div>
    );
};

export default Form;