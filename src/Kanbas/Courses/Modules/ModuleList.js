import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "../../styles.css";
import "../../../lib/font-awesome/css/font-awesome.css";
import "../../../lib/bootstrap/bootstrap.min.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      <div className="d-flex justify-content-end gap-1 mb-2">
        <button type="button" className="btn btn-outline-dark rounded-0">Collapse All</button>
        <button type="button" className="btn btn-outline-dark rounded-0">View Progress</button>
        
        <div className="dropdown">
          <button className="btn btn-outline-dark rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-check-circle-o wd-fg-color-green"></i> Publish All
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Publish all items and modules</a></li>
            <li><a className="dropdown-item" href="#">UnPublish</a></li>
          </ul>
        </div>

        <button type="button" className="btn btn-danger rounded-0">+ Modules</button>
        <button type="button" className="btn btn-outline-dark rounded-0"><i className="fa fa-ellipsis-v"></i></button>
      </div>
      <hr />

      <div>
        {
          modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ul className="list-group mb-5 rounded-0">
              <li key={index} className="list-group-item list-group-item-secondary">
                <i className="fa fa-ellipsis-v float-end me-4"></i>
                <i className="fa fa-plus float-end me-3"></i>
                <i className="fa fa-check-circle float-end me-3" style={{ color: 'green' }}></i>
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i> <i className="fa fa-ellipsis-v" aria-hidden="true" style={{ marginRight:'5px'}}></i> {module.name} —— {module.description}
              </li>
                {
                  module.lessons.map((lesson, index) => (
                    <li key={index} className="list-group-item">
                      <i className="fa fa-ellipsis-v float-end me-4"></i>
                <i className="fa fa-check-circle float-end me-3" style={{ color: 'green' }}></i>
                      <i className="fa fa-file-text-o"></i> {lesson.name}<br/>{lesson.description}
                    </li>
                  ))
                }
            </ul>
          ))
        }  
      </div>
    </div>   
  );
}
export default ModuleList;