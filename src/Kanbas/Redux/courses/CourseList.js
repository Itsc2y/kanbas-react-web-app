import React from "react";
import CourseForm from "./CourseForm";
import CourseItem from "./CourseItem";
import { useSelector } from "react-redux";

function CourseList() {
  const { courses } = useSelector((state) => state.CourseReducer);
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

