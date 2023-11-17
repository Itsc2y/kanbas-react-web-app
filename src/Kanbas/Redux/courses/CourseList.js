import React, { useEffect } from "react";
import CourseForm from "./CourseForm";
import CourseItem from "./CourseItem";
import { useSelector, useDispatch } from "react-redux";

import { setCourses } from "./CourseReducer";
import * as client from "./client";


function CourseList() {
  const courses = useSelector(state => state.CourseReducer.courses);
  const dispatch = useDispatch();

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
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <CourseForm />
      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex flex-row flex-wrap">
        {courses.map((course, index) => (
          <div key={course._id} className="col">
            <div className="card h-100">
              <img
                src={`/images/solid-color-image${index + 1}.png`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <CourseItem course={course} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CourseList;

