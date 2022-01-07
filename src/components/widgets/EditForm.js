import React, { useState } from 'react'

const EditForm = (props) => {
    // console.log(props.open);
    // console.log(props.data.name);
    const data = props.data;
    const [name,setName]=useState(data.name);
    const [title,setTitle]=useState(data.title);
    const [email,setEmail]=useState(data.email);
    const [department,setDepartment]=useState(data.department);
    const [role,setRole]=useState(data.role);

    const btnCancel = ()=>{
      props.setisActive(false);
    }
    return (
        <>
        {props.open? <div className="mt-5 md:mt-0 md:col-span-2 max-w-xl">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white max-w-lg">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                      value={name}
                      // defaultValue={data.name}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e)=>setName(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <input
                      // value={data.title}
                      defaultValue={data.title}
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
                      value={data.email}
                      defaultValue={data.email}
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
                        value={data.department}
                        onChange={(e)=>setDepartment(e.target.value)}
                        defaultChecked={data.department}
                        id="department"
                        name="department"
                        autoComplete="department-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
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
                        value={data.role}
                        defaultChecked={data.role}
                        onChange={(e)=>setRole(e.target.value)}
                        id="role"
                        name="role"
                        autoComplete="role-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
                      >
                        <option value='Admin'>Admin</option>
                        <option value='User'>User</option>
                      </select>
                    </div>

                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right max-w-lg">
                  <button
                  onClick={btnCancel}
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex ml-1 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div> : ''}
        
        </>

    )
}

export default EditForm
