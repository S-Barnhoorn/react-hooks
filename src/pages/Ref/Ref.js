import React, {useEffect, useRef, useState} from 'react';
import styles from "../State/State.module.css";
import FormContainer from "../../components/FormContainer/FormContainer";
import {BiError} from "react-icons/bi";
import Button from "../../components/Button/Button";
// import image from "../../assets/Untitled.jpeg";

const Ref = () => {
    console.log("Render Ref")

    const [container, setContainer] = useState([])
    const [result, setResult] = useState(false)

    let firstNameRef = useRef('');
    let lastNameRef = useRef('');
    let emailRef = useRef('');
    let phoneRef = useRef(0);
    let cityRef = useRef('');
    let countryRef = useRef('');
    let passwordRef = useRef('');
    let repeatPasswordRef = useRef('');
    let radioRef1 = useRef(null);
    let radioRef2 = useRef(null);
    let radioRef3 = useRef(null);
    let textareaRef = useRef('');
    let checkRef = useRef(null);
    //
    // useEffect(() => {
    //     firstNameRef.current.focus()
    // }, [])

    function handleSubmit(e) {
        e.preventDefault()
        setResult(true)
        setContainer([firstNameRef, lastNameRef, emailRef, emailRef, phoneRef, cityRef, countryRef, checkRef])
        console.log(container)
        console.log(firstNameRef.current.value)
        console.log(lastNameRef.current.value)
        console.log(emailRef.current.value)
        console.log(phoneRef.current.value)
        console.log(cityRef.current.value)
        console.log(passwordRef.current.value)
        console.log(repeatPasswordRef.current.value)
        console.log(textareaRef.current.value)
        console.log('check', checkRef.current.checked)
        if(radioRef1.current.checked){
            console.log('ref', radioRef1.current.value)
        }
        if(radioRef2.current.checked){
            console.log('ref', radioRef2.current.value)
        }
        if(radioRef3.current.checked){
            console.log('ref', radioRef3.current.value)
        }
    }

    return (
        <div className={styles['state__container']}>
            {console.log(container)}
            <form onSubmit={handleSubmit} className={styles['form']}>
                {/*<img src={image} alt='kleur' className={styles['image']}/>*/}
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
                                ref={emailRef}
                                name='email'
                                id='email__id'
                                className={styles['input__item']}
                                placeholder='Email...'
                            />
                            <input
                                type='number'
                                ref={phoneRef}
                                name='phonenumber'
                                id='phone-number__id'
                                className={styles['input__item']}
                                placeholder='Phonenumber'
                            />
                            <input
                                type='text'
                                ref={cityRef}
                                name='city'
                                id='city__id'
                                className={styles['input__item']}
                                placeholder='City...'
                            />
                            <select
                                name="country"
                                ref={countryRef}
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
                                ref={passwordRef}
                                name='password'
                                id='repeat__id'
                                className={styles['input__item']}
                                placeholder='Password...'
                            />
                            <input
                                type='password'
                                ref={repeatPasswordRef}
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
                                        ref={radioRef1}
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
                                        ref={radioRef2}
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
                                        ref={radioRef3}
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
                                ref={textareaRef}
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
                            ref={checkRef}
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
                {result &&
                <div className={styles['result__container']}>
                    <h1>Result Form</h1>
                    <div className={styles['result__split']}>
                        <article className={styles['result__articles']}>
                            <h4>Voornaam: </h4>
                            <span>{firstNameRef.current.value}</span>
                            <h4>Achternaam: </h4>
                            <span>{lastNameRef.current.value}</span>
                            <h4>Telefoon nummer: </h4>
                            <span>{phoneRef.current.value}</span>
                            <h4>Stad: </h4>
                            <span>{cityRef.current.value}</span>
                            <h4>Land: </h4>
                            <span>{countryRef.current.value}</span>
                        </article>
                        <article className={styles['result__articles']}>
                            <h4>Likey? </h4>
                            {radioRef1.current.checked &&
                            <span>{radioRef1.current.value}</span>}
                            {radioRef2.current.checked &&
                            <span>{radioRef2.current.value}</span>}
                            {radioRef3.current.checked &&
                            <span>{radioRef3.current.value}</span>}
                            <h4>Comments: </h4>
                            <span>{textareaRef.current.value}</span>
                            <h4>Akkoord? </h4>
                            {checkRef.current.checked ?
                            <span>{checkRef.current.value}</span>
                                :
                                <span>Not Accepted</span>}
                        </article>
                    </div>
                </div>
                }
                {/*<img src={image} alt='kleur' className={styles['image']}/>*/}
            </form>
        </div>
    );
};

export default Ref;