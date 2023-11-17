import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCourses, addCourse as addCourseAction, updateCourse as updateCourseAction } from "./CourseReducer";
import * as client from "./client";

function CourseForm() {
  const selectedCourse = useSelector(state => state.CourseReducer.course); 
  const [course, setCourse] = useState({ 
    name: "",
    number: "",
    startDate: "",
    endDate: "", });
  const dispatch = useDispatch();

  const addCourseHandler = async () => {
    try {
        const newCourse = await client.addCourse(course);
        dispatch(addCourseAction(newCourse)); 
    } catch (error) {
        console.error("Failed to add course:", error);
    }
  };

  const handleInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const updateCourseHandler = async () => {
    try {
        const updatedCourse = await client.updateCourse(course._id, course);
        dispatch(updateCourseAction(updatedCourse));
        fetchCourses(); 
    } catch (error) {
        console.error("Failed to update course:", error);
    }
  };

  useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse); 
    }
  }, [selectedCourse]);

  const fetchCourses = async () => {
    try {
        const courses = await client.findCourses();
        dispatch(setCourses(courses));
    } catch (error) {
        console.error("Failed to fetch courses:", error);
    }
  };

  useEffect(() => {
      fetchCourses();
  }, []);


  return (
    <ul className="list-group mb-3" style={{width:350}}>
      <li className="list-group-item form-control">
        {/* <p>
          Course ID: <input
          className="float-end form-control"
          value={course._id}
          onChange={(e) => dispatch(setCourse({ ...course, _id: e.target.value }))}
          />
        </p> */}
        <p>
          Course Name: <input
          name="name"
          className="float-end form-control"
          value={course.name}
          onChange={handleInputChange}
          />
        </p>
        <p>
          Course Number: <input
          name="number"
          className="float-end form-control"
          value={course.number}
          onChange={handleInputChange}
          />
        </p>
        <p>
          Course Start Date: <input
          name="startDate"
          className="float-end form-control"
          value={course.startDate}
          onChange={handleInputChange}
          />
        </p>
        <p>
          Course End Date: <input
          name="endDate"
          className="float-end form-control"
          value={course.endDate}
          onChange={handleInputChange}
          />
        </p>
          <button className="float-end btn btn-primary mt-2" onClick={updateCourseHandler}> Update </button>
          <button className="float-end btn btn-success mt-2 me-2" onClick={addCourseHandler}> Add </button>
      </li>
    </ul>
  );
}
export default CourseForm;