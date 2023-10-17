import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
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

      <h6>Assignment Name</h6>
      <input placeholder={assignment.title}
             className="form-control mb-2 rounded-0" />

      <hr/>
      <div className="d-flex justify-content-end gap-1 mb-2">
        <div className="d-flex mb-3 mt-3 gap-2">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-outline-dark rounded-0">
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-danger rounded-0 me-2">
            Save
          </button>
        </div>
      </div>

    </div>
  );
}


export default AssignmentEditor;