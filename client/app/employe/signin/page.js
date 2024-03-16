"use client";
import { asyncsigninemploye } from "@/store/Actions/employeActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  useEffect(() => {
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);

  const SignInHandler =async(e) => {
    e.preventDefault();

    const Employe = {
      email,
      password,
    };
   await dispatch(asyncsigninemploye(Employe));
    router.push('/employe/auth')

  };

  return (
    <div>
    
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div className=" text-gray-500 rounded-3xl w-full overflow-hidden" style={{"max-width":"1000px"}}>
            <div className="md:flex w-full">
                <div className="hidden md:block w-1/2">
                  <img className='h-full w-full object-contain' src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1060&t=st=1696513651~exp=1696514251~hmac=d28b61862088fcfe83c4ed6a9c0ca66e63e49e249cfce450e22e64cb3afc44cf" alt="" />
                </div>
                <form onSubmit={SignInHandler} className="w-full md:w-1/2 py-10 px-5 md:px-10">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-2xl text-gray-900">EMPLOYE SIGNIN</h1>
                        <p>Enter your information to Sigin</p>
                    </div>
                    <div>
                      
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
                        <div className="flex justify-start -mx-3 w-full">
                            <div className="w-48 px-3 mb-5">
                                <button type="submit" className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Sigin</button>
                            </div>
                        </div>
                        <div>
                        <Link href="/employe/forget">Forget password?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    
    </div>
  );
};

export default page;
