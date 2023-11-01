import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setAssignment, deleteAssignment } from "./AssignmentReducer";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import the CSS

function AssignmentList() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.AssignmentReducer.assignments);
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    const dispatch = useDispatch();

    const handleDelete = (assignmentId) => {
        confirmAlert({
          title: 'Confirm Deletion',
          message: 'Are you sure you want to delete this assignment?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                dispatch(deleteAssignment(assignmentId));
              },
            },
            {
              label: 'No',
              onClick: () => {},
            },
          ],
        });
    };

    return (
        <div>
            <div className="d-flex justify-content-end gap-1 mb-2">
                <div className="d-flex mb-3 mt-3 gap-2">
                <div className="form-outline me-3">
                    <input type="text" id="form1" className="form-control rounded-0" placeholder="Search for Assignments" />
                </div>
                <button className="btn btn-outline-dark rounded-0"> + Group</button>
                <Link 
                    to={`/Kanbas/Courses/${courseId}/Assignments/${new Date().getTime().toString()}`}
                    className="btn btn-danger rounded-0">
                     + Assignment
                </Link>
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
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>{" "}
                        <i
                        className="fa fa-ellipsis-v"
                        aria-hidden="true"
                        style={{ marginRight: "5px" }}
                        ></i>{" "}
                        Assignments
                    </li>
                    {courseAssignments.map((assignment) => (
                        <li key={assignment._id} className="list-group-item" style={{ borderLeft: "5px solid green" }}>
                            <div className="row">
                                <div className="col col-1 mt-2" >
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                <i className="fa fa-ellipsis-v ms-1 me-3" aria-hidden="true"></i>
                                <i
                                    className="fa fa-file-text-o"
                                    style={{ color: "green", marginLeft: "5px", marginRight: "5px" }}
                                ></i>
                                </div>
                                <div className="col">
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    onClick={() => dispatch(setAssignment(assignment))}
                                    className="wd-fg-color-black"
                                >
                                    <div>
                                        {assignment.name} - {assignment.description}
                                        <br />
                                        <span className="wd-fg-color-red">Multiple Modules</span> |{" "}
                                        <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                                    </div>
                                </Link>
                                </div>
                                <div className="col">
                                    <button
                                    className="btn btn-danger float-end me-2"
                                    onClick={() => handleDelete(assignment._id)}
                                    >
                                    Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default AssignmentList;

