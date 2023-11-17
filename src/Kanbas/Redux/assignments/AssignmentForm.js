import React, { useState, useEffect } from "react";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment as updateAssignmentAction, setAssignments, addAssignment as addAssignmentAction } from "./AssignmentReducer";
import { Link, useParams } from "react-router-dom";

function AssignmentForm() {
  const { courseId } = useParams();
  const selectedAssignment = useSelector(state => state.AssignmentReducer.assignment); 
  const [assignment, setAssignment] = useState({ 
    name: "",
    points: "",
    dueDate: "",
    description: "",
    course: "" 
  });
  const dispatch = useDispatch();

  const addAssignmentHandler = async () => {
    try {
        const newAssignment = await client.addAssignment(courseId, assignment);
        dispatch(addAssignmentAction(newAssignment)); 
    } catch (error) {
        console.error("Failed to add assignment:", error);
    }
  };

  const handleInputChange = (e) => {
      setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  const updateAssignmentHandler = async () => {
      try {
          const updatedAssignment = await client.updateAssignment(assignment._id, assignment);
          dispatch(updateAssignmentAction(updatedAssignment));
          fetchAssignments(); 
      } catch (error) {
          console.error("Failed to update assignment:", error);
      }
  };

  const fetchAssignments = async () => {
    try {
        const assignments = await client.findAssignmentsForCourse(courseId);
        dispatch(setAssignments(assignments));
    } catch (error) {
        console.error("Failed to fetch assignments:", error);
    }
  };

  useEffect(() => {
      fetchAssignments();
  }, [courseId]);

  useEffect(() => {
      if (selectedAssignment) {
          setAssignment(selectedAssignment); 
      }
  }, [selectedAssignment]);


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
            name="name"
            className="form-control"
            placeholder="New Assignment"
            value={assignment.name}
            onChange={handleInputChange}
            />
          </p>
            <textarea 
              name="description"
              className="form-control"
              placeholder="New Assignment Description"
              value={assignment.description}
              onChange={handleInputChange}
            />
          Points <input
            name="points"
            className="form-control"
            value={assignment.points}
            onChange={handleInputChange}
            />

          Assign <ul className="list-group mb-3">
            <li className="list-group-item form-control">
              <p>
                Due <input
                name="dueDate"
                type="date"
                className="form-control"
                value={assignment.dueDate}
                onChange={handleInputChange}
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
              <button className="btn btn-primary rounded-0 me-2" onClick={updateAssignmentHandler}>
                Save
              </button>
              <button className="btn btn-danger rounded-0" onClick={addAssignmentHandler}>
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