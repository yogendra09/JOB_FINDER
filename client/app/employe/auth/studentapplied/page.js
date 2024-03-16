"use client"
import { asyncstudentapplied } from '@/store/Actions/employeActions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {

    const dispatch = useDispatch();
    dispatch(asyncstudentapplied());
   
useEffect(()=>{

},[])

  return (
    <div>
       
    </div>
  )
}

export default page