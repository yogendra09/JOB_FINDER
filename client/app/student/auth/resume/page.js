"use client";
import {
  asyncdeleteaccomptudent,
  asyncdeletecoursestudent,
  asyncdeleteedustudent,
  asyncdeleteinternstudent,
  asyncdeletejobstudent,
  asyncdeleteprojectstudent,
  asyncdeleteresponsetudent,
  asyncdeleteskillstudent,
} from "@/store/Actions/studentActions";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { student } = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();

  const EduDeleteHandler = (id) => {
    console.log(id);
    dispatch(asyncdeleteedustudent(id));
  };

  const JobDeleteHandler = (id) => {
    console.log(id);
    dispatch(asyncdeletejobstudent(id));
  };

  const InternDeleteHandler = (id) => {
    console.log(id);
    dispatch(asyncdeleteinternstudent(id));
  };

  const SkillDeleteHandler = (id) => {
    console.log(id);
    dispatch(asyncdeleteskillstudent(id));
  };

  const ProjDeleteHandler = (id) => {
    console.log(id);
    dispatch(asyncdeleteprojectstudent(id));
  };

  const CourseDeleteHandler = (id) => {
    console.log(id);
    dispatch(asyncdeletecoursestudent(id));
  };
  const  ResDeleteHandler = (id) => {
    console.log(id);
    dispatch(asyncdeleteresponsetudent(id));
  };
  const AccomDeleteHandler = (id) => {
    console.log(id);
    dispatch(asyncdeleteaccomptudent(id));
  };

  return (
    <div className="p-10">
      <div className="p-5 " style={{minHeight:"90vh",border:"1px solid #dadada"}}>
      <h3 className="mb-5 text-2xl font-semibold"> your <span className="text-blue-600">Resume</span></h3>

   <div>
   <h4 className="text-blue-600 text-xl font-medium">
        Education
      </h4>
      <ul className=" bg-white border border-gray-200 rounded-lg p-2 ">
        {student &&
          student.resume.education.map((e, i) => {
            return (
              <>
                <div class="flex justify-between w-full p-6 bg-white border border-gray-200 rounded-lg shadow m-5">
                  <h1>Education</h1>
                  <div className=" " style={{maxWidth:"35vw"}}>
                     <p>
                      {e.school}
                     </p>
                     <p>
                      {e.status}
                     </p>
                     <p>
                      {e.performance}
                     </p>
                     <p>
                      {e.year}
                     </p>
                  </div>
                  <div className="icons">
                     <Link href={`/student/auth/resume/education/${e.id}`} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Edit</Link>
                     <button onClick={()=>EduDeleteHandler(e.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                  </div>
                </div>
              </>
            );
          })}
      <div className="w-full flex justify-center"> <Link className="align-middle text-blue-600" href={`/student/auth/resume/education`}>+ add education</Link></div>
      </ul>
   </div>
  
   <hr />

   <div>
   <h4 className="text-blue-600 text-xl font-medium">
        Jobs
      </h4>
      <ul className=" bg-white border border-gray-200 rounded-lg p-2 ">
        {student &&
          student.resume.jobs.map((e, i) => {
            return (
              <>
                <div class="flex justify-between w-full p-6 bg-white border border-gray-200 rounded-lg shadow m-5">
                  <h1> Jobs</h1>
                  <div className=" " style={{maxWidth:"35vw"}}>
                     <p>
                      {e.organization}
                     </p>
                     <p>
                      {e.profile}
                     </p>
                     <p>
                   {e.startdate} - {e.enddate} 
                     </p>
                  </div>
                  <div className="icons">
                     <Link href={`/student/auth/resume/jobs/${e.id}`} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Edit</Link>
                     <button onClick={()=>JobDeleteHandler(e.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                  </div>
                </div>
              </>
            );
          })}
      <div className="w-full flex justify-center"> <Link className="align-middle text-blue-600" href={`/student/auth/resume/jobs`}>+ add job</Link></div>
      </ul>
   </div>
   
    <hr />

    <div className="my-5">
   <h4 className="text-blue-600 text-xl font-medium">
        Internships
      </h4>
      <ul className=" bg-white border border-gray-200 rounded-lg p-2 ">
        {student &&
          student.resume.internships.map((e, i) => {
            return (
              <>
                <div class="flex justify-between w-full p-6 bg-white border border-gray-200 rounded-lg shadow m-5">
                  <h1> Internships</h1>
                  <div className=" " style={{maxWidth:"35vw"}}>
                     <p>
                      {e.profile}
                     </p>
                     <p>
                      {e.organization}
                     </p>
                     <p>
                     {e.startdate}-{e.enddate}
                     </p>
                  </div>
                  <div className="icons">
                     <Link href={`/student/auth/resume/internships/${e.id}`} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Edit</Link>
                     <button onClick={()=>InternDeleteHandler(e.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                  </div>
                </div>
              </>
            );
          })}
      <div className="w-full flex justify-center"> <Link className="align-middle text-blue-600" href={`/student/auth/resume/internships`}>+ add Internship</Link></div>
      </ul>
   </div>

   <hr />

   <div>
   <h4 className="text-blue-600 text-xl font-medium">
        Skills
      </h4>
      <ul className=" bg-white border border-gray-200 rounded-lg p-2 ">
        {student &&
          student.resume.skills.map((e, i) => {
            return (
              <>
                <div class="flex justify-between w-full p-6 bg-white border border-gray-200 rounded-lg shadow m-5">
                  <h1>Skills</h1>
                  <div className=" " style={{maxWidth:"35vw"}}>
                     <p>
                      {e.skill}
                     </p>
                     <p>
                      {e.level}
                     </p>
                     
                  </div>
                  <div className="icons">
                     <Link href={`/student/auth/resume/skills/${e.id}`} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Edit</Link>
                     <button onClick={()=>SkillDeleteHandler(e.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                  </div>
                </div>
              </>
            );
          })}
      <div className="w-full flex justify-center"> <Link className="align-middle text-blue-600" href={`/student/auth/resume/skills`}>+ add skill</Link></div>
      </ul>
   </div>
      <hr />

      <div>
   <h4 className="text-blue-600 text-xl font-medium">
   Projects
      </h4>
      <ul className=" bg-white border border-gray-200 rounded-lg p-2 ">
        {student &&
          student.resume.projects.map((e, i) => {
            return (
              <>
                <div class="flex justify-between w-full p-6 bg-white border border-gray-200 rounded-lg shadow m-5">
                  <h1> Projects</h1>
                  <div className=" " style={{maxWidth:"35vw"}}>
                     <p>
                      {e.github}
                     </p>
                     <p>
                      {e.behance}
                     </p>
                     <p>
                      {e.blog}
                     </p>
                     <p>
                      {e.othersample}
                     </p>
                  </div>
                  <div className="icons">
                     <Link href={`/student/auth/resume/projects/${e.id}`} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Edit</Link>
                     <button onClick={()=>ProjDeleteHandler(e.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                  </div>
                </div>
              </>
            );
          })}
      <div className="w-full flex justify-center"> <Link className="align-middle text-blue-600" href={`/student/auth/resume/projects`}>+ add projects</Link></div>
      </ul>
   </div>

    <hr />

    <div>
   <h4 className="text-blue-600 text-xl font-medium">
   Courses
      </h4>
      <ul className=" bg-white border border-gray-200 rounded-lg p-2 ">
        {student &&
          student.resume.courses.map((e, i) => {
            return (
              <>
                <div class="flex justify-between w-full p-6 bg-white border border-gray-200 rounded-lg shadow m-5">
                  <h1> Courses</h1>
                  <div className=" " style={{maxWidth:"35vw"}}>
                     <p>
                      {e.training}
                     </p>
                     <p>
                      {e.organization}
                     </p>
                     <p>
                      {e.start}-{e.end}
                     </p>
                  </div>
                  <div className="icons">
                     <Link href={`/student/auth/resume/courses/${e.id}`} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Edit</Link>
                     <button onClick={()=>CourseDeleteHandler(e.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                  </div>
                </div>
              </>
            );
          })}
      <div className="w-full flex justify-center"> <Link className="align-middle text-blue-600" href={`/student/auth/resume/courses`}>+ add course</Link></div>
      </ul>
   </div>

<hr />
<div>
   <h4 className="text-blue-600 text-xl font-medium">
        Accomplishments
      </h4>
      <ul className=" bg-white border border-gray-200 rounded-lg p-2 ">
        {student &&
          student.resume.accomplishments.map((e, i) => {
            return (
              <>
                <div class="flex justify-between w-full p-6 bg-white border border-gray-200 rounded-lg shadow m-5">
                  <h1>Accomplishments</h1>
                  <div className=" " style={{maxWidth:"35vw"}}>
                     <p>
                      {e.discription}
                     </p>
                     
                  </div>
                  <div className="icons">
                     <Link href={`/student/auth/resume/accomplishments/${e.id}`} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Edit</Link>
                     <button onClick={()=>AccomDeleteHandler(e.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                  </div>
                </div>
              </>
            );
          })}
      <div className="w-full flex justify-center"> <Link className="align-middle text-blue-600" href={`/student/auth/resume/accomplishments`}>+ add accomplishments</Link></div>
      </ul>
   </div>

   <hr />

   <div>
   <h4 className="text-blue-600 text-xl font-medium">
   Responsibilities
      </h4>
      <ul className=" bg-white border border-gray-200 rounded-lg p-2 ">
        {student &&
          student.resume.responsibilities.map((res, i) => {
            return (
              <>
                <div class="flex justify-between w-full p-6 bg-white border border-gray-200 rounded-lg shadow m-5">
                  <h1> Responsibilitie</h1>
                  <div className=" " style={{maxWidth:"35vw"}}>
                     <p>
                      {res.discription}
                     </p>
                    
                  </div>
                  <div className="icons">
                     <Link href={`/student/auth/resume/responsibilitie/${res.id}`} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Edit</Link>
                     <button onClick={()=>ResDeleteHandler(res.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                  </div>
                </div>
              </>
            );
          })}
      <div className="w-full flex justify-center"> <Link className="align-middle text-blue-600" href={`/student/auth/resume/responsibilitie`}>+ addresponsibilities</Link></div>
      </ul>
   </div>



    </div>
    </div>
  );
};

export default page;

