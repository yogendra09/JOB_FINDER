"use client"
import { asyncaddcoursestudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {


  const dispatch = useDispatch();
  const [training, settraining] = useState("");
  const [organization, setorganization] = useState("");
  const [location, setlocation] = useState("");
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [discription, setdiscription] = useState("");
  const router = useRouter();

  const AddCourseHandler = (e) => {
    e.preventDefault()
    const course = {
      training,
      organization,
      location,
      start,
      end,
      discription
    }

    dispatch(asyncaddcoursestudent(course));
    router.push("/student/auth/resume");
  };

  return (
    <div>

    <h1 className="text-2xl font-normal ml-10 mt-5">Add <span className="text-blue-600 ">Course</span></h1>

 <div className="p-10">
   <form  onSubmit={AddCourseHandler}>
     <div class="relative z-0 w-full mb-6 group">
       <input
        onChange={(e)=>settraining(e.target.value)}
         type="text"
         name="floating_email"
         id="floating_email"
         class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
         placeholder=" "
       
       />
       <label
         for="floating_email"
         class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
       >
        Training
       </label>
     </div>

    
    
     
     <div class="grid md:grid-cols-2 md:gap-6">
       <div class="relative z-0 w-full mb-6 group">
         <input
          onChange={(e)=>setlocation(e.target.value)}
           type="text"
           name="floating_first_name"
           id="floating_first_name"
           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
           placeholder=" "
          
         />
         <label
           for="floating_first_name"
           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
         >
           Location
         </label>
       </div>
       <div class="relative z-0 w-full mb-6 group">
         <input
          onChange={(e)=>setstart(e.target.value)}
           type="text"
           name="floating_last_name"
           id="floating_last_name"
           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
           placeholder=" "
          
         />
         <label
           for="floating_last_name"
           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
         >
          Startdate
         </label>
       </div>
     </div>

     <div class="grid md:grid-cols-2 md:gap-6">
       <div class="relative z-0 w-full mb-6 group">
         <input
          onChange={(e)=>setorganization(e.target.value)}
           type="text"
          
           name="floating_phone"
           id="floating_phone"
           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
           placeholder=""
          
         />
         <label
           for="floating_phone"
           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
         >
          Organization
         </label>
       </div>
       <div class="relative z-0 w-full mb-6 group">
         <input
          onChange={(e)=>setend(e.target.value)}
           type="text"
          
           name="floating_phone"
           id="floating_phone"
           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
           placeholder=" "
          
         />
         <label
           for="floating_phone"
           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
         >
        Enddate
         </label>
       </div>

       <div class="relative z-0 w-full mb-6 group">
       <input
        onChange={(e)=>setdiscription(e.target.value)}
         type="text"
         name="floating_password"
         id="floating_password"
         class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
         placeholder=" "
       
       />
       <label
         for="floating_password"
         class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
       >
       Discription
       </label>
     </div>
     
     </div>
     
     <button
       type="submit"
       class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
     >
      Add Course
     </button>
   </form>
 </div>

</div>
  );
};

export default page;
