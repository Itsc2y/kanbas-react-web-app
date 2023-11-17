import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  course: {
    // _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
  },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },

    addCourse: (state, action) => { 
      state.courses = [action.payload, ...state.courses];
    },

    deleteCourse: (state, action) => {
      state.courses = state.courses.filter((course) => course._id !== action.payload);
    },

    updateCourse: (state, action) => {
      state.courses = state.courses.map((course) => {
        if (course._id === action.payload._id) {
            return action.payload;
        }
        return course;
      });
    },

    setCourse: (state, action) => {
      state.course = { ...action.payload };
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;