"use client";
import { asyncsignupemploye } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [contact, setcontact] = useState("")
  const [organizationname, setorganizationname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const SignupHandler = (e) => {
    e.preventDefault();
    const newemploye = {
      firstname,
      lastname,
      contact,
      organizationname,
      email,
      password
    };
    // console.log(newemploye);
    dispatch(asyncsignupemploye(newemploye));
  };
  useEffect(() => {
    if (isAuthenticated) router.push("/employe/auth");
  }, [isAuthenticated]);

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div className=" text-gray-500 rounded-3xl w-full overflow-hidden" style={{"max-width":"1000px"}}>
            <div className="md:flex w-full">
                <div className="hidden md:block w-1/2">
                  <img className='h-full w-full object-contain' src="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg?w=740&t=st=1696514002~exp=1696514602~hmac=a9ae1789597961067922c95cf35fcb05823498de5b8897fb94e66f45e1b023a2" alt="" />
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
                                <label for="" className="text-xs font-semibold px-1">Organizationname</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={(e)=>setorganizationname(e.target.value)} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="XXX pvt Ltd" />
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
  );
};

export default page;
