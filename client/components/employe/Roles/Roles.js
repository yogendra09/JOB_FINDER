"use client"
import { asyncdeleteinternemploye, asyncdeletejobemploye } from '@/store/Actions/employeActions';
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Roles = () => {
     const [flag, setflag] = useState(true)
    const{employe} = useSelector((state)=> state.employeReducer);
      const dispatch = useDispatch();

    const JobDeleteHandler = (id) =>{
        dispatch(asyncdeletejobemploye(id));
    }
    const InternDeleteHandler = (id) =>{
        dispatch(asyncdeleteinternemploye(id));
    }
 
  return (
    <div>
        {
      flag?
     <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ' onClick={()=>setflag(false)}>Show Created Internships</button>
     :
     <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ' onClick={()=>setflag(true)}>Show Created Jobs</button>
        }

   {
    flag ?
    <div>
  <h1 className='text-2xl font-medium'>Created <span className='text-blue-600'>Jobs</span></h1>
    <div className='flex flex-wrap justify-center gap-5'>{employe && employe.jobs.map((j,i)=>{
     return (
        <div
            style={{minHeight:"40vh"}}
              key={i}
              className=" relative flex-shrink-0  w-96 p-7 shadow-xl rounded-lg   dark:border-gray-700"
            >
          
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-800">
               Role for:  {j.tittle}
                </h5>
            
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {j.description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {j.assesments}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {j.responsibility}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {j.perks}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             Total applicants : {j.students.length}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                CTC (ANNUAL) : {j.salary}
              </p>
              <div>
              <button  onClick={()=>JobDeleteHandler(j._id)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Delete</button>
              <Link href={`/employe/auth/applied/jobs/${j._id}`} className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Edit</Link>
              </div>
            </div>
     )
   })}</div>
    </div>
    :
    <div className=''>
  <h1 className='text-2xl font-medium'>Created <span className='text-blue-600'><span className='text-blue-600'>Internships</span></span></h1>
   <div className='flex flex-wrap justify-center gap-5'>  
    {employe && employe.internships.map((intern,i)=>{
     return (
       
            <div
            style={{minHeight:"40vh"}}
              key={i}
              className="relative flex-shrink-0 w-96 shadow-xl rounded-lg   dark:border-gray-700 p-7"
            >
          
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-800">
               Role for:  {intern.profile}
                </h5>
            
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {intern.description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {intern.assesments}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {intern.responsibility}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {intern.perks}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             Total applicants : {intern.students.length}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Stipend : {intern.stipend.amount}
              </p>
              <div>
              <button  onClick={()=>InternDeleteHandler(intern._id)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Delete</button>
              <Link href={`/employe/auth/applied/internship/${intern._id}`} className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Edit</Link>
              </div>
            </div>
       ) 
       
    })}</div>
    </div>
   }

  

 


 </div>
  )
}

export default Roles