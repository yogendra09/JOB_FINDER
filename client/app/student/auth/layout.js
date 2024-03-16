 "use client"
import { asyncallinternships, asyncalljobs } from '@/store/Actions/studentActions';
 import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
 
 const StudentAuth = ({children}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated } = useSelector((state)=> state.studentReducer)
    // const apply = ()=>{
    //   dispatch(asyncalljobs());
    //   dispatch(asyncallinternships());
    // }
    useEffect(() => {
      if(!isAuthenticated) router.push('/student/signin');  
      //  if(isAuthenticated) apply();
    }, [isAuthenticated]);
    
   return (
     children
   )
 }
 
 export default StudentAuth