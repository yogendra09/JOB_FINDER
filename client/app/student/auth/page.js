"use client"
import Internships from '@/components/student/Internship/Internships';
import Job from '@/components/student/job/Job';
import { asyncalljobs, asyncapplyinternships, asyncapplyjobs } from '@/store/Actions/studentActions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';


const page = () => {
 
   const [flag, setflag] = useState(false)
 

  return (
    <div className='container px-5 relative'>

     
    <div className='px-28 w-full flex items-center justify-between my-5'>
    <h1 className='text-2xl  '>{flag ? <span className='text-blue-600'>Jobs</span> : <span className='text-blue-600'>Internships</span>} Available For You</h1>
     {
      flag ?
      <button onClick={()=> setflag(false)}  className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>View Internships</button>
      :
      <button onClick={()=> setflag(true)}  className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>View Jobs</button>

     }
    </div>
      
     <div className='relative flex items-center justify-center flex-wrap gap-5 pb-8'>

      {
        flag ? <Job /> : <Internships/>
      }

    
     </div>
   

    </div>

      

      

      
  )
}

export default page