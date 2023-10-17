import React from "react";
import db from "../../Database";
import { useParams } from "react-router-dom";
import "../../styles.css";
import "../../../lib/font-awesome/css/font-awesome.css";
import "../../../lib/bootstrap/bootstrap.min.css";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div>
        <div className="d-flex justify-content-end gap-1">
          <button className="btn btn-light rounded-0">
            <i className="fas fa-file-import"></i> Import
          </button>
          <div className="btn-group">
            <button className="btn btn-light rounded-0 dropdown-toggle" type="button" id="exportDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-file-export"></i> Export
            </button>
            <ul className="dropdown-menu" aria-labelledby="exportDropdown">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
            </ul>
          </div>
          <button className="btn btn-light rounded-0"><i className="fa fa-cog" aria-hidden="true"></i></button>
        </div>
        <div className="row mt-3">
          <div className="col">
            <b>Student Names</b>
            <input className="form-control rounded-0" type="text" placeholder="&#xF002; Search Students"  style={{ fontFamily: 'Arial, FontAwesome' }} />
          </div>
          <div className="col">
            <b>Assignment Names</b>
            <input className="form-control rounded-0" type="text" placeholder="&#xF002; Search Assignments"  style={{ fontFamily: 'Arial, FontAwesome' }} />
          </div>
        </div>
        <button className="btn btn-light rounded-0 mt-2" type="button">
          <i className="fa fa-filter"></i> Apply Filters
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped mt-4">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;