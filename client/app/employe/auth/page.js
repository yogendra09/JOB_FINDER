"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const page = () => {
  const {employe} = useSelector((state)=> state.employeReducer)
  console.log(employe)
  const dispatch = useDispatch();
  useEffect(()=>{
     
  },[employe])

  return (<>

   <div className='h-96 p-5'>
      <img className='h-52' src="https://img.freepik.com/premium-vector/person-monitoring-chart-handy-flat-illustration-statistician_203633-6727.jpg?w=740" alt="" />
    <div className='flex gap-5'>
    <Link className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ' href="/employe/auth/create/job">Create job</Link>
    <Link className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ' href="/employe/auth/create/internship">Create Internship</Link>

    </div>

   </div>
   
    </>
  )
}

export default page