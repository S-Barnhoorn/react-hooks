import React, {useEffect, useRef} from 'react';
import styles from "../State/State.module.css";
import FormContainer from "../../components/FormContainer/FormContainer";
import {BiError} from "react-icons/bi";
import Button from "../../components/Button/Button";

const Ref = () => {

    let firstNameRef = useRef('null')
    let lastNameRef = useRef('')
    const renders = useRef(0);

    useEffect(() => {
        firstNameRef.current.focus()
    },[])

    useEffect(() => {
        console.log(renders.current)
    },[renders])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(firstNameRef.current.value)
    }

    return (
        <div className={styles['state__container']}>
            <form onSubmit={handleSubmit} className={styles['form']}>
                <FormContainer>
                    <h1>Ref Form</h1>
                    <div className={styles['input__container']}>
                        <div className={styles['input__left']}>
                            <div className={styles['name__container']}>
                                <input
                                    type='text'
                                    ref={firstNameRef}
                                    name='firstname'
                                    id='firstname__id'
                                    className={styles['input__item']}
                                    placeholder='First name...'
                                />

                                <input
                                    type='text'
                                    ref={lastNameRef}
                                    name='lastname'
                                    id='lastname__id'
                                    className={styles['input__item']}
                                    placeholder='Last name...'
                                />
                            </div>
                            <input
                                type='email'
                                name='email'
                                id='email__id'
                                className={styles['input__item']}
                                placeholder='Email...'
                            />
                            <input
                                type='number'
                                name='phonenumber'
                                id='phone-number__id'
                                className={styles['input__item']}
                                placeholder='Phonenumber'
                            />
                            <input
                                type='text'
                                name='city'
                                id='city__id'
                                className={styles['input__item']}
                                placeholder='City...'
                            />
                            <select
                                name="country"
                                id="country__id"
                                className={styles["select__item"]}
                            >
                                <option disabled selected value> -- select an option --</option>
                                <option name="NL" className={styles['special__option']}>Netherlands</option>
                                <option name="BE" className={styles['special__option']}>Belgium</option>
                                <option name="DE" className={styles['special__option']}>Germany</option>
                                <option name="FR" className={styles['special__option']}>France</option>
                                <option name="GB" className={styles['special__option']}>United Kingdom</option>
                            </select>
                            <input
                                type='password'
                                name='password'
                                id='repeat__id'
                                className={styles['input__item']}
                                placeholder='Password...'
                            />
                            <input
                                type='password'
                                name='passwordRepeat'
                                id='repeat-password__id'
                                className={styles['input__item']}
                                placeholder='Repeat password...'
                            />
                        </div>
                        <div className={styles["input__right"]}>
                            <h4>Gotta love this form right?</h4>
                            <div className={styles["radio__container"]}>
                                <label htmlFor="awnser-a__id">
                                    <input
                                        type='radio'
                                        name='radio'
                                        value='Yes'
                                        id='awnser-a__id'
                                        className={styles['radio']}
                                    />
                                    <span>Yes </span>
                                </label>
                                <label htmlFor="awnser-b__id">
                                    <input
                                        type='radio'
                                        name='radio'
                                        value='Medium'
                                        id='awnser-b__id'
                                        className={styles['radio']}
                                    />
                                    <span>Medium </span>
                                </label>
                                <label htmlFor="awnser-c__id">
                                    <input
                                        type='radio'
                                        name='radio'
                                        value='No'
                                        id='awnser-c__id'
                                        className={styles['radio']}
                                    />
                                    <span>No </span>
                                </label>
                            </div>
                            <textarea
                                name="textarea"
                                id={styles["textarea__id"]}
                                cols="32"
                                rows="15"
                                placeholder='Comments...'
                            />
                        </div>
                    </div>
                    <label htmlFor="conditions__id">
                        <span>I accept the Terms & Conditions: </span>
                        <input
                            type='checkbox'
                            name='conditions'
                            value="Accept"
                            id='conditions__id'
                            className={styles['check__item']}
                        />
                    </label>
                    <Button
                        type='submit'
                        className='button'
                    >
                        Sent
                    </Button>
                </FormContainer>
                {/*{result && state &&*/}
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

export default Ref;