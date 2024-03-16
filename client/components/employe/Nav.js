import { asyncsignoutemploye } from '@/store/Actions/employeActions';
import {  } from '@/store/Actions/studentActions';
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Nav = ({isAuthenticated}) => {
  const employe =  useSelector((state)=> state.employeReducer.employe);

  const dispatch = useDispatch();
  const signoutHandler = async () => {
    dispatch(asyncsignoutemploye());
  };

  return (
    <nav className="gap-5 flex items-center px-5  dark:bg-gray-200" style={{height:"10vh"}}>
       <div className=' flex items-center' style={{height:"10vh"}}> { isAuthenticated ?  <div > <Link  className=" hover:text-blue-600  min-w-min flex gap-2"  href={"/employe/auth"}>Hi <span>{employe && employe.firstname}</span></Link></div>:  <div><Link className=" hover:text-blue-600"  href={"/"}>Home</Link> </div>}</div>
        {isAuthenticated === true ? (
        <div className='flex justify-between w-full relative'>
            <div className='flex items-center gap-5' style={{height:"10vh"}}>
            <Link className=" hover:text-blue-600" href="/employe/auth/profile">Profile</Link>{" "}
            <Link className=" hover:text-blue-600" href="/employe/auth/applied">Roles Created</Link>{" "}
            <Link className=" hover:text-blue-600" href="/employe/auth/studentapplied">Student Applied</Link>{" "}
            </div>
        <div className='flex items-center justify-center pt-6'>
        <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2' onClick={signoutHandler}>Signout</button>
        </div>
       </div>
        ) : (
          <div className='flex items-center justify-end w-full gap-5 pt-3' style={{height:"10vh"}}>
            <Link className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 ' href="/employe/signin">signin</Link>
            <Link className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 ' href="/employe/signup">signup</Link>
          </div>
        )}
      </nav>
  )
}


export default Nav