import React from "react";
import ModuleList from "../../Redux/modules/ModuleList";
import "../../styles.css";
import "../../../lib/font-awesome/css/font-awesome.css";
import "../../../lib/bootstrap/bootstrap.min.css";
import ModuleHeader from "../../Redux/modules/ModuleHeader";
import ModuleItem from "../../Redux/modules/ModuleItem";


function Home() {
  const linksMap = {
    1: "Import Existing Content",
    2: "Import From Commons",
    3: "Choose Home Page",
    4: "View Course Stream",
    5: "New Announcement",
    6: "New Analytics",
    7: "View Course Notifications"
  };

  const linkToIconMap = {
    1: "fa fa-download",
    2: "fa fa-comments",
    3: "fa fa-bullseye",
    4: "fa fa-bar-chart",
    5: "fa fa-bullhorn",
    6: "fa fa-bar-chart",
    7: "fa fa-bell-o"
  };

  const Assignments = [
    {
      title: "Grade A1",
      detail: "ENV + HTML",
      date: "Sep 18 at 11:59am",
    },
    {
      title: "Grade A2",
      detail: "CSS + BOOTSTRAP",
      date: "Oct 2 at 11:59am",
    },
  ];

  return (
    <div className="row">
      <div className="col col-md-9 wd-flex-grow-1">
        <ModuleHeader />
        <hr />
        <ModuleItem />
      </div>

      <div className="col col-md-auto d-sm-none d-md-none d-lg-block">
          <button className="btn btn-outline-dark rounded-0 mb-4">
            <i className="fa fa-eye" aria-hidden="true"></i> Student View
          </button>
        
          {Object.keys(linksMap).map((key) => (
            <ul className="list-group mt-1 rounded-0">
              <li key={key} className="list-group-item list-group-item-secondary">
                <i className={linkToIconMap[key]}></i> <a className="wd-fg-color-black" href="#">{linksMap[key]}</a>
              </li>
            </ul>
          ))}

        <div className="mt-4">
          <b style={{marginRight:25}}>To Do</b>
          <hr />
        </div>
        
        <div id="right-side-module">
          {Assignments.map((assignment, index) => (
            <p key={index}>
              <a className="wd-fg-color-black" href="#">
                <div className="wd-fg-color-red">
                  <i className="fa fa-calendar" aria-hidden="true"></i> {assignment.title} - {assignment.detail}
                </div>
                {assignment.date}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;