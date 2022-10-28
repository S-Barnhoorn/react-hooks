import React, {useState} from 'react';
import styles from './State.module.css'
import FormContainer from "../../components/FormContainer/FormContainer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const State = () => {
    const [disabled, setDisabled] = useState(true);
    const [state, setState] = useState({
        firstname: '',
        lastname: '',
    });

    function handleSubmit(e){
        e.preventDefault()
        console.log(state)
    }

    function handleChange(e){
        if(e.target.value === 'Accept'){
            setDisabled(!disabled)
        }
        setState(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    console.log(disabled)

    return (
        <div className={styles['state__container']}>
            <form onSubmit={handleSubmit} className={styles['form']}>
                <FormContainer>
                    <h1>State formulier</h1>
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
                            <Input
                                type='email'
                                name='email'
                                id='email__id'
                                className='input__item'
                                placeholder='Email...'
                                onChange={handleChange}
                            />
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
                                <option name="NL">Netherlands</option>
                                <option name="BE">Belgium</option>
                                <option name="DE">Germany</option>
                                <option name="FR">France</option>
                                <option name="GB">United Kingdom</option>
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
                                name='password-repeat'
                                id='repeat-password__id'
                                className='input__item'
                                placeholder='Repeat password...'
                                onChange={handleChange}
                            />
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
                                    id='awnser-b__id'
                                    className='radio'
                                    onChange={handleChange}
                                >
                                    <span>No </span>
                                </Input>
                            </div>
                            <textarea
                                name="textarea"
                                id={styles["textarea__id"]}
                                cols="40"
                                rows="13"
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