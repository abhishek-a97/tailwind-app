import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { Controller, useForm } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';

const EditMuiModel = ({open, dataSet, setOpen, callBackFunc, handleClose}) => {

//------ Validation Form---------//
const onSubmit = (e, data) => {
    console.log(data);
    setOpen(false);
    console.log(name+' '+title+' '+email+' '+department+' '+role);
    callBackFunc([name,title,email,department,role]);
    // loaddata();
    reset();
    btnSave();
};
//-----------------------------//

const [name,setName] = useState(dataSet.name);
const [title,setTitle]= useState(dataSet.title);
const [email,setEmail]=useState(dataSet.email);
const [department,setDepartment]=useState(dataSet.department);
const [role,setRole]=useState(dataSet.role);

useEffect(()=>{
    setOpen(open);
    loaddata();
},[dataSet]);

const loaddata=()=>{
    setName(dataSet.name);
    setTitle(dataSet.title);
    setDepartment(dataSet.department);
    setEmail(dataSet.email);
    setRole(dataSet.role);
    
}

const btnCancel = () => {
    setOpen(false);
    loaddata();
    console.log(name+' '+title+' '+email+' '+department+' '+role);
    reset();
};

const btnSave = () => {
    setOpen(false);
    console.log(name+' '+title+' '+email+' '+department+' '+role);
    callBackFunc([name,title,email,department,role]);
    // loaddata();
    reset();
};

const { handleSubmit, control , reset} = useForm({
    defaultValues:{
        firstname : name,
        title : title,
        email: email,
        department: department,
        role:role,
    }
});

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 800 } }}
            maxWidth="sm"
            open={open}
            >
                <DialogTitle>
                    Update your Information
                </DialogTitle>

                <DialogContent>
           

{/* ///----------------------------Using MUI TextField------------------------------------------------------///// */}
            <form 
                noValidate={true}
                onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow overflow-hidden sm:rounded-md w-full">
                    <div className="px-4 py-5 bg-white w-full">
                        <div className="grid grid-cols-1 gap-6 w-full">
                            <div className="col-span-6 sm:col-span-3">
                            {/* ((e)=>{setName(e.target.value)}) */}
                            <Controller
                                name="firstName"
                                control={control}
                                defaultValue={name}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    id="firstname"
                                    value={name}
                                    // defaultValue={value}
                                    onChange={((e)=>{setName(e.target.value)})}
                                    onChangeCapture={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    required
                                />
                                )}
                                rules={{ required: 'First name required' }}
                            />
                            </div>   
                            
                            <div className="col-span-6 sm:col-span-3">
                            
                            <Controller
                                name="title"
                                control={control}
                                defaultValue={dataSet.title}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    label="Title"
                                    variant="outlined"
                                    id="title"
                                    value={title}
                                    // defaultValue={value}
                                    onChange={((e)=>{setTitle(e.target.value)})}
                                    onChangeCapture={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    required
                                />
                                )}
                                rules={{ required: 'Title required' }}
                            />
                            
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            
                            <Controller
                                name="email"
                                control={control}
                                defaultValue={dataSet.email}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    id="email"
                                    value={email}
                                    // defaultValue={value}
                                    onChange={((e)=>{setEmail(e.target.value)})}
                                    onChangeCapture={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    required
                                />
                                )}
                                rules={{ required: 'Email required' ,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }}}
                            />
                            
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                                Department
                            </label>
                            <select
                                // value={department}
                                // defaultChecked={dataSet.department}
                                defaultValue={department}
                                id="department"
                                name="department"
                                autoComplete="department-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
                                onChange={(e)=>setDepartment(e.target.value)}

                            >
                                <option value='Information Technology' label='Information Technology'/>
                                <option value='Human Resource' label='Human Resource'/>
                                <option value='Account' label='Accounts'/>
                            </select>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <select
                                // value={role}
                                defaultValue = {role}
                                id="role"
                                name="role"
                                autoComplete="role-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
                                onChange={(e)=>setRole(e.target.value)}
                                
                            >
                                <option value='Admin'>Admin</option>
                                <option value='User'>User</option>
                            </select>
                            </div>
                            <div>
                                <Button variant="contained" onClick={btnCancel}>
                                Cancel
                                </Button>
                                <Button type="submit" variant="contained" color="primary">
                                Signup
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
{/* ///-------------------------------------------------------------------------------------------------/// */}
            
            

                </DialogContent>

                {/* <DialogActions>
                    <Button autoFocus onClick={btnCancel}>
                        Cancel
                    </Button>
                    <Button onClick={btnSave}>Update</Button>
                </DialogActions> */}
        </Dialog>
    )
}

export default EditMuiModel


 {/* <form action="#" method="POST"
                    noValidate={true}
                    onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="shadow overflow-hidden sm:rounded-md w-full">
                            <div className="px-4 py-5 bg-white w-full">
                            <div className="grid grid-cols-1 gap-6 w-full">
                                <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <input
                                    // value={dataSet.name}
                                    defaultValue={name}
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange={(e)=>setName(e.target.value)}
                                    required
                                />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    // value={dataSet.title}
                                    defaultValue={title}
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="mt-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange={(e)=>setTitle(e.target.value)}
                                    

                                />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    // value={email}
                                    defaultValue={email}
                                    type="text"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    className="mt-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange={(e)=>setEmail(e.target.value)}

                                />
                                
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                                    Department
                                </label>
                                <select
                                    // value={department}
                                    // defaultChecked={dataSet.department}
                                    defaultValue={department}
                                    id="department"
                                    name="department"
                                    autoComplete="department-name"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
                                    onChange={(e)=>setDepartment(e.target.value)}

                                >
                                    <option value='Information Technology' label='Information Technology'/>
                                    <option value='Human Resource' label='Human Resource'/>
                                    <option value='Account' label='Accounts'/>
                                </select>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Role
                                </label>
                                <select
                                    // value={role}
                                    defaultValue = {role}
                                    id="role"
                                    name="role"
                                    autoComplete="role-name"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
                                    onChange={(e)=>setRole(e.target.value)}
                                    
                                >
                                    <option value='Admin'>Admin</option>
                                    <option value='User'>User</option>
                                </select>
                                </div>

                            </div>
                            </div>
                        </div>
                    </form> */}

{/* <form 
                    noValidate={true}
                    onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue={name}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label="Name"
                            variant="outlined"
                            id="outlined-required"
                            value={name}
                            onChange={((e)=>{setName(e.target.value)})}
                            onChangeCapture={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                            required
                            // defaultValue={name}
                        />
                        // <input
                        //     // value={dataSet.name}
                        //     defaultValue={name}
                        //     type="text"
                        //     name="first-name"
                        //     id="first-name"
                        //     autoComplete="given-name"
                        //     className="mt-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        //     onChange={(e)=>setName(e.target.value)}
                        //     required
                        // />
                        )}
                        rules={{ required: 'First name required' }}
                    />
                  <Controller
                        name="title"
                        control={control}
                        defaultValue={title}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label="Name"
                            variant="outlined"
                            id="outlined-required"
                            value={title}
                            onChange={((e)=>{setTitle(e.target.value)})}
                            onChangeCapture={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                            required
                            // defaultValue={name}
                        />
                        // <input
                        //     // value={dataSet.name}
                        //     defaultValue={name}
                        //     type="text"
                        //     name="first-name"
                        //     id="first-name"
                        //     autoComplete="given-name"
                        //     className="mt-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        //     onChange={(e)=>setName(e.target.value)}
                        //     required
                        // />
                        )}
                        rules={{ required: 'First name required' }}
                    />
                    <div>
                        <Button variant="contained" onClick={handleClose}>
                        Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                        Signup
                        </Button>
                    </div>
            </form> */}