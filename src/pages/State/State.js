import React, {useState} from 'react';
import styles from './State.module.css'
import FormContainer from "../../components/FormContainer/FormContainer";
import Button from "../../components/Button/Button";
import {BiError} from "react-icons/bi";
// import image from '../../assets/Untitled.jpeg'


const State = () => {
    console.log('Render State')

    const [disabled, setDisabled] = useState(true);
    const [result, setResult] = useState(false)
    const [state, setState] = useState({
        error: false,
        passwordError: false,
        firstname: ''
    });

    function handleSubmit(e) {
        if (Object.keys(state).length > 3) {
            setResult(true)
        }
        e.preventDefault()
        setState(prevState => {
            return {
                ...prevState,
                error: false,
                passwordError: false,
            }
        })

        if (state.password !== state.passwordRepeat) {
            setState(prevState => {
                return {
                    ...prevState,
                    passwordError: true
                }
            })
        }
        if (state.firstname === '' || state.lastname === '') {
            setState(prevState => {
                return {
                    ...prevState,
                    error: true
                }
            })
        }
    }

    function handleChange(e) {
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
                {/*<img src={image} alt='kleur' className={styles['image']}/>*/}
                <FormContainer>
                    <h1>State Form</h1>
                    <div className={styles['input__container']}>
                        <div className={styles['input__left']}>
                            <div className={styles['name__container']}>
                                <input
                                    type='text'
                                    name='firstname'
                                    id='firstname__id'
                                    className={styles['input__item']}
                                    placeholder='First name...'
                                    onChange={handleChange}
                                />
                                <input
                                    type='text'
                                    name='lastname'
                                    id='lastname__id'
                                    className={styles['input__item']}
                                    placeholder='Last name...'
                                    onChange={handleChange}
                                />
                            </div>
                            {/*{(state.firstname === '' || state.lastname === '') &&*/}
                            {/*<span className={styles['error__message']}>Voor en achternaam zijn verplicht</span>}*/}
                            <input
                                type='email'
                                name='email'
                                id='email__id'
                                className={styles['input__item']}
                                placeholder='Email...'
                                onChange={handleChange}
                            />
                            {/*{state.email === '' && <span className={styles['error__message']}>email is verplicht</span>}*/}
                            <input
                                type='number'
                                name='phonenumber'
                                id='phone-number__id'
                                className={styles['input__item']}
                                placeholder='Phonenumber'
                                onChange={handleChange}
                            />
                            <input
                                type='text'
                                name='city'
                                id='city__id'
                                className={styles['input__item']}
                                placeholder='City...'
                                onChange={handleChange}
                            />
                            <select
                                name="country"
                                id="country__id"
                                className={styles["select__item"]}
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                            <input
                                type='password'
                                name='passwordRepeat'
                                id='repeat-password__id'
                                className={styles['input__item']}
                                placeholder='Repeat password...'
                                onChange={handleChange}
                            />
                            {/*Live update variant:*/}
                            {state.password !== state.passwordRepeat && <span
                                className={styles['error__message']}><BiError/> Wachtwoorden komen niet overeen</span>}
                            {/*Na Submit variant:*/}
                            {state.passwordError && <span className={styles['error__message']}><BiError/> Wachtwoorden komen niet overeen</span>}
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
                                        onChange={handleChange}
                                    />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="awnser-b__id">
                                    <input
                                        type='radio'
                                        name='radio'
                                        value='Medium'
                                        id='awnser-b__id'
                                        className={styles['radio']}
                                        onChange={handleChange}
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
                                        onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <label htmlFor="conditions__id">
                        <span>I accept the Terms & Conditions: </span>
                        <input
                            type='checkbox'
                            name='conditions'
                            value="Accept"
                            className={styles['check__item']}
                            id='conditions__id'
                            onChange={handleChange}
                        />
                    </label>
                    <Button
                        type='submit'
                        className='button'
                        disabled={disabled}
                    >
                        Sent
                    </Button>
                </FormContainer>
                {result && state &&
                <div className={styles['result__container']}>
                    <h1>Result Form</h1>
                    <div className={styles['result__split']}>
                        <article className={styles['result__articles']}>
                            <h4>Voornaam: </h4>
                            <span>{state.firstname}</span>
                            <h4>Achternaam: </h4>
                            <span>{state.lastname}</span>
                            <h4>Telefoon nummer: </h4>
                            <span>{state.phonenumber}</span>
                            <h4>Stad: </h4>
                            <span>{state.city}</span>
                            <h4>Land: </h4>
                            <span>{state.country}</span>
                        </article>
                        <article className={styles['result__articles']}>
                            <h4>Likey? </h4>
                            <span>{state.radio}</span>
                            <h4>Comments: </h4>
                            <span>{state.textarea}</span>
                            <h4>Akkoord? </h4>
                            <span>{state.conditions}</span>
                        </article>
                    </div>
                </div>
                }
                {/*<img src={image} alt='kleur' className={styles['image']}/>*/}
            </form>
        </div>
    );
};

export default State;