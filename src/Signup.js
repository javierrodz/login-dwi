import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Validation from './SigninValidation';
import axios from 'axios';

function Signup() {
    
    const [values, setValues ] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-dark vh-100'> 
            <div className='bg-white p-3 rounded w-25'>
                
                <h2>Sign-Up</h2>
                
                <form action='' onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='name' placeholder='Enter Name' name='name'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign Up</strong></button>
                        <p></p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Log In</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup