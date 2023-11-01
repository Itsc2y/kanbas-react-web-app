import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import AssignmentForm from "../../../Redux/assignments/AssignmentForm";


function AssignmentEditor() {
  return (
    <div>
      <AssignmentForm />
    </div>
  );
}


export default AssignmentEditor;