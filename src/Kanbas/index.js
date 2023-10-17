import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import "./styles.css";
import "../lib/font-awesome/css/font-awesome.css";
import "../lib/bootstrap/bootstrap.min.css";


function Kanbas() {
  return (
    <div className="wd-flex-row-container">
      <div className="wd-bg-color-black d-none d-md-block">
        <KanbasNavigation />
      </div>
      
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
