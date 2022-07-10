import React from 'react'
import { useForm } from 'react-hook-form'

const ImputSearch = () => {
    const {handleSubmit, register, reset} = useForm()
    const submit = data =>{
      console.log(data)

    }
  return (
    <form  onSubmit={handleSubmit(submit)} className='form_home'>
      <input type="text" {...register('searchText')} />
      <button> <i className="fa-solid fa-magnifying-glass"></i></button>
    </form>
  )
}

export default ImputSearch