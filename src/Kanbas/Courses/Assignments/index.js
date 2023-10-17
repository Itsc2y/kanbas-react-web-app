import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "../../styles.css";
import "../../../lib/font-awesome/css/font-awesome.css";
import "../../../lib/bootstrap/bootstrap.min.css";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="d-flex justify-content-end gap-1 mb-2">
        <div className="d-flex mb-3 mt-3 gap-2">
          <div className="form-outline me-3">
            <input type="text" id="form1" className="form-control rounded-0" placeholder="Search for Assignments" />
          </div>
          <button className="btn btn-outline-dark rounded-0"> + Group</button>
          <button className="btn btn-danger rounded-0"> + Assignment</button>
          <button className="btn btn-outline-dark rounded-0"> <i className="fa fa-cog" aria-hidden="true"></i></button>
          <button className="btn btn-outline-dark rounded-0">
            <i className="fa fa-eye" aria-hidden="true"></i> Student View
          </button>
        </div>
      </div>
      <hr />

      <div className="list-group">
        <ul className="list-group mb-5 rounded-0">
          <li className="list-group-item list-group-item-secondary">
            <i className="fa fa-ellipsis-v float-end me-4"></i>
            <i className="fa fa-plus float-end me-3"></i>
            <i className="fa fa-check-circle float-end me-3"></i>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i> <i className="fa fa-ellipsis-v" aria-hidden="true" style={{ marginRight:'5px'}}></i> Assignments
          </li>
            {
              courseAssignments.map((assignment) => (
                <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="list-group-item" style={{ borderLeft: "5px solid green" }}>
                  <i className="fa fa-ellipsis-v float-end me-4"></i>
                  <i className="fa fa-check-circle float-end me-3" style={{ color: 'green' }}></i>
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i> <i className="fa fa-ellipsis-v" aria-hidden="true"></i> <i className="fa fa-file-text-o"  style={{ color: 'green', marginLeft:'5px', marginRight:'5px'}}></i>  {assignment.title}
                </Link>
              ))
            }
        </ul>
      </div>
    </div>
  );
}
export default Assignments;