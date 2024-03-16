"use client"
import Roles from '@/components/employe/Roles/Roles';
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {

    const{employe} = useSelector((state)=> state.employeReducer);

  return (
    <div className='py-8 px-5'>
     


     <Roles/>

    </div>
  )
}

export default page