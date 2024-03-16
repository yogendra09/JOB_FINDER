import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employe: null,
  jobs: null,
  internships: null,
  errors: [],
  appliedstudent:[],
  isAuthenticated: false,
};

export const employeReducer = createSlice({
  name: "employe",
  initialState,
  reducers: {
    addemploye: (state, action) => {
      (state.employe = action.payload), (state.isAuthenticated = true);
    },
    removeemploye: (state, action) => {
      (state.employe = null), (state.isAuthenticated = false);
      state.errors = [];
    },
    addjobs: (state, action) => {
      state.jobs = action.payload;
    },
    addinternships: (state, action) => {
      state.internships = action.payload;
    },
    iserror: (state, action) => {
      state.errors.push(action.payload);
    },
    appliedstudent: (state, action) => {
      state.appliedstudent.push(action.payload);
    },
    removeerror: (state, action) => {
      state.errors = [];
    },
  },
});

// state.errors = [];
export const {
  addemploye,
  removeemploye,
  addinternships,
  addjobs,
  iserror,
  removeerror,
  appliedstudent
} = employeReducer.actions;

export default employeReducer.reducer;
