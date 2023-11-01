import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'; // Import redux-thunk middleware
import CourseReducer from "../Redux/courses/CourseReducer";
import ModuleReducer from "../Redux/modules/ModuleReducer";
import AssignmentReducer from "../Redux/assignments/AssignmentReducer";

const store = configureStore({
  reducer: {
    CourseReducer,
    ModuleReducer,
    AssignmentReducer
  },
}, applyMiddleware(thunk));

export default store;