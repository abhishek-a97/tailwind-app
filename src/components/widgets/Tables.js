import React, { useEffect, useState } from 'react'
import EditForm from './EditForm';
import EditModel from './EditModel';
import EditMuiModel from './EditMuiModel';
import Models from './Models';
import Validates from './MUI/Validates';
import Validate_Toofani_Code from './MUI/Validate_Toofani_Code';
import ConfirmationDialog from './MuiModal';

const employee = [
    {
      name: 'Abhi shek',
      title: 'Regional Paradigm Technician',
      department: 'Information Technology',
      status: true,
      role: 'Admin',
      email: 'abhi.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Prajna Pai',
        title: 'Senior Developer',
        department: 'Human Resource',
        role: 'User',
        status:false,
        email: 'prajna.cooper@example.com',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Ranjith K',
        title: 'Junior Developer',
        department: 'Account',
        role: 'Admin',
        status:true,
        email: 'ranjith.cooper@example.com',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
    // More people...
  ]
  const Tables = () => {

    // const [isActive,setisActive] = useState(false);
    const [data,setData] = useState([]);
    const [open,setOpen] = useState(false);
    const [num,setNum] = useState(0);
    const [datas,setdatas]=useState(employee);
    const [btnVal,setbtnval] = useState('');

    const [emailValue,setEmailValue] =useState('');
    
    function onEdit(employee){
      setData(employee);
      console.log(employee.email);
      // setisActive(true);
      setOpen(!open);
      // console.log(isActive);
      console.log('open is '+open);
      setNum(num+1);

      setEmailValue(employee.email);
      console.log(emailValue,'in onEdit Click');
    }
   
    useEffect(()=>{
      setdatas(employee);
    },[onEdit]);

    function callBackFunc(obj){
      console.log(obj.name+' '+obj.title+' '+obj.email+' '+obj.department+' '+obj.role);
      // setbtnval(obj.name+' '+obj.title+' '+obj.email+' '+obj.department+' '+obj.role);
      setbtnval(obj);
      
      var emailID = obj[2];
      console.log(obj.email);

      var newdata;
      {obj.map((item)=>{
        console.log(item);
      })}
      datas.map((d)=>{
          console.log(d.name);
      });
      console.log(emailValue,'in Callback Click');

      const newArray = datas.map((data1, index) => {

        if(data1.email === emailValue){
              data1[index] = {
                name: obj,
                title: obj.title,
                department: obj.department,
                // status: obj.status,
                role: obj.role,
                email: obj.email,
            };
        }
        return data1
      });
      var index = datas.findIndex((emp => emp.email== emailValue));
      console.log('Console inside index:',index);

      datas[index].name = obj[0];
      datas[index].title = obj[1];
      datas[index].email = obj[2];
      datas[index].department = obj[3];
      datas[index].role = obj[4];
      
      console.log(datas);
      // console.log(newArray);
      // setdatas(newArray);

    }

    return (
      <>
      <div className="flex flex-col mb-7 mx-5">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {datas.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{person.name}</div>
                            <div className="text-sm text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.title}</div>
                        <div className="text-sm text-gray-500">{person.department}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      {person.status? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span> : 
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Not Active
                        </span>
                      }
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a className="text-fuchsia-600 hover:text-fuchsia-900" onClick={() => onEdit(person)}>
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <EditForm open={isActive} data={data} setisActive={setisActive}/> */}

      {/* <Models open={open} setOpen={setOpen} number={num}/> */}

      {/* <EditModel open={open} setOpen={setOpen} number={num} dataSet={data}/> */}
      
       <EditMuiModel open={open} setOpen={setOpen} dataSet={data} callBackFunc={callBackFunc}/>  

       {/* <Validates dataSet={data}/> */}
       
       {/* <button >
         {btnVal}
       </button> */}
       
       {/* <Validate_Toofani_Code/> */}
       
      </>
    )
}

export default Tables
