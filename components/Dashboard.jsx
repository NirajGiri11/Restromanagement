import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
import DayOffRequest from './DayOffRequest';

const Dashboard = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [schedule, setSchedule] = useState({
    // Example schedule data
    '2024-07-04': {
      time: '9:00 AM - 5:00 PM',
      tasks: ['Prepare ingredients', 'Cook lunch', 'Serve customers'],
      notes: 'Remember to clean the kitchen after lunch.'
    },
    // Add more dates and schedules as needed
  });

  const handleDateClick = (date) => {
    const formattedDate = date.toLocaleDateString('en-CA'); // Format to YYYY-MM-DD
    setSelectedDate(formattedDate);
  };

  return (
    <div className="dashboard-container">
      <h1>STAFF DASHBOARD</h1>
      <div className="dashboard-section" onClick={() => setShowCalendar(!showCalendar)}>
        <h2>Schedule</h2>
      </div>
      {showCalendar && (
        <div className="calendar-schedule-container">
          <div className="calendar-container">
            <Calendar
              onClickDay={handleDateClick}
              tileClassName={({ date, view }) =>
                view === 'month' && date.toLocaleDateString('en-CA') === new Date().toLocaleDateString('en-CA') ? 'today' : null
              }
            />
          </div>
          {selectedDate && (
            <div className="schedule-details">
              <h3>Schedule for {selectedDate}</h3>
              <p>Time: {schedule[selectedDate]?.time || 'No schedule available'}</p>
              <p>Tasks: {schedule[selectedDate]?.tasks?.join(', ') || 'No tasks assigned'}</p>
              <p>Notes: {schedule[selectedDate]?.notes || 'No notes'}</p>
            </div>
          )}
        </div>
      )}
      <div className="dashboard-section">
        <h2>My Payments</h2>
        {/* Add payments content here */}
      </div>
      <div className="dashboard-section">
        <h2>Day Off Request</h2>
        <DayOffRequest />
      </div>
    </div>
  );
};

export default Dashboard;
