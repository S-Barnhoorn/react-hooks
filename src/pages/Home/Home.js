import React from 'react';
import styles from './Home.module.css'
import FormContainer from "../../components/FormContainer/FormContainer";
import Input from "../../components/Input/Input";

const Home = () => {
    return (
        <FormContainer>
            <p>Username:</p>
            <Input
                type='text'
                name='username'
                id='username__id'
                className='input__item'
                placeholder='Username...'
            />
            <p>Email:</p>
            <Input
                type='email'
                name='email'
                id='email__id'
                className='input__item'
                placeholder='Email...'
            />
        </FormContainer>
    );
};

export default Home;