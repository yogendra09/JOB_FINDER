"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const EmployeAuth = ({children}) => {

  const router = useRouter();
  const {isAuthenticated} = useSelector((state)=> state.employeReducer)
  const dispatch = useDispatch();
  useEffect(() => {
      if(!isAuthenticated) router.push('/employe/');  
    }, [isAuthenticated]);
  return (
    children
  )
}

export default EmployeAuth