import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
import { useLocation } from "react-router-dom";

const initialState = {
  assignments: db.assignments,
  assignment: {
    _id: "",
    name: "",
    points: "",
    dueDate: "",
    description: "",
    course: ""
  },
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
        const { courseId } = action.payload;
        console.log(courseId);
        const newAssignment = { ...action.payload, course: courseId };
        state.assignments.push(newAssignment);
        state.assignment = {
            name: "",
            points: "",
            dueDate: "",
            description: "",
            course:courseId
        };
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      const index = state.assignments.findIndex(
        (assignment) => assignment._id === action.payload._id
      );
      if (index !== -1) {
        state.assignments[index].name = action.payload.name;
        state.assignments[index].points = action.payload.points;
        state.assignments[index].dueDate = action.payload.dueDate;
        state.assignments[index].description = action.payload.description;
        // state.assignments[index] = action.payload;
        // state.assignment = {
        //     name: "",
        //     points: "",
        //     dueDate: "",
        //     description: ""
        // };
      }
    },
    setAssignment: (state, action) => {
      state.assignment = { ...action.payload };
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentSlice.actions;

export default assignmentSlice.reducer;
