import axios from "axios";

const COURSES_URL = "https://kanbas-node-server-app-1cca.onrender.com/api/courses";
const ASSIGNMENTS_URL = "https://kanbas-node-server-app-1cca.onrender.com/api/assignments";

// const API_BASE = process.env.REACT_APP_API_BASE;
// const ASSIGNMENTS_URL = `${API_BASE}/assignments`;
// const COURSES_URL = `${API_BASE}/courses`;

export const addAssignment = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/Assignments`,
    assignment
  );
  return response.data;
};

export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignmentId, assignment) => {
  const response = await axios.put(`${ASSIGNMENTS_URL}/${assignmentId}`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId) => {
  const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};