import { Link, useLocation } from "react-router-dom";
import "./index.css";
import "../styles.css";
import "../../lib/font-awesome/css/font-awesome.css";
import "../../lib/bootstrap/bootstrap.min.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: "fa fa-user-circle-o",
    Dashboard: "fa fa-tachometer",
    Courses: "fa fa-book",
    Calendar: "fa fa-calendar",
    Inbox: "fa fa-inbox",
    History: "fa fa-history",
    Studio: "fa fa-television",
    Commons: "fa fa-sign-out",
    Help: "fa fa-question-circle"
  };

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation" style={{ width: 87}}>
      <img id="nu-logo" src="/images/NU_logo.png"/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {
          <div className="wd-kanbas-icon">
            <i className={linkToIconMap[link]} aria-hidden="true" id={link === "Account" ? "account" : undefined} ></i>
          </div>
          }
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
