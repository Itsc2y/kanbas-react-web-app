import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "../styles.css";
import "../../lib/font-awesome/css/font-awesome.css";
import "../../lib/bootstrap/bootstrap.min.css";
import { useSelector } from "react-redux"; 

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const parts = pathname.split('/');
  const screen = parts[parts.length - 1];
  const courses = useSelector((state) => state.CourseReducer.courses);
  const course = courses.find((course) => course._id === courseId);

  return (
    <div className="container-fluid">
      <div className="d-md-block d-none">
        <div className="wd-breadbar mt-4 ms-3" style={{ width: 1450}}>
          <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <i className="fa fa-bars fa-lg wd-fg-color-red me-4" aria-hidden="true"></i>
                <a className="wd-fg-color-red" href="#">{course._id} {course.number} {course.name}</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page"> &gt; {screen}</li>
            </ol>
          </nav>
          <hr />
        </div>
        <CourseNavigation />
      </div>
      
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0 wd-move-right"
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;