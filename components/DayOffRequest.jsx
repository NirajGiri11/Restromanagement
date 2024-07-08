import React, { useState } from 'react';
import './DayOffRequest.css';

const DayOffRequest = () => {
  const [reason, setReason] = useState('');
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const totalDaysOffGranted = 30;
  const totalDaysOffTaken = 5; // Replace with actual data

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Day off request submitted successfully');
  };

  return (
    <div className="day-off-request-container">
      <button onClick={() => setIsOpen(!isOpen)}>Request For DayOff</button>
      {isOpen && (
        <div className="day-off-form">
          <p>Total days off that can be granted: {totalDaysOffGranted}</p>
          <p>Total days off taken: {totalDaysOffTaken}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Reason for leave:</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Input file (example: flight ticket, appointments, medical report):</label>
              <input type="file" onChange={handleFileChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DayOffRequest;
