// AdminPanel.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AdminPanel.css';

const AdminPanel = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [staffTasks, setStaffTasks] = useState({
    // Example staff data
    '2024-07-04': {
      'John Doe': {
        department: 'Kitchen',
        post: 'Chef',
        tasks: ['Prepare ingredients', 'Cook lunch', 'Serve customers'],
      },
      // Add more staff schedules as needed
    },
  });

  const handleDateClick = (date) => {
    const formattedDate = date.toLocaleDateString('en-CA'); // Format to YYYY-MM-DD
    setSelectedDate(formattedDate);
  };

  return (
    <div className="admin-panel-container">
      <h1>ADMIN PANEL</h1>
      <div className="admin-section" onClick={() => setShowSchedule(!showSchedule)}>
        <h2>Schedule and Task Assigning</h2>
      </div>
      {showSchedule && (
        <div className="calendar-staff-container">
          <div className="calendar-container">
            <Calendar
              onClickDay={handleDateClick}
              tileClassName={({ date, view }) =>
                view === 'month' && date.toLocaleDateString('en-CA') === new Date().toLocaleDateString('en-CA') ? 'today' : null
              }
            />
          </div>
          {selectedDate && (
            <div className="staff-schedule-details">
              <h3>Tasks for {selectedDate}</h3>
              {Object.entries(staffTasks[selectedDate] || {}).map(([staffName, details]) => (
                <div key={staffName} className="staff-details">
                  <h4>{staffName}</h4>
                  <p>Department: {details.department}</p>
                  <p>Post: {details.post}</p>
                  <div className="task-list">
                    <label>Tasks:</label>
                    {details.tasks.map((task, index) => (
                      <div key={index}>
                        <input type="checkbox" id={`${staffName}-${task}`} name={`${staffName}-${task}`} />
                        <label htmlFor={`${staffName}-${task}`}>{task}</label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="admin-section">
        <h2>Salary/Wages Release</h2>
        {/* Add salary/wages release content here */}
      </div>
      <div className="admin-section">
        <h2>Day Off Requests</h2>
        {/* Add day off requests content here */}
      </div>
    </div>
  );
};

export default AdminPanel;
