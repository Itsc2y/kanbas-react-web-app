import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import "../styles.css";
import "../../lib/font-awesome/css/font-awesome.css";
import "../../lib/bootstrap/bootstrap.min.css";

function Dashboard() {
  const courses = db.courses;

  return (
    <div className="wd-dashboard-grid">
    
      <h1>Dashboard</h1>
      <hr/>
      
      <h2>Published Courses ({courses.length})</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex flex-row flex-wrap">
        {courses.map((course, index) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            <div className="col">
              <div className="card h-100">
                  <img src={`/images/solid-color-image${index + 1}.png`} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title"><a class="wd-fg-color-red" href="#">{course.number} {course.name}</a></h5>
                    <p class="card-text">
                      Course ID: {course._id} Start from {course.startDate} to {course.endDate}
                    </p>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;