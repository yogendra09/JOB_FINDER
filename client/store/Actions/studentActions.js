import axios from "@/utils/axios";
import {
  studentReducer,
  removestudent,
  addjobs,
  addinternships,
  iserror,
  removeerror,
  addstudent,
  
} from "../Reducers/studentReducer";
import { toast } from "react-toastify";


export const asynccurrentstudent = () => async(dispatch,getstate)=>{
   try {
    const { data } = await axios.post("/student");
    dispatch(addstudent(data.student));
      
    // console.log(data)
   } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
    dispatch(iserror(error.response.data.message));
  
   }
} 

export const asyncsignupstudent = (student) => async(dispatch,getstate)=>{
    try {
      const { data } = await axios.post("/student/signup",student);
      asynccurrentstudent();
      
    } catch (error) {
      toast.error(error.response.data.message)
       dispatch(iserror(error.response.data.message));
    }
} 

export const asyncsigninstudent = (student) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post("/student/signin",student);
    asynccurrentstudent();
    // console.log(data);
  } catch (error) {
    toast.error(error.response.data.message)
     dispatch(iserror(error.response.data.message))
  }
} 

export const asyncsignoutstudent = (student) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.get("/student/signout");
   dispatch(removestudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 

export const asyncupdatestudent = (student) => async(dispatch,getstate)=>{
  try {
    const {_id} = getstate().studentReducer.student
    const { data } = await axios.post(`/student/update/${_id}`,student);
    // const { data } = await axios.post(`/student/update/`+_id,student);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncavatarstudent = (student) => async(dispatch,getstate)=>{
  try {
    const {_id} = getstate().studentReducer.student
    const { data } = await axios.post(`/student/avatar/${_id}`,student);
    // const { data } = await axios.post(`/student/avatar/`+_id,student);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncresetpasswordstudent = (password) => async(dispatch,getstate)=>{
  try {
    const {_id} = getstate().studentReducer.student
    const { data } = await axios.post(`/student/reset-password/${_id}`,password);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncforgetpasswordstudent = (email) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/student/send-mail`,email);
    console.log(email)
   dispatch(asynccurrentstudent())
  } catch (error) {
    //  dispatch(iserror(error.response.data.message))
  }
} 


export const asyncotppasswordstudent = (pwd) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/student/forget-link`,pwd);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncalljobs = () => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/student/alljobs`);
    dispatch(addjobs(data))
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncallinternships = () => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/student/allinternships`);
    dispatch(addinternships(data))
    dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncapplyjobs = (jobid) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/student/apply/job/${jobid}`);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncapplyinternships = (internshipid) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/student/apply/internship/${internshipid}`);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


//____________________education______________________

export const asyncaddedustudent = (edu) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/add-education`,edu);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 

export const asyncdeleteedustudent = (id) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/delete-education/${id}`);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 

export const asynceditedustudent = (id,edu) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/edit-education/${id}`,edu);
   dispatch(asynccurrentstudent())
  } catch (error) {

    //  dispatch(iserror(error.response.data.message))
  }
} 


//____________________job______________________

export const asyncaddjobstudent = (job) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/add-jobs`,job);
   dispatch(asynccurrentstudent());
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncdeletejobstudent = (id) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/delete-jobs/${id}`);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 

export const asynceditjobstudent = (id,job) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/edit-jobs/${id}`,job);
   dispatch(asynccurrentstudent())
  } catch (error) {

    //  dispatch(iserror(error.response.data.message))
  }
} 

//____________________internship______________________

export const asyncaddinternstudent = (internship) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/add-internships`,internship);
   dispatch(asynccurrentstudent());
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncdeleteinternstudent = (id) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/delete-internships/${id}`);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 

export const asynceditinternstudent = (id,internship) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/edit-internships/${id}`,internship);
   dispatch(asynccurrentstudent())
  } catch (error) {

    //  dispatch(iserror(error.response.data.message))
  }
} 

//____________________skill______________________

export const asyncaddskillstudent = (skill) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/add-skills`,skill);
   dispatch(asynccurrentstudent());
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncdeleteskillstudent = (id) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/delete-skills/${id}`);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 

export const asynceditskillstudent = (id,skill) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/edit-skills/${id}`,skill);
   dispatch(asynccurrentstudent())
  } catch (error) {

    //  dispatch(iserror(error.response.data.message))
  }
} 


//____________________projects______________________

export const asyncaddprojectstudent = (proj) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/add-projects`,proj);
   dispatch(asynccurrentstudent());
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncdeleteprojectstudent = (id) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/delete-projects/${id}`);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 

export const asynceditprojecttudent = (id,proj) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/edit-projects/${id}`,proj);
   dispatch(asynccurrentstudent())
  } catch (error) {

    //  dispatch(iserror(error.response.data.message))
  }
} 

//____________________course______________________

export const asyncaddcoursestudent = (course) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/add-courses`,course);
   dispatch(asynccurrentstudent());
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncdeletecoursestudent = (id) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/delete-courses/${id}`);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 

export const asynceditcoursetudent = (id,course) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/edit-courses/${id}`,course);
   dispatch(asynccurrentstudent())
  } catch (error) {

    //  dispatch(iserror(error.response.data.message))
  }
} 


//____________________accomplishmein______________________

export const asyncaddaccomptudent = (accomp) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/add-accomplishments`,accomp);
   dispatch(asynccurrentstudent());
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncdeleteaccomptudent = (id) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/delete-accomplishments/${id}`);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 

export const asynceditaccomptudent = (id,accomp) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/edit-accomplishments/${id}`,accomp);
   dispatch(asynccurrentstudent())
  } catch (error) {

    //  dispatch(iserror(error.response.data.message))
  }
} 


//____________________responsiablity______________________

export const asyncaddresponsetudent = (response) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/add-responsibilities`,response);
   dispatch(asynccurrentstudent());
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 


export const asyncdeleteresponsetudent = (id) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/delete-responsibilities/${id}`);
   dispatch(asynccurrentstudent())
  } catch (error) {
     dispatch(iserror(error.response.data.message))
  }
} 

export const asynceditresponsetudent = (id,response) => async(dispatch,getstate)=>{
  try {
    const { data } = await axios.post(`/resume/edit-responsibilities/${id}`,response);
   dispatch(asynccurrentstudent())
  } catch (error) {

    //  dispatch(iserror(error.response.data.message))
  }
} 


