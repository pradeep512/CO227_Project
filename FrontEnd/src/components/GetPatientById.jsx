// Import necessary libraries
import React, { useState } from 'react';
import axios from 'axios';

// Define the PatientDataById component
const PatientDataById = () => {
  // State to store patient data
  const [patient, setPatient] = useState(null);
  // State to manage input value for patient ID
  const [patientId, setPatientId] = useState('');
  // State to manage loading status
  const [loading, setLoading] = useState(false);
  // State to manage error messages
  const [error, setError] = useState(null);

  // Function to fetch patient data by ID
  const fetchPatientDataById = async () => {
    if (!patientId) {
      setError('Please enter a valid Patient ID');
      return;
    }

    try {
      setLoading(true); // Set loading state
      setError(null); // Clear previous errors
      setPatient(null); // Clear previous patient data

      // Fetch data from the API
      const response = await axios.get(`/api/patients/${patientId}`);

      // Log the response to debug the structure
      console.log('Fetched Patient Data:', response.data);

      // Check if the response contains the expected data
      if (response.data) {
        setPatient(response.data);
      } else {
        setError('No patient data found.');
      }
    } catch (err) {
      // Set error message if request fails
      setError('Failed to fetch patient data. Please check the Patient ID and try again.');
      console.error('Error fetching patient data:', err); // Log error for debugging
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      {/* Input field for patient ID */}
      <input
        type="text"
        placeholder="Enter Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
      />

      {/* Button to fetch patient data */}
      <button onClick={fetchPatientDataById}>Get Patient Data</button>

      {/* Show loading message if data is being fetched */}
      {loading && <p>Loading...</p>}

      {/* Show error message if an error occurs */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display patient data if available */}
      {patient ? (
        <div>
          <h3>Patient Details</h3>
          <p><strong>Patient ID:</strong> {patient.patientId}</p>
          <p><strong>NIC:</strong> {patient.nic}</p>
          <p><strong>First Name:</strong> {patient.firstName}</p>
          <p><strong>Last Name:</strong> {patient.lastName}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Date of Birth:</strong> {new Date(patient.dateOfBirth).toLocaleDateString()}</p>
          <p><strong>Email:</strong> {patient.email || 'N/A'}</p>
        </div>
      ) : (
        !loading && !error && <p>No patient data available.</p> // Display this if no data is available and no errors
      )}
    </div>
  );
};

export default PatientDataById;
