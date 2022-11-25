import React from 'react';
import './Form.module.css'
import styles from "../State/State.module.css";
import FormContainer from "../../components/FormContainer/FormContainer";
import Input from "../../components/Input/Input";
import {BiError} from "react-icons/bi";
import {useForm} from 'react-hook-form'
import Button from "../../components/Button/Button";

const Form = () => {

    const { register, handleSubmit } = useForm();

    function onSubmit(data){
        console.log(data)
    }

    return (
        <div className={styles['state__container']}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
                <FormContainer>
                    <h1>Form Form</h1>
                    <div className={styles['input__container']}>
                        <div className={styles['input__left']}>
                            <div className={styles['name__container']}>
                                <Input
                                    type='text'
                                    name='firstName'
                                    id='firstname__id'
                                    className='input__item'
                                    placeholder='First name...'
                                    register={register}
                                    validation= {{
                                        required: "Todo text is required",
                                        minLength: {
                                            value: 3,
                                            message: "Please enter a minimum of 3 characters"
                                        }
                                    }}
                                />
                                <Input
                                    type='text'
                                    register={register}
                                    name='lastname'
                                    id='lastname__id'
                                    className='input__item'
                                    placeholder='Last name...'
                                />
                            </div>
                            {/*{(state.firstname === '' || state.lastname === '') &&*/}
                            {/*<span className={styles['error__message']}>Voor en achternaam zijn verplicht</span>}*/}
                            <Input
                                type='email'
                                register={register}
                                name='email'
                                id='email__id'
                                className='input__item'
                                placeholder='Email...'
                                // onChange={handleChange}
                            />
                            {/*{state.email === '' && <span className={styles['error__message']}>email is verplicht</span>}*/}

                            <Input
                                type='number'
                                register={register}
                                name='number'
                                id='phone-number__id'
                                className='input__item'
                                placeholder='Phonenumber'
                                // onChange={handleChange}
                            />
                            <Input
                                type='text'
                                register={register}
                                name='city'
                                id='city__id'
                                className='input__item'
                                placeholder='City...'
                                // onChange={handleChange}
                            />
                            <select
                                register={register}
                                name='country'
                                id="country__id"
                                className={styles["select__item"]}
                                // onChange={handleChange}
                            >
                                <option disabled selected value> -- select an option --</option>
                                <option name="NL" className={styles['special__option']}>Netherlands</option>
                                <option name="BE" className={styles['special__option']}>Belgium</option>
                                <option name="DE" className={styles['special__option']}>Germany</option>
                                <option name="FR" className={styles['special__option']}>France</option>
                                <option name="GB" className={styles['special__option']}>United Kingdom</option>
                            </select>
                            <Input
                                type='password'
                                register={register}
                                name='password'
                                id='repeat__id'
                                className='input__item'
                                placeholder='Password...'
                                // onChange={handleChange}
                            />
                            <Input
                                type='password'
                                register={register}
                                name='repeatPassword'
                                id='repeat-password__id'
                                className='input__item'
                                placeholder='Repeat password...'
                                // onChange={handleChange}
                            />
                            {/*Live update variant:*/}
                            {/*{state.password !== state.passwordRepeat && <span*/}
                            {/*    className={styles['error__message']}><BiError/> Wachtwoorden komen niet overeen</span>}*/}
                            {/*/!*Na Submit variant:*!/*/}
                            {/*{state.passwordError && <span className={styles['error__message']}><BiError/> Wachtwoorden komen niet overeen</span>}*/}
                        </div>
                        <div className={styles["input__right"]}>
                            <h4>Gotta love this form right?</h4>
                            <div className={styles["radio__container"]}>
                                <Input
                                    type='radio'
                                    register={register}
                                    name='radio'
                                    value='Yes'
                                    id='awnser-a__id'
                                    className='radio'
                                    // onChange={handleChange}
                                >
                                    <span>Yes </span>
                                </Input>
                                <Input
                                    type='radio'
                                    register={register}
                                    name='radio'
                                    value='Medium'
                                    id='awnser-b__id'
                                    className='radio'
                                    // onChange={handleChange}
                                >
                                    <span>Medium </span>
                                </Input>
                                <Input
                                    type='radio'
                                    register={register}
                                    name='radio'
                                    value='No'
                                    id='awnser-c__id'
                                    className='radio'
                                    // onChange={handleChange}
                                >
                                    <span>No </span>
                                </Input>
                            </div>
                            <textarea
                                register={register}
                                name='comment'
                                id={styles["textarea__id"]}
                                cols="32"
                                rows="15"
                                placeholder='Comments...'
                                // onChange={handleChange}
                            />
                        </div>
                    </div>
                    <Input
                        type='checkbox'
                        register={register}
                        name='conditions'
                        value="Accept"
                        id='conditions__id'
                        className='check__item'
                        // onChange={handleChange}
                    >
                        <span>I accept the Terms & Conditions: </span>
                    </Input>
                    <Button
                        type='submit'
                        className='button'
                        // disabled={disabled}
                    >
                        Sent
                    </Button>
                </FormContainer>
                {/*{result &&*/}
                {/*<div className={styles['result__container']}>*/}
                {/*    <h1>Result Form</h1>*/}
                {/*    <div className={styles['result__split']}>*/}
                {/*        <article className={styles['result__articles']}>*/}
                {/*            <h4>Voornaam: </h4>*/}
                {/*            <span>{state.firstname}</span>*/}
                {/*            <h4>Achternaam: </h4>*/}
                {/*            <span>{state.lastname}</span>*/}
                {/*            <h4>Telefoon nummer: </h4>*/}
                {/*            <span>{state.phonenumber}</span>*/}
                {/*            <h4>Stad: </h4>*/}
                {/*            <span>{state.city}</span>*/}
                {/*            <h4>Land: </h4>*/}
                {/*            <span>{state.country}</span>*/}
                {/*        </article>*/}
                {/*        <article className={styles['result__articles']}>*/}
                {/*            <h4>Likey? </h4>*/}
                {/*            <span>{state.radio}</span>*/}
                {/*            <h4>Comments: </h4>*/}
                {/*            <span>{state.textarea}</span>*/}
                {/*            <h4>Akkoord? </h4>*/}
                {/*            <span>{state.conditions}</span>*/}
                {/*        </article>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*}*/}
            </form>
        </div>
    );
};

export default Form;