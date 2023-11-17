import axios from "axios";

// const COURSES_URL = "https://kanbas-node-server-app-1cca.onrender.com/api/courses";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`;

export const addCourse = async (course) => {
  const response = await axios.post(`${COURSES_URL}`, course);
  return response.data;
};

export const findCourses = async () => {
  const response = await axios.get(`${COURSES_URL}`);
  return response.data;
};

export const updateCourse = async (courseId, course) => {
  const response = await axios.put(`${COURSES_URL}/${courseId}`, course);
  return response.data;
};

export const deleteCourse = async (courseId) => {
  const response = await axios.delete(`${COURSES_URL}/${courseId}`);
  return response.data;
};