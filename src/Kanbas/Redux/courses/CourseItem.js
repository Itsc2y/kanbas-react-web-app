import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setCourse, setCourses, deleteCourse as deleteCourseAction } from "./CourseReducer";
import * as client from "./client";

function CourseItem({ course }) {
  const dispatch = useDispatch();

  const deleteCourseHandler = async () => {
    try {
        await client.deleteCourse(course._id);
        dispatch(deleteCourseAction(course._id));
    } catch (error) {
        console.error("Failed to delete course:", error);
    }
  };

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
    <div>
      <h5 className="card-title">
        <Link to={`/Kanbas/Courses/${course._id}`} className="wd-fg-color-red">
          {course.number} {course.name}
        </Link>
      </h5>
      <p className="card-text">
        Course ID: {course._id} Start from {course.startDate} to {course.endDate}
      </p>
      <button className="btn btn-warning me-2" onClick={() => dispatch(setCourse(course))}> Edit </button>
      <button className="btn btn-danger" onClick={() => deleteCourseHandler(course._id)}> Delete </button>
    </div>
  );
}
export default CourseItem;