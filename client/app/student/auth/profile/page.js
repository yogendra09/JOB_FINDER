"use client";
import {
  asyncavatarstudent,
  asynccurrentstudent,
  asyncresetpasswordstudent,
  asyncupdatestudent,
} from "@/store/Actions/studentActions";
import studentReducer from "@/store/Reducers/studentReducer";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const [confirmpass, setconfirmpass] = useState();
  const [password, setpassword] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [city, setcity] = useState();
  const [gender, setgender] = useState("male");
  const [email, setemail] = useState();
  const [contact, setcontact] = useState();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state) => state.studentReducer.isAuthenticated
  );
  const dispatch = useDispatch();
  const student = useSelector((state) => state.studentReducer.student);
  const stu = useSelector((state) => {
    return studentReducer(undefined, { type: "student" });
  });
  console.log(stu);

  useEffect(() => {
    if (!isAuthenticated) router.push("/student");
  }, [isAuthenticated]);

  const StudentUpdateHandler =async (e) => {
    e.preventDefault();
    const updatedStudent = {
      firstname,
      lastname,
      gender,
      city,
      email,
      contact,
    };
    await dispatch(asyncupdatestudent(updatedStudent));
  router.push('/student/auth/profile')
  };

  const AvatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    console.log(e.target.avatar.files[0], formdata);
    dispatch(asyncavatarstudent(formdata));
  };

  const resetPasswordHandler = async(e) => {
    e.preventDefault();
    if(confirmpass === password){
        const pwd = {
            password,
          };
          await  dispatch(asyncresetpasswordstudent(pwd));
          setpassword("")
          setconfirmpass("")
          toast.success("passsword changed successfully");
         
    }else{
        toast.error("password dose'nt match")
    }
  };

 
  return (
    <div style={{ height: "90vh" }} className="flex justify-between p">
    <div className="part1 relative h-full w-2/5 flex flex-col items-start justify-center gap-5 pl-10  bg-slate-200">
       <h1 className="">{student && student.firstname} Profile</h1>
      <div className="h-40 w-40 rounded-full overflow-hidden">
        <img
          className="h-full w-full object-contain"
          src={student && student.avatar.url}
          alt=""
        />
      </div>

      <form onSubmit={AvatarHandler} encType="multipart/form-data">
        <input type="file" name="avatar" />
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          type="submit"
        >
          update avatar
        </button>
      </form>

      <form onSubmit={resetPasswordHandler}>
      <div className="flex flex-col">
          <h1>change <span className="text-blue-900">password</span></h1>
      <div className="w-full px-3 mb-5">
              <label for="" className="text-xs font-semibold px-1">
              password
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                 onChange={(e)=>setpassword(e.target.value)}
                  type="password"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="w-full px-3 mb-5">
              <label for="" className="text-xs font-semibold px-1">
               confirm password
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                 onChange={(e)=>setconfirmpass(e.target.value)}
              
                  type="password"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="confirm password"
                />
              </div>
            </div>
           
          </div>

         <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">reset password</button>
      </form>

    
    </div>

    <div className="part2 w-3/5 bg-slate-200 flex items-center justify-center">
      <form
        onSubmit={StudentUpdateHandler}
        className="w-full md:w-1/2 py-10 px-5 md:px-10"
      >
        <div className="text-center mb-10">
          <p>Update Details</p>
        </div>
        <div>
          <div className="flex -mx-3">
            <div className="w-1/2 px-3 mb-5">
              <label for="" className="text-xs font-semibold px-1">
                First name
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  defaultValue={student && student.firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  type="text"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="John"
                />
              </div>
            </div>
            <div className="w-1/2 px-3 mb-5">
              <label for="" className="text-xs font-semibold px-1">
                Last name
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                 defaultValue={student && student.lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  type="text"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Smith"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-1/2 px-3 mb-5">
              <label for="" className="text-xs font-semibold px-1">
                Gender
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <select
                 defaultValue={student && student.gender}
                  type="text"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </div>
            </div>
            <div className="w-1/2 px-3 mb-5">
              <label for="" className="text-xs font-semibold px-1">
                City
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                onChange={(e)=>setcity(e.target.value)}
                 defaultValue={student && student.city}
                  ype="text"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="City"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label for="" className="text-xs font-semibold px-1">
                Email
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                 onChange={(e)=>setemail(e.target.value)}
                 defaultValue={student && student.email}
                  type="email"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="johnsmith@example.com"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label for="" className="text-xs font-semibold px-1">
                Contact
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                 onChange={(e)=>setcontact(e.target.value)}
                 defaultValue={student && student.contact}
                  type="text"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="0000000000"
                />
              </div>
            </div>
          </div>

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <button
                type="submit"
                className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>

    {/* <form onSubmit={resetPasswordHandler}>
      <input onChange={(e)=> setoldpassword(e.target.value)} type="text" placeholder='old password' />
      <input onChange={(e)=> setpassword(e.target.value)} type="text" placeholder='new password' name='password' />
      <button type='submit'>reset password</button>
     </form> */}
  </div>
  )

};

export default page;



   