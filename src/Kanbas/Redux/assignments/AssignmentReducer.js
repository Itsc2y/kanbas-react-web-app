import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  assignment: {
    name: "New Assignment",
    points: "",
    dueDate: "",
    description: "New Description",
    course: ""
  },
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },

    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
            return action.payload;
        }
        return assignment;
      });
    },

    setAssignment: (state, action) => {
      state.assignment = action.payload; 
    },

    setAssignments: (state, action) => {
      state.assignments = action.payload; 
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments
} = assignmentSlice.actions;

export default assignmentSlice.reducer;
