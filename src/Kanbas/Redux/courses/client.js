import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";

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