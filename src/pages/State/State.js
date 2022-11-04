import React, {useState} from 'react';
import styles from './State.module.css'
import FormContainer from "../../components/FormContainer/FormContainer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {BiError} from "react-icons/bi";


const State = () => {
    const [disabled, setDisabled] = useState(true);
    const [state, setState] = useState({
        error: false,
        passwordError: false,

    });

    function handleSubmit(e) {
        console.log(state)
        const isEmpty = Object.values(state).every(x => x !== null || x !== '');
        console.log(isEmpty)
        e.preventDefault()
        setState(prevState => {
            return{
                ...prevState,
                error: false,
                passwordError: false,
            }
        })

        if(state.password !== state.passwordRepeat){
            setState(prevState => {
                return{
                    ...prevState,
                    passwordError: true
                }
            })
        } if(state.firstname === '' || state.lastname === ''){
            setState(prevState => {
                return{
                    ...prevState,
                    error: true
                }
            })
        }
    }

    function handleChange(e) {
        console.log(e.target.value)
        if (e.target.value === 'Accept') {
            setDisabled(!disabled)
        }
        setState(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className={styles['state__container']}>
            <form onSubmit={handleSubmit} className={styles['form']}>
                <FormContainer>
                    <h1>State Form</h1>
                    <div className={styles['input__container']}>
                        <div className={styles['input__left']}>
                            <div className={styles['name__container']}>
                                <Input
                                    type='text'
                                    name='firstname'
                                    id='firstname__id'
                                    className='input__item'
                                    placeholder='First name...'
                                    onChange={handleChange}
                                />

                                <Input
                                    type='text'
                                    name='lastname'
                                    id='lastname__id'
                                    className='input__item'
                                    placeholder='Last name...'
                                    onChange={handleChange}
                                />
                            </div>
                            {(state.firstname === '' || state.lastname === '')&& <span className={styles['error__message']}>Voor en achternaam zijn verplicht</span>}
                            <Input
                                type='email'
                                name='email'
                                id='email__id'
                                className='input__item'
                                placeholder='Email...'
                                onChange={handleChange}
                            />
                            {/*{state.email === '' && <span className={styles['error__message']}>email is verplicht</span>}*/}

                            <Input
                                type='number'
                                name='phonenumber'
                                id='phone-number__id'
                                className='input__item'
                                placeholder='Phonenumber'
                                onChange={handleChange}
                            />
                            <Input
                                type='text'
                                name='city'
                                id='city__id'
                                className='input__item'
                                placeholder='City...'
                                onChange={handleChange}
                            />
                            <select
                                name="country"
                                id="country__id"
                                className={styles["select__item"]}
                                onChange={handleChange}
                            >
                                <option disabled selected value> -- select an option -- </option>
                                <option name="NL" className={styles['special__option']}>Netherlands</option>
                                <option name="BE" className={styles['special__option']}>Belgium</option>
                                <option name="DE" className={styles['special__option']}>Germany</option>
                                <option name="FR" className={styles['special__option']}>France</option>
                                <option name="GB" className={styles['special__option']}>United Kingdom</option>
                            </select>
                            <Input
                                type='password'
                                name='password'
                                id='repeat__id'
                                className='input__item'
                                placeholder='Password...'
                                onChange={handleChange}
                            />
                            <Input
                                type='password'
                                name='passwordRepeat'
                                id='repeat-password__id'
                                className='input__item'
                                placeholder='Repeat password...'
                                onChange={handleChange}
                            />
                            {/*Live update variant:*/}
                            {state.password !== state.passwordRepeat && <span className={styles['error__message']}><BiError/> Wachtwoorden komen niet overeen</span>}
                            {/*Na Submit variant:*/}
                            {state.passwordError && <span className={styles['error__message']}><BiError/> Wachtwoorden komen niet overeen</span>}
                        </div>
                        <div className={styles["input__right"]}>
                            <p>Gotta love this form right?</p>
                            <div className={styles["radio__container"]}>
                                <Input
                                    type='radio'
                                    name='radio'
                                    value='Yes'
                                    id='awnser-a__id'
                                    className='radio'
                                    onChange={handleChange}
                                >
                                    <span>Yes </span>
                                </Input>
                                <Input
                                    type='radio'
                                    name='radio'
                                    value='Medium'
                                    id='awnser-b__id'
                                    className='radio'
                                    onChange={handleChange}
                                >
                                    <span>Medium </span>
                                </Input>
                                <Input
                                    type='radio'
                                    name='radio'
                                    value='No'
                                    id='awnser-c__id'
                                    className='radio'
                                    onChange={handleChange}
                                >
                                    <span>No </span>
                                </Input>
                            </div>
                            <textarea
                                name="textarea"
                                id={styles["textarea__id"]}
                                cols="32"
                                rows="15"
                                placeholder='Comments...'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <Input
                        type='checkbox'
                        name='conditions'
                        value="Accept"
                        id='conditions__id'
                        className='check__item'
                        onChange={handleChange}
                    >
                        <span>I accept the Terms & Conditions: </span>
                    </Input>
                    <Button
                        type='submit'
                        className='button'
                        disabled={disabled}
                    >
                        Sent
                    </Button>
                </FormContainer>
            </form>
        </div>
    );
};

export default State;