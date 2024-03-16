"use client";
import { asyncapplyjobs } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Job = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { jobs, internships, student } = useSelector(
    (state) => state.studentReducer
  );

  const appliedHandler = () => {
    toast.info("you already applied for this role");
    
  };

  const ApplyJobHandler = async(id) => {
    toast.success("you successfully applied for this job role");
   await dispatch(asyncapplyjobs(id));
    setTimeout(function(){
      router.push('/student/auth/applied');
    },2000)
  };


  useEffect(() => {}, [student]);

  return (
    <>
      {jobs &&
        jobs.jobs.map((j, i) => {
          return (
            <div
            style={{minHeight:"40vh"}}
              key={i}
              className=" relative flex-shrink-0  w-2/5 p-7 shadow-xl rounded-lg   dark:border-gray-700"
            >
          
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-800">
               Role for:  {j.tittle}
                </h5>
            
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {j.description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {j.assesments}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {j.responsibility}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {j.perks}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             Total applicants : {j.students.length}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                CTC (ANNUAL) : {j.salary}
              </p>
             <div className="w-full flex justify-end">
             {!j.students.includes(student && student._id) ? (
                <button
                  onClick={() => ApplyJobHandler(j._id)}
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Apply job
                </button>
              ) : (
                <button
                  onClick={appliedHandler}
                  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Already applied
                </button>
              )}
             </div>
            </div>
          );
        })}
    </>
  );
};

export default Job;
