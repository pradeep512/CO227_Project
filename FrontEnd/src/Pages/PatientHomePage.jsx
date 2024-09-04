import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatientsHomePage = () => {
  const navigate = useNavigate();

  // Handler functions for button clicks
  const handleViewDoctorsData = () => {
    navigate('/view-doctors-data'); // Adjust the route as per your application
  };

  const handleViewOwnRecords = () => {
    navigate('/view-own-records'); // Adjust the route as per your application
  };

  return (
    <div className="patients-home min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-8">
      <h1 className="text-center text-4xl font-extrabold text-white mb-8 shadow-md p-4 rounded-md">
        Patient Home Page
      </h1>
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={handleViewDoctorsData}
          className="w-60 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          View Doctors Data
        </button>

        <button
          onClick={handleViewOwnRecords}
          className="w-60 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          View Own Records
        </button>
      </div>
    </div>
  );
};

export default PatientsHomePage;
