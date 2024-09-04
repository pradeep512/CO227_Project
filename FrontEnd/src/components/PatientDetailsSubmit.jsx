import React, { useState } from 'react';
import axiosClient from '../axiosClient'; // Adjust the import based on your project structure
import { useNavigate } from 'react-router-dom';

const PatientDetailsSubmit = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    bilateralLowerLimbSwelling: false,
    dyspnoea: false,
    orthopnoea: false,
    paroxysmalNocturnalDyspnoea: false,
    fatigue: false,
    doctorRecommendation: '',
    symptomDate: '',
  });

  const navigate = useNavigate();
  // Handle input changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Log the form data for debugging
    console.log('Patient details submitted:', formData);

    try {
      // Assume patientId is obtained or defined elsewhere
      const patientId = 1;
      await axiosClient.post(`/patients/${patientId}/symptoms`, formData);
      console.log('Registration successful, navigating to the login page.');
      navigate(-1); // Navigate to the previous page
    } catch (error) {
      console.error('There was an error with the registration:', error);
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: '20px',
        padding: '20px',
        backgroundColor: '#f2f2f2',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>
        Patient Symptoms Submission Form
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="checkbox"
            name="bilateralLowerLimbSwelling"
            checked={formData.bilateralLowerLimbSwelling}
            onChange={handleChange}
            style={{ cursor: 'pointer' }}
          />
          <label htmlFor="bilateralLowerLimbSwelling" style={{ color: '#34495e' }}>
            BILATERAL LOWER LIMB SWELLING
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="checkbox"
            name="dyspnoea"
            checked={formData.dyspnoea}
            onChange={handleChange}
            style={{ cursor: 'pointer' }}
          />
          <label htmlFor="dyspnoea" style={{ color: '#34495e' }}>
            DYSPNOEA
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="checkbox"
            name="orthopnoea"
            checked={formData.orthopnoea}
            onChange={handleChange}
            style={{ cursor: 'pointer' }}
          />
          <label htmlFor="orthopnoea" style={{ color: '#34495e' }}>
            ORTHOPNOEA
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="checkbox"
            name="paroxysmalNocturnalDyspnoea"
            checked={formData.paroxysmalNocturnalDyspnoea}
            onChange={handleChange}
            style={{ cursor: 'pointer' }}
          />
          <label htmlFor="paroxysmalNocturnalDyspnoea" style={{ color: '#34495e' }}>
            PAROXYSMAL NOCTURNAL DYSPNOEA
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="checkbox"
            name="fatigue"
            checked={formData.fatigue}
            onChange={handleChange}
            style={{ cursor: 'pointer' }}
          />
          <label htmlFor="fatigue" style={{ color: '#34495e' }}>
            FATIGUE
          </label>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label htmlFor="doctorRecommendation" style={{ color: '#34495e' }}>
            DOCTOR RECOMMENDATION:
            <textarea
              name="doctorRecommendation"
              value={formData.doctorRecommendation}
              onChange={handleChange}
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px' }}
            />
          </label>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label htmlFor="symptomDate" style={{ color: '#34495e' }}>
            SYMPTOM DATE:
            <input
              type="datetime-local"
              name="symptomDate"
              value={formData.symptomDate}
              onChange={handleChange}
              style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px' }}
            />
          </label>
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#27ae60',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientDetailsSubmit;
