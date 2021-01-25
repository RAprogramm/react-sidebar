import React from 'react'
import validate from './validateInfo'
import useForm from './useForm'
import './Form.css'
import { Link } from 'react-router-dom'

const FormSignUp = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  )

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit} noValidate>
        <h1>
          Get started with us today! Create your account by filling out
          the information below.
        </h1>
        <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            id='username'
            type='text'
            className='form-input'
            name='username'
            placeholder='Enter your username...'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            id='email'
            type='text'
            className='form-input'
            name='email'
            placeholder='Enter your email...'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            id='password'
            type='password'
            className='form-input'
            name='password'
            placeholder='Enter your password...'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password2' className='form-label'>
            Confirm password
          </label>
          <input
            id='password2'
            type='password'
            className='form-input'
            name='password2'
            placeholder='Repeat your password...'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign Up
        </button>
        <span className='form-input-login'>
          Already have an accout? Login{' '}
          <Link to='/reports/report_1'>here</Link>
        </span>
      </form>
    </div>
  )
}

export default FormSignUp
