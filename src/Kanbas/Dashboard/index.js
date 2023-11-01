import { React } from "react";
import "./index.css";
import "../styles.css";
import "../../lib/font-awesome/css/font-awesome.css";
import "../../lib/bootstrap/bootstrap.min.css";

import CourseList from "../Redux/courses/CourseList";

function Dashboard() {
  return (
    <div className="wd-dashboard-grid">
      <h1>Dashboard</h1>
      <hr/>
      <CourseList />
    </div>
  );
}
export default Dashboard;