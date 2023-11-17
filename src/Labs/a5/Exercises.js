import React, { useState } from "react";

function Exercises() {
  const [first, setfirst] = useState("Monica");
  const [last, setlast] = useState("Chen");
  return (
    <div>
        <h2>3.1.3 Exercises</h2>
        <h3>Encoding Parameters In URLs</h3>
        <h4>Enter your full name</h4>
        <input
            onChange={(e) => setfirst(e.target.value)}
            className="form-control" type="text" value={first}/>
        <input
            onChange={(e) => setlast(e.target.value)}
            className="form-control" type="text" value={last}/>
        
        <h3>Path Parameters</h3>
        <a
            href={`http://localhost:4000/a5/login/${first}/${last}`}
            className="btn btn-primary me-2">
            Hello {first} {last}
        </a>
        <a
            href={`http://localhost:4000/a5/logout/${first}/${last}`}
            className="btn btn-danger">
            Bye {first} {last}
        </a>

        <h3>Query Parameters</h3>
        <a
        href={`http://localhost:4000/a5/auth?auth=login&first=${first}&last=${last}`}
        className="btn btn-primary me-2">
        Hello {first} {last}
        </a>
        <a
        href={`http://localhost:4000/a5/auth?auth=logout&first=${first}&last=${last}`}
        className="btn btn-danger">
        Bye {first} {last}
        </a>

    </div>
  );
}
export default Exercises;