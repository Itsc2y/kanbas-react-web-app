import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment, setAssignment, addAssignment } from "./AssignmentReducer";
import { Link, useParams } from "react-router-dom";

function AssignmentForm() {
  const { courseId } = useParams();
  const assignment = useSelector((state) => state.AssignmentReducer.assignment);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="d-flex justify-content-end gap-1">
        <div className="d-flex gap-2">
          <i className="fa fa-check-circle-o wd-fg-color-green" style={{display: "flex", alignItems: "center" }}></i>
          <b style={{color: "green", display: "flex", alignItems: "center" }}>Published</b>
          <button type="button" className="btn btn-outline-dark rounded-0"><i className="fa fa-ellipsis-v"></i></button>
        </div>
      </div>
      <hr/>      

      <ul className="list-group mb-3">
        <li className="list-group-item form-control">
          <p>
            Assignment Name <input
            className="form-control"
            placeholder="New Assignment"
            value={assignment.name}
            onChange={(e) => dispatch(setAssignment({ ...assignment, name: e.target.value }))}
            />
          </p>
            <textarea 
                className="form-control"
                placeholder="New Assignment Description"
                value={assignment.description}
                onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))
            }/>
          Points <input
            className="form-control"
            value={assignment.points}
            onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))}
            />

          Assign <ul className="list-group mb-3">
            <li className="list-group-item form-control">
              <p>
                Due <input
                type="date"
                className="form-control"
                value={assignment.dueDate}
                onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}
                />
              </p>
              <p>
                Available From <input
                type="date"
                className="form-control"
                />
              </p>
              <p>
                Until <input
                type="date"
                className="form-control"
                />
              </p>
            </li>
          </ul>
        </li>
        <hr />
        <div className="d-flex justify-content-end gap-1 mb-2">
          <div className="d-flex mb-3 mt-3 gap-2">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
              <button className="btn btn-outline-dark rounded-0 me-2">
                Cancel
              </button>
              <button className="btn btn-primary rounded-0 me-2" onClick={() => dispatch(updateAssignment(assignment))}>
                Save
              </button>
              <button className="btn btn-danger rounded-0" onClick={() => dispatch(addAssignment(assignment))}>
                Add
              </button>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
}
export default AssignmentForm;