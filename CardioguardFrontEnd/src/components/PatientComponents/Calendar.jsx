import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS file to style the calendar

const CalendarComponent = ({ selectedDate, onDateSelect }) => {
    // Handle date change
    const onChange = (date) => {
        onDateSelect(date);
    };

    // Handle save button click
    const handleSave = () => {
        alert(`Date Saved: ${selectedDate.toDateString()}`);
        // You can also send the date to the parent component or make an API call here
    };

    return (
        <div className="calendar-container p-4 rounded-lg shadow-md bg-white max-w-sm mx-auto">
            <h2 className="text-lg font-bold text-center mb-4">Select a Date</h2>
            <Calendar
                onChange={onChange}
                value={selectedDate}
                className="mx-auto"
            />
            <p className="text-center mt-4">
                <strong>Selected Date:</strong> {selectedDate.toDateString()}
            </p>
            <div className="text-center mt-4">
                <button
                    onClick={handleSave}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Save Date
                </button>
            </div>
        </div>
    );
};

export default CalendarComponent;

