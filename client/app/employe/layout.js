"use client";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/employe/Nav";
import { asynccurrentemploye, asyncinternshipscreatedemploye, asyncjobscreatedemploye, asyncsignoutemploye } from "@/store/Actions/employeActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const EmployeLayout = ({ children }) => {

  const dispatch = useDispatch();
    const router = useRouter();
     const {isAuthenticated} = useSelector((state)=> state.employeReducer);
    //  console.log(isAuthenticated)
     useEffect(() => {
       dispatch(asynccurrentemploye());
       dispatch(asyncjobscreatedemploye());
       dispatch(asyncinternshipscreatedemploye());
       if(isAuthenticated) router.push('/employe/auth/');  
     }, [isAuthenticated]);

     const signoutHandler  = ()=>{
      // console.log("signout")
     dispatch( asyncsignoutemploye())
     }
    
  return <>
 <Nav isAuthenticated={isAuthenticated} />
  {children}
   <Footer/>
  </>
};

export default EmployeLayout;
