import React, {useState} from 'react';
import './Form.module.css'
import styles from "../State/State.module.css";
import FormContainer from "../../components/FormContainer/FormContainer";
import {BiError} from "react-icons/bi";
import {useForm} from 'react-hook-form'
import Button from "../../components/Button/Button";
// import image from "../../assets/Untitled.jpeg";

const Form = () => {
    console.log('Render Form')

    const {register, handleSubmit, formState: {isDirty} } = useForm();
    const [result, setResult] = useState(false)
    const [data, setData] = useState({})

    function onSubmit(data) {
        setResult(true)
        setData(data)
        console.log(data)
    }

    return (
        <div className={styles['state__container']}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
                {/*<img src={image} alt='kleur' className={styles['image']}/>*/}
                <FormContainer>
                    <h1>Form Form</h1>
                    <div className={styles['input__container']}>
                        <div className={styles['input__left']}>
                            <div className={styles['name__container']}>
                                <input
                                    type='text'
                                    id='firstname__id'
                                    className={styles['input__item']}
                                    placeholder='First name...'
                                    {...register('firstName', {
                                            required: "Todo text is required",
                                            minLength: {
                                                value: '3',
                                                message: "Please enter a minimum of 3 characters"
                                            }
                                    })}
                                />
                                <input
                                    type='text'
                                    {...register('lastName', {})}
                                    id='lastname__id'
                                    className={styles['input__item']}
                                    placeholder='Last name...'
                                />
                            </div>
                            <input
                                type='email'
                                {...register('email', {})}
                                id='email__id'
                                className={styles['input__item']}
                                placeholder='Email...'
                            />
                            <input
                                type='number'
                                {...register('number', {})}
                                id='phone-number__id'
                                className={styles['input__item']}
                                placeholder='Phonenumber'
                            />
                            <input
                                type='text'
                                {...register('city', {})}
                                id='city__id'
                                className={styles['input__item']}
                                placeholder='City...'
                            />
                            <select
                                {...register('country', {})}
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
                                {...register('password', {})}
                                id='repeat__id'
                                className={styles['input__item']}
                                placeholder='Password...'
                            />
                            <input
                                type='password'
                                {...register('repeatPassword', {})}
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
                                        {...register('radio', {})}
                                        value='Yes'
                                        id='awnser-a__id'
                                        className={styles['radio']}
                                    />
                                    <span>Yes </span>
                                </label>
                                <label htmlFor="awnser-b__id">
                                    <input
                                        type='radio'
                                        {...register('radio', {})}
                                        value='Medium'
                                        id='awnser-b__id'
                                        className={styles['radio']}
                                    />
                                    <span>Medium </span>
                                </label>
                                <label htmlFor="awnser-c__id">
                                    <input
                                        type='radio'
                                        {...register('radio', {})}
                                        value='No'
                                        id='awnser-c__id'
                                        className={styles['radio']}
                                    />
                                    <span>No </span>
                                </label>
                            </div>
                            <textarea
                                id={styles["textarea__id"]}
                                {...register('comment', {})}
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
                            {...register('conditions', {})}
                            value="Accept"
                            id='conditions__id'
                            className={styles['check__item']}
                        />
                    </label>
                    <Button
                        type='submit'
                        className='button'
                        //isDirty is een boolean die checked of een van de inputvelden is 'aangetast'. Als dat zo is dan wordt de waarde true, anders false.
                        disabled={!isDirty}
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
                            <span>{data.firstName}</span>
                            <h4>Achternaam: </h4>
                            <span>{data.lastName}</span>
                            <h4>Telefoon nummer: </h4>
                            <span>{data.number}</span>
                            <h4>Stad: </h4>
                            <span>{data.city}</span>
                            <h4>Land: </h4>
                            <span>{data.country}</span>
                        </article>
                        <article className={styles['result__articles']}>
                            <h4>Likey? </h4>
                            <span>{data.radio}</span>
                            <h4>Comments: </h4>
                            <span>{data.comment}</span>
                            <h4>Akkoord? </h4>
                            <span>{data.conditions}</span>
                        </article>
                    </div>
                </div>
                }
                {/*<img src={image} alt='kleur' className={styles['image']}/>*/}
            </form>
        </div>
    );
};

export default Form;