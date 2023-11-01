import React from "react";
import "../../styles.css";
import "../../../lib/font-awesome/css/font-awesome.css";
import "../../../lib/bootstrap/bootstrap.min.css";
import AssignmentList from "../../Redux/assignments/AssignmentList";

function Assignments() {
  return (
    <div>
      <AssignmentList />
    </div>
  );
}
export default Assignments;