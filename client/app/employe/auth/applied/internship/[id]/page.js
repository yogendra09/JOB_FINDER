"use client"
import { asyncupdateinternemploye } from '@/store/Actions/employeActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = ({params}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const{employe} = useSelector((state)=> state.employeReducer);
    const [profile, setprofile] = useState();
    const [skills, setskills] = useState();
    const [internshiptype, setinternshiptype] = useState();
    const [openings, setopenings] = useState();
    const [from, setfrom] = useState();
    const [to, setto] = useState();
    const [duration, setduration] = useState();
    const [responsibility, setresponsibility] = useState();
    const [status, setstatus] = useState("fixed");
    const [amount, setamount] = useState();
    const [perks, setperks] = useState();
    const [assesments, setassesments] = useState();
    const InternUpdateHandler = async(e)=>{
        e.preventDefault();
        const internship = {
            profile,
            skills,
            internshiptype,
            openings,
            from,
            to,
            responsibility,
            stipend: {
              status,
              amount,
            },
            perks,
            assesments,
            duration,
          };

         await dispatch(asyncupdateinternemploye(internship,params.id));
         router.push('/employe/auth');
   
    }

  return (
    <div className='px-10 py-10'>
         {employe && employe.internships.map((intern,i)=>{
     return (
    
      params.id === intern._id ? <div>
       <form onSubmit={InternUpdateHandler}>
       <div class="relative z-0 w-full mb-6 group">
          <input
          defaultValue={intern.profile}
          onChange={(e)=> setprofile(e.target.value)}
            type="text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           profile
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
           defaultValue={intern.skills}
            onChange={(e)=> setskills(e.target.value)}
            type="text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           skills
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
        <label
            for="floating_email"
          >
         internshiptype
          </label>
          <select
           defaultValue={intern.internshiptype}
           onChange={(e)=> setinternshiptype(e.target.value)}
            type="email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          >
            <option value="In office">In office</option>
            <option value="Remote">Remote</option>
          </select>
      
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
          defaultValue={intern.openings}
          onChange={(e)=> setopenings(e.target.value)}
            type="number"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           openings
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
           defaultValue={intern.from}
          onChange={(e)=> setfrom(e.target.value)}
            type="text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            from
          </label>
        </div>   
        <div class="relative z-0 w-full mb-6 group">
          <input
          defaultValue={intern.to}
          onChange={(e)=> setto(e.target.value)}
            type="text"          
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
           
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
             to
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
           defaultValue={intern.duration}
           onChange={(e)=> setduration(e.target.value)}
            type="text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            duration
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
           defaultValue={intern.responsibility}
          type="text"
            onChange={(e)=> setresponsibility(e.target.value)}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
           
          />
          <label
            for="floating_repeat_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           responsibility
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
          <label
              for="floating_first_name"             
            >
              status
            </label>
            <select
             defaultValue={intern.status}
             onChange={(e)=> setstatus(e.target.value)}
              type="text"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              
            >
              <option value="fixed">fixed</option>
              <option value="negotiable">negotiable</option>
              <option value="performance based">performance based</option>
              <option value="unpaid">unpaid</option>
             
            </select>
            
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
            defaultValue={intern.amount}
             onChange={(e)=> setamount(e.target.value)}
              type="number"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
             
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             amount
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
             defaultValue={intern.perks}
             onChange={(e)=> setperks(e.target.value)}
             type="text"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
             
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             perks
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
             defaultValue={intern.assesments}
             onChange={(e)=> setassesments(e.target.value)}
              type="text"          
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              
            />
            <label
              for="floating_company"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
            assesments
            </label>
          </div>
        </div>

        <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' type='submit'>update</button>
       </form>
      </div> : <div></div>
    
       ) 
       
    })}
    </div>
  )
}

export default page