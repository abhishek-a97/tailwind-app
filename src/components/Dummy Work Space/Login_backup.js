import React, { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import logo from './../../img/loginBoy.svg'
import logo1 from '../../img/loginCredentials.svg'
import { Controller, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import MuiTextfields from '../widgets/MUI_Components/MuiTextfields';

  const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const { handleSubmit, control , reset} = useForm();

  const onSubmit = () => {
      console.log(email+' '+password);
      alert('Login Successfull.....!'+email+' '+password);
      reset();
      // setOpen(false);
      // // console.log(name+' '+title+' '+email+' '+department+' '+role);
      // callBackFunc([name,title,email,department,role]);
      // // reset();
      // btnSave();
  };


    return (
        <>
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="flex">
                <img src={logo}/>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div>
                <img
                  className="mx-auto h-20 w-auto"
                  src={logo1}
                  alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
              
              </div>
              <form 
              className="mt-8 space-y-6" 
              autoComplete='false'
              action="#"
              method="POST"
              noValidate={true}
              onSubmit={handleSubmit(onSubmit)}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    {/* <label htmlFor="email-address" className="sr-only" >
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-fuchsia-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    /> */}

                    {/* ---------- */}
                    
                    <MuiTextfields
                      name={'Email'}
                    control={control} 

                    id="email"
                    label="Email"
                    setFunction={setEmail}
                    required={'Email required'}
                    patternvalue='/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i'
                    message="Invalid email address"


                    rules={{ required: 'Email required' ,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                    }}}
                    />

                    {/* <Controller
                      name="email"
                      control={control}
                      defaultValue=''
                      render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                          label="Email"
                          variant="outlined"
                          id="email"
                          value={value}
                          // defaultValue={value}
                          onChange={((e)=>{setEmail(e.target.value)})}
                          onChangeCapture={onChange}
                          error={!!error}
                          helperText={error ? error.message : null}
                          required
                          // color="secondary"
                          // inputProps={{className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-fuchsia-500 focus:border-pink-500 focus:z-10 sm:text-sm"}}
                          // className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-fuchsia-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                          className='w-full border-pink'
                          />
                      )}
                      rules={{ required: 'Email required' ,
                          pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                          }}}
                    /> */}
                  </div>
                  <div>
                    <MuiTextfields
                      name={"password"}
                      control={control} 

                      id='password'
                      label="Password"
                      setFunction={setPassword}
                      required={'Email required'}
                      patternvalue='/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i'
                      message="Please enter password"
                      rules={{ required: 'Password required'}}
                      />
                      
                    {/* <Controller
                        name="password"
                        control={control}
                        defaultValue=''
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label="First Name"
                            variant="outlined"
                            id="firstname"
                            value={value}
                            // defaultValue={value}
                            onChange={((e)=>{setPassword(e.target.value)})}
                            onChangeCapture={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                            required
                            type='password'
                            className='w-full'
                          color="secondary"

                        />
                        )}
                        rules={{ required: 'Please enter password' }}
                    /> */}


                    {/* <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-fuchsia-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      
                    /> */}
                  </div>

                </div>

                <div className="flex items-center justify-between">
                  {/* <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-fuchsia-600 focus:ring-fuchsia-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div> */}

                  <div className="text-sm">
                    <a href="#" className="font-medium text-fuchsia-300 hover:text-fuchsia-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-fuchsia-500 group-hover:text-fuchsia-400" aria-hidden="true" />
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
              
            </div>
          </div>
        </>
    )
}

export default Login
