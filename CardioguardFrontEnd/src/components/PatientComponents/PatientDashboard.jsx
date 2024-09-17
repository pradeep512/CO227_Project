import React, { useState } from 'react';
import PatientGeneralInfo from './PatientGeneralInfo';
import ProfilePicture from './ProfilePicture';
import NextClinicDayCountdown from './NextClinicDayCountdown';
import CalendarComponent from './Calendar';

const PatientDashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // State for the selected date

    // Example date for the next clinic day
    const nextClinicDay = "2024-09-30";

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Top left - Patient Info */}
                <div className="col-span-1">
                    <PatientGeneralInfo />
                </div>

                {/* Top right - Profile Picture */}
                <div className="col-span-1 flex items-start justify-center">
                    <ProfilePicture />
                </div>
            </div>

            {/* Second row - Calendar and Countdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Calendar */}
                <div className="col-span-1">
                    <CalendarComponent 
                        selectedDate={selectedDate}
                        onDateSelect={setSelectedDate} 
                    />
                </div>

                {/* Countdown to next clinic day */}
                <div className="col-span-1">
                    <NextClinicDayCountdown nextClinicDay={selectedDate.toDateString()} />
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;

