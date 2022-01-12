import React, { useState } from 'react'
import logo from '../../img/signUp.svg'
import MuiTextfields from '../widgets/MUI_Components/MuiTextfields'
import { useForm } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import MuiSelect from '../widgets/MUI_Components/MuiSelect';


const Signup = () => {
    
  const { handleSubmit, control , reset} = useForm();

  const [fname, setFname]= useState('');
  const [lname, setLname]= useState('');
  const [title, setTitle]= useState('');
  const [email, setEmail]= useState('');
  const [department, setDepartment]= useState('Information Technology');
  const [role, setrole]= useState('User');
  const [address, setAddress]= useState('');
  const [city, setCity]= useState('');
  const [state, setStates]= useState('');
  const [pin, setPin]= useState('');

  const onSubmit = () => {
    console.log(fname+' '+lname+' '+title+' '+department+' '+role+' '+address+' '+city+' '+state+' '+pin);
    alert('Login Successfull.....!'+fname+' '+lname+' '+email+' '+title+' '+department+' '+role+' '+address+' '+city+' '+state+' '+pin);
    reset();
  };

    return (
        <>
            <div className="mt-5 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                {/* <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                        <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        <img src={logo}/>
                    </div>
                </div> */}
                    <div className='flex'>
                        <img src={logo}/>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form 
                            className="shadow overflow-hidden sm:rounded-md"
                            autoComplete='false'
                            action="#"
                            method="POST"
                            noValidate={true}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-5">
                                    <div className="col-span-6 sm:col-span-3">
                                    <MuiTextfields
                                        name={'fname'}
                                        control={control} 

                                        id="fname"
                                        label="First Name"
                                        setFunction={setFname}
                                        required={'First name required'}

                                        rules={{ required: 'First name required' }}
                                    />
                                       
                                            {/* className="mt-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" */}
                                       
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <MuiTextfields
                                            name={'lname'}
                                            control={control} 

                                            id="lname"
                                            label="Last Name"
                                            setFunction={setLname}
                                            required={'Last name required'}

                                            rules={{ required: 'Last name required' }}
                                        />
                                        
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <MuiTextfields
                                            name={'title'}
                                            control={control} 

                                            id="title"
                                            label="Title"
                                            setFunction={setTitle}

                                            rules={{ required: 'Title required' }}
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                    <MuiTextfields
                                        name={'email'}
                                        control={control} 

                                        id="email"
                                        label="Email"
                                        setFunction={setEmail}
                                        required={'Email required'}

                                        rules={{ required: 'Email required' ,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }}}
                                    />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        {/* <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                                            Department
                                        </label>
                                        <select
                                            id="department"
                                            name="department"
                                            autoComplete="department-name"
                                            defaultValue='select'
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
                                            onChange={(e)=>{setDepartment(e.target.value)}}
                                        >
                                            <option 
                                            value='select' label='Select'
                                            disabled="disabled"
                                            />
                                            <option value='Information Technology' label='Information Technology'/>
                                            <option value='Human Resource' label='Human Resource'/>
                                            <option value='Account' label='Accounts'/>
                                        </select> */}

                                        {/* <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                            <Select
                                                labelId="department"
                                                id="department"
                                                value={department}
                                                label="Department"
                                                // defaultValue='Information Technology'
                                                // defaultChecked='Information Technology'
                                                onChange={(e)=>{setDepartment(e.target.value)}}
                                                > */}
                                                {/* <MenuItem disabled value="">
                                                    <em>Placeholder</em>
                                                </MenuItem> */}

                                                {/* <MenuItem value={'Information Technology'}>IT</MenuItem>
                                                <MenuItem value={'Human Resource'}>HR</MenuItem>
                                                <MenuItem value={'Account'}>Accounts</MenuItem>
                                            </Select>
                                        </FormControl> */}

                                        <MuiSelect
                                            name='department'
                                            labelName="department"
                                            value={department}
                                            label='Department'
                                            setFunction={setDepartment}
                                        >
                                            <MenuItem value={'Information Technology'}>IT</MenuItem>
                                            <MenuItem value={'Human Resource'}>HR</MenuItem>
                                            <MenuItem value={'Account'}>Accounts</MenuItem>
                                        </MuiSelect>

                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        {/* <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Role
                                        </label>
                                        <select
                                            id="role"
                                            name="role"
                                            autoComplete="role-name"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
                                        >
                                            <option value='Admin'>Admin</option>
                                            <option value='User'>User</option>
                                        </select> */}
                                        <MuiSelect
                                            name='department'
                                            labelName="Role"
                                            value={role}
                                            label='Role'
                                            setFunction={setrole}
                                        >
                                            <MenuItem value={'Admin'}>Admin</MenuItem>
                                            <MenuItem value={'User'}>User</MenuItem>
                                        </MuiSelect>
                                    </div>
                                    <div className="col-span-6">
                                        <MuiTextfields
                                            name={'address'}
                                            control={control} 

                                            id="address"
                                            label="Address"
                                            setFunction={setAddress}

                                            rules={{ required: 'Address required'}}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    {/* <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="mt-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    /> */}
                                         <MuiTextfields
                                            name={'city'}
                                            control={control} 

                                            id="city"
                                            label="City"
                                            setFunction={setCity}

                                            rules={{ required: 'City required'}}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    {/* <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                        State / Province
                                    </label>
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="mt-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    /> */}
                                        <MuiTextfields
                                            name={'state'}
                                            control={control} 

                                            id="state"
                                            label="State"
                                            setFunction={setStates}

                                            rules={{ required: 'State required'}}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    {/* <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                        ZIP / Postal code
                                    </label>
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="mt-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    /> */}
                                     <MuiTextfields
                                        name={'pincode'}
                                        control={control} 

                                        id="pincode"
                                        label="Pincode"
                                        setFunction={setPin}

                                        rules={{ required: 'Pincode required' ,
                                        pattern: {
                                            value: /^[1-9][0-9]{5}$/,
                                            message: "Invalid Pincode"
                                        }}}
                                    />
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 py-3  text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
                            >
                                Sign Up
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
