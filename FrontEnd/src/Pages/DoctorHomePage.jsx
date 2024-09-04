import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Handler functions for button clicks
  const handlePrediction = () => {
    navigate('/prediction');
  };

  const handleViewPatientDetails = () => {
    navigate('/view-patient-details');
  };

  const handleSubmitPatientDetails = () => {
    navigate('/submit-patient-details');
  };

  return (
    <div className="dashboard min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-8">
      <h1 className="text-center text-4xl font-extrabold text-white mb-8 shadow-md p-4 rounded-md">
        Patient Management System
      </h1>
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={handlePrediction}
          className="w-60 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Prediction
        </button>

        <button
          onClick={handleViewPatientDetails}
          className="w-60 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          View Patient Details
        </button>

        <button
          onClick={handleSubmitPatientDetails}
          className="w-60 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Submit Patient Details
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
