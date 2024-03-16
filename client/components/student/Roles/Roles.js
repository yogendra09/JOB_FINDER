"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Roles = () => {
     const [flag, setflag] = useState(true)
    const{student} = useSelector((state)=> state.studentReducer);
 
  return (
    <div>
        {
      flag?
     <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ' onClick={()=>setflag(false)}>Show Applied Internships</button>
     :
     <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ' onClick={()=>setflag(true)}>Show Applied Jobs</button>
        }

   {
    flag ?
    <div>
  <h1 className='text-2xl font-medium'>Applied <span className='text-blue-600'>Jobs</span></h1>
    <div className='flex flex-wrap justify-center gap-5'>{student && student.jobs.map((j,i)=>{
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
            
            </div>
     )
   })}</div>
    </div>
    :
    <div className=''>
  <h1 className='text-2xl font-medium'>Applied <span className='text-blue-600'><span className='text-blue-600'>Internships</span></span></h1>
   <div className='flex flex-wrap justify-center gap-5'>  
    {student && student.internships.map((intern,i)=>{
     return (
       
            <div
            style={{minHeight:"40vh"}}
              key={i}
              className="relative flex-shrink-0 w-96 shadow-xl rounded-lg   dark:border-gray-700 p-7"
            >
          
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-800">
               Role for:  {intern.tittle}
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
                CTC (ANNUAL) : {intern.salary}
              </p>
            
            </div>
       ) 
       
    })}</div>
    </div>
   }

  

 


 </div>
  )
}

export default Roles