import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHomePage = () => {
  const navigate = useNavigate();

  // Handler functions for button clicks
  const handlePredictionDetails = () => {
    navigate('/prediction-details');
  };

  const handleDoctorDetails = () => {
    navigate('/doctor-details');
  };

  const handlePatientDetails = () => {
    navigate('/patient-details');
  };

  return (
    <div className="dashboard min-h-screen bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500 flex flex-col items-center justify-center p-8">
      <h1 className="text-center text-4xl font-extrabold text-white mb-8 shadow-md p-4 rounded-md">
        Admin Home Page
      </h1>
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={handlePredictionDetails}
          className="w-60 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Prediction Details
        </button>

        <button
          onClick={handleDoctorDetails}
          className="w-60 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Doctor Details
        </button>

        <button
          onClick={handlePatientDetails}
          className="w-60 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Patient Details
        </button>
      </div>
    </div>
  );
};

export default AdminHomePage;
