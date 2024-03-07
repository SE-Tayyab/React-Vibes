import React from 'react'
import { useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Btn, Input, Logo} from './index'
import {useDispatch } from 'react-redux'
import authService from '../appWrite/auth'
import {useForm} from 'react-hook-form'


function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    cosnt [error, setError] = useState()

    const create = async(data) => {
        setError("")
        try{
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData))
                navigate('/')
            }
        }catch(e){
            setError(e);
        }
    }

  return (
    <div className='flex items-center justify-centor'>
        <div className={`max-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-centor'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%' />
                </span>
            </div>
            <h2 className='text-centor text-2xl font-bold leading-tight'>Sign in to yout account</h2>
                <p className='mt-2 text-centor text-base text-black/60'>
                    Don&apos;already have any account?&nbsp;
                    <Link to='/signup'
                        className='font-medium text-primary transition-all duration-200 hover:underline'
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-centor'>{error}</p>}

                <form action="" onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label = "Full Name"
                        placeholder = "Enter Your Name"
                        {...register('name',{
                            required: true,
                        })}
                        />
                        <Input
                            label="Email: "
                            placeholder='Enter your email'
                            type='email'
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm,
                                    message: "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                        label = "password"
                        placeholder = "Enter your Password"
                        type = "password"
                        {...register("email", {
                            required:true
                        })}
                        />
                        <Btn className='w-full' type='submit'/>
                    </div>
                </form>
        </div>
    </div>
  )
}
import { Form } from 'react-router-dom'

export default SignUp