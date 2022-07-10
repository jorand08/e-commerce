import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Form from './Form'
import './styles/loginstyle.css'
import UserLogged from './UserLogged'

const LoginScreen = () => {
 const [token, setToken] = useState('token')

const changedToken = localStorage.getItem('token')
useEffect(()=>{
  setToken(changedToken)
},[changedToken])

  return (
    <div className='login'>
      {
        token ?
          <UserLogged/>
        : 
          <Form /> 
      }
    </div>
  )
}

export default LoginScreen