import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

const EditMuiModel = ({open, dataSet, setOpen}) => {

const [name,setName] = useState('');
const [title,setTitle]= useState('');
const [email,setEmail]=useState('');
const [department,setDepartment]=useState('');
const [role,setRole]=useState('');

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

  };

  const btnSave = () => {
    setOpen(false);
    console.log(name+' '+title+' '+email+' '+department+' '+role);
    loaddata();
  };

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
                <form action="#" method="POST">
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
                </form>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={btnCancel}>
                        Cancel
                    </Button>
                    <Button onClick={btnSave}>Update</Button>
                </DialogActions>
        </Dialog>
    )
}

export default EditMuiModel
