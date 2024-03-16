"use client"
import Roles from '@/components/student/Roles/Roles';
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {

    const{ jobs,internships,student} = useSelector((state)=> state.studentReducer);
    

  return (
   <div className='p-8'>
    <Roles/>
   </div>
  )
}

export default page