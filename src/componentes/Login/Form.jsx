import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const [isErroLogin, setIsErroLogin] = useState(false)
    const {handleSubmit, reset, register} = useForm()

    const navigate = useNavigate()
  const submit = data =>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
    .then(res =>{
      localStorage.setItem('token', res.data.data.token)
      navigate('/')
    })
    .catch(err => {
        localStorage.setItem('token',)
        setIsErroLogin(true)
        setTimeout(()=>{
            setIsErroLogin(false)
        }, 5000)
        reset({
            email: '',
            password:''
        })
    })
  }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)} className='login_form'>
        
        <ul className='login_test'>
        <p><b>Test Data</b></p>
          <li><b><i className="fa-solid fa-envelope-circle-check"></i> </b>mason@gmail.com</li>
          <li><b><i className="fa-solid fa-key"></i> </b> mason1234</li>
        </ul>
        <ul className="login_list">
          <li className="login_item">
            <label htmlFor="login-email" className="login_label"> Email</label>
            <input 
              type="email" 
              className="login_input" 
              id='login-email'
              {...register('email')}
            />
          </li>
          <li className="login_item"><label htmlFor="login-pass" className="login_label">Password</label>
            <input 
              type="password" 
              className="login_input" 
              id='login-pass'
              {...register('password')}
            />
          </li>
        </ul>
        <button className='login_btn'>Login</button>
        </form>
    </div>
  )
}

export default Form