import axios from "@/utils/axios";
import {
  employeReducer,
  removeemploye,
  iserror,
  removeerror,
  addemploye,
  addinternships,
  addjobs,
  appliedstudent,
} from "../Reducers/employeReducer";
import { toast } from "react-toastify";

export const asynccurrentemploye = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/employe/current");
    dispatch(addemploye(data));
    // console.log(data)
  } catch (error) {
    console.log(error);
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignupemploye = (employe) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/employe/signup", employe);
    asynccurrentemploye();
  } catch (error) {
    // toast.error(error.response.data.message)
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsigninemploye = (employe) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/employe/signin", employe);
    asynccurrentemploye();
    console.log(data);
  } catch (error) {
    // toast.error(error.response.data.message)
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignoutemploye = (employe) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/employe/signout");
    dispatch(removeemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncupdateemploye = (employe) => async (dispatch, getstate) => {
  try {
    const { _id } = getstate().employeReducer.employe;
    const { data } = await axios.post(`/employe/update/${_id}`, employe);
    // const { data } = await axios.post(`/employe/update/`+_id,employe);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncavataremploye = (employe) => async (dispatch, getstate) => {
  try {
    const { _id } = getstate().employeReducer.employe;
    const { data } = await axios.post(`/employe/avatar/${_id}`, employe);
    // const { data } = await axios.post(`/employe/avatar/`+_id,employe);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncresetpasswordemploye =
  (password) => async (dispatch, getstate) => {
    try {
      const { _id } = getstate().employeReducer.employe;
      const { data } = await axios.post(`/employe/reset-password`, password);
      // const { data } = await axios.post(`/employe/avatar/`+_id,employe);
      dispatch(asynccurrentemploye());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncforgetpasswordemploye =
  (email) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.post(`/employe/send-mail`, email);
      console.log(email);
      dispatch(asynccurrentemploye());
    } catch (error) {
       dispatch(iserror(error.response.data.message))
    }
  };

export const asyncotppasswordemploye = (pwd) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post(`/employe/forget-link`, pwd);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncjobscreatedemploye = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post(`/employe/job/read`);
    dispatch(addjobs(data));
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncinternshipscreatedemploye =() => async (dispatch, getstate) => {
    try {
      const { data } = await axios.post(`/employe/internship/read`);
      dispatch(addinternships(data));
      dispatch(asynccurrentemploye());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asynccreatejobemploye = (job) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post(`/employe/job/create`, job);

    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};
export const asynccreateinternshipemploye =(internship) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.post(
        `/employe/internship/create`,
        internship
      );
      dispatch(asynccurrentemploye());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };


  export const asyncdeletejobemploye = (id) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.post(`/employe/job/delete/${id}`);
  
      dispatch(asynccurrentemploye());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

  export const asyncdeleteinternemploye = (id) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.post(`/employe/internship/delete/${id}`);
  
      dispatch(asynccurrentemploye());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };


  export const asyncupdateinternemploye = (intern,id) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.post(`/employe/internship/update/${id}`,intern);
      dispatch(asynccurrentemploye());
    } catch (error) {
      console.log(error);
      // dispatch(iserror(error.response.data.message));
    }
  };


  export const asyncupdatejobemploye = (job,id) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.post(`/employe/job/update/${id}`,job);
      dispatch(asynccurrentemploye());
    } catch (error) {
      console.log(error);
      // dispatch(iserror(error.response.data.message));
    }
  };


  export const asyncstudentapplied = () => async(dispatch,getstate)=>{
    try {
      const { data } = await axios.post("/employe/student/applied/internship");
      dispatch(appliedstudent(data.response))
     console.log(data.response)
    } catch (error) {
  
      //  dispatch(iserror(error.response.data.message))
    }
  } 