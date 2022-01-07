import React ,{ Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'


const EditModel = ({open,setOpen, dataSet}) => {

    // const [open1, setOpen1] = useState(open);

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
    
    const cancelButtonRef = useRef(null);

    const onSave = () =>{
      setOpen(!open);
      // setOpen1(!open1);
      console.log(name+' '+title+' '+email+' '+department+' '+role);
      // console.log(name);
    }
    const onCancel = () =>{
      setOpen(!open);
      loaddata();
      // setOpen1(!open1);
    }
    

    return (
      <Transition.Root show={open} as={Fragment} >
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto"  initialFocus={cancelButtonRef} onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
  
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full flex items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Update your information.
                      </Dialog.Title>
                      <div className="mt-2 w-full">
                        {/* <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently removed.
                          This action cannot be undone.
                        </p> */}
                        <div className="mt-5 md:mt-0 md:col-span-2 w-full">
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
                                        readOnly={false}
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
                                        defaultChecked={department}
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
                                        defaultChecked={role}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={onSave}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={onCancel}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              
            </Transition.Child>
            
          </div>
          
        </Dialog>
        
      </Transition.Root>
    )
}

export default EditModel
