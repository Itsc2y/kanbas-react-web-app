import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AssignmentInfo() {
  const [assignment, setAssignment] = useState({});
  const [property, setProperty] = useState('');
  const [updatedValue, setUpdatedValue] = useState('');

  useEffect(() => {
    // Retrieve the assignment object when the component mounts
    axios.get('http://localhost:4000/a5/assignment')
      .then((response) => {
        setAssignment(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving assignment object:', error);
      });
  }, []);

  const handlePropertyChange = (e) => {
    setProperty(e.target.value);
  };

  const handleGetProperty = () => {
    axios.get(`http://localhost:4000/a5/assignment/${property}`)
      .then((response) => {
        setUpdatedValue(response.data[property]);
      })
      .catch((error) => {
        console.error('Error retrieving property:', error);
      });
  };

  const handleUpdateProperty = () => {
    axios.put(`http://localhost:4000/a5/assignment/${property}`, {
      value: updatedValue,
    })
      .then((response) => {
        setUpdatedValue(response.data[property]);
      })
      .catch((error) => {
        console.error('Error updating property:', error);
      });
  };

  return (
    <div>
      <h3>Assignment Info</h3>
      <div>
        <h4>Assignment Object</h4>
        <pre>{JSON.stringify(assignment, null, 2)}</pre>
      </div>
      <div>
        <h4>Retrieve Individual Property</h4>
        <input
          type="text"
          placeholder="Property Name"
          value={property}
          onChange={handlePropertyChange}
        />
        <button onClick={handleGetProperty}>Retrieve Property</button>
        <p>Value: {updatedValue}</p>
      </div>
      <div>
        <h4>Update Property</h4>
        <input
          type="text"
          placeholder="New Value"
          value={updatedValue}
          onChange={(e) => setUpdatedValue(e.target.value)}
        />
        <button onClick={handleUpdateProperty}>Update Property</button>
      </div>
    </div>
  );
}

export default AssignmentInfo;
