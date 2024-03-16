"use client"
import { asyncapplyinternships } from '@/store/Actions/studentActions';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Internships = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { jobs, internships, student } = useSelector(
      (state) => state.studentReducer
    );

    const ApplyInternshipHandler = (id)=>{
         dispatch(asyncapplyinternships(id)) 
         toast.success("you successfully applied for this internship role")
        
          setTimeout(function(){
            router.push('/student/auth/applied');
       },2000)

        }
    
        const appliedHandler = ()=>{
          toast.info("you already applied for this role")
        }

  return (
    <div className='flex flex-wrap gap-5 justify-center items-center'>
     {internships && internships.internships.map((intern,i)=>{
        return (
          
              <div
            style={{minHeight:"40vh"}}
              key={i}
              className="flex-shrink-0 w-2/5 shadow-xl p-5"
            >
          
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-800">
               Role for:  {intern.profile}
                </h5>
            
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {intern.skills}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {intern.description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {intern.openings.length}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {intern.perks}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             from : {intern.from}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             to : {intern.to}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Internship Type : {intern.internshiptype}
              </p>
             <div className="w-full flex justify-end">
             {!intern.students.includes(student && student._id) ? (
                <button
                  onClick={() => ApplyInternshipHandler(intern._id)}
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Apply Intern
                </button>
              ) : (
                <button
                  onClick={appliedHandler}
                  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  already applied
                </button>
              )}
             </div>
             
            </div>
         
        )
      })}</div>
  )
}

export default Internships