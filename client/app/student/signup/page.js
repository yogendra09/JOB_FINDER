"use client"
import { asyncsignupstudent } from '@/store/Actions/studentActions'
import { useRouter } from 'next/navigation'
import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {

  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [city, setcity] = useState("")
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")
  const [contact, setcontact] = useState("")
  const dispatch = useDispatch();
  const router = useRouter();
  const {isAuthenticated} = useSelector((state)=> state.studentReducer)


  const SignupHandler = (e)=>{
    e.preventDefault();
    const newStudent = {
      firstname:firstname,
      lastname:lastname,
      contact:contact,
      city:city,
      email:email,
      password:password
    }
    console.log(newStudent)
    dispatch(asyncsignupstudent(newStudent))
  }

  useEffect(() => {
    if(isAuthenticated) router.push('/student/auth');  
  }, [isAuthenticated]);
  

  return (
    <div>
    
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div className=" text-gray-500 rounded-3xl w-full overflow-hidden" style={{"max-width":"1000px"}}>
            <div className="md:flex w-full">
                <div className="hidden md:block w-1/2">
                  <img className='h-full w-full object-contain' src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?w=996&t=st=1696281984~exp=1696282584~hmac=bb60d98990d40fa70d8d1665fc00f1b848c5d40624a45ceb3e008a479db2907e" alt="" />
                </div>
                <form onSubmit={SignupHandler} className="w-full md:w-1/2 py-10 px-5 md:px-10">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-2xl text-gray-900">STUDENT SIGNUP</h1>
                        <p>Enter your information to register</p>
                    </div>
                    <div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label for="" className="text-xs font-semibold px-1">First name</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={(e)=> setfirstname(e.target.value)} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" />
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <label for="" className="text-xs font-semibold px-1">Last name</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={(e)=> setlastname(e.target.value)} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label for="" className="text-xs font-semibold px-1">Contact</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={(e)=> setcontact(e.target.value) } type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="0000000000" />
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <label for="" className="text-xs font-semibold px-1">City</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={(e)=>setcity(e.target.value)} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="City" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label for="" className="text-xs font-semibold px-1">Email</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={(e)=> setemail(e.target.value)} type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-12">
                                <label for="" className="text-xs font-semibold px-1">Password</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={(e)=> setpassword(e.target.value)} type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <button type='submit' className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Signup</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>


    
    </div>
 ) }



export default page


