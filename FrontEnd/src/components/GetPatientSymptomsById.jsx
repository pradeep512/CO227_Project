// Import necessary libraries
import React, { useState } from "react";
import axiosClient from "../axiosClient";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";

// Define the PatientDataById component
const PatientDataById = () => {
  // State to store patient data
  const [patient, setPatient] = useState(null);
  // State to store symptoms data
  const [symptoms, setSymptoms] = useState([]);
  // State to manage input value for patient ID
  const [patientId, setPatientId] = useState("");
  // State to manage loading status
  const [loading, setLoading] = useState(false);
  // State to manage error messages
  const [error, setError] = useState(null);

  // Function to fetch patient data by ID
  const fetchPatientDataById = async () => {
    if (!patientId) {
      setError("Please enter a valid Patient ID");
      return;
    }

    try {
      setLoading(true); // Set loading state
      setError(null); // Clear previous errors
      setPatient(null); // Clear previous patient data
      setSymptoms([]); // Clear previous symptoms data

      // Fetch patient data
      const patientResponse = await axiosClient.get(`/patients/${patientId}`);
      // Fetch symptoms data
      const symptomsResponse = await axiosClient.get(
        `/patients/${patientId}/symptoms`
      );

      // Check if the response contains the expected data
      if (patientResponse.data) {
        setPatient(patientResponse.data);
      } else {
        setError("No patient data found.");
      }

      if (symptomsResponse.data) {
        setSymptoms(symptomsResponse.data); // Assuming symptoms are directly in the response
      } else {
        setError("No symptoms data found.");
      }
    } catch (err) {
      // Set error message if request fails
      setError(
        "Failed to fetch data. Please check the Patient ID and try again."
      );
      console.error("Error fetching data:", err); // Log error for debugging
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 3,
        maxWidth: 400,
        margin: "auto",
        mt: 4,
      }}
    >
      {/* Input field for patient ID */}
      <TextField
        label="Enter Patient ID"
        variant="outlined"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        fullWidth
        error={Boolean(error)}
        helperText={error}
      />

      {/* Button to fetch patient data */}
      <Button
        variant="contained"
        color="primary"
        onClick={fetchPatientDataById}
        disabled={loading}
        fullWidth
      >
        Get Patient Data
      </Button>

      {/* Show loading spinner if data is being fetched */}
      {loading && <CircularProgress />}

      {/* Display patient data if available */}
      {patient && (
        <Card sx={{ width: "100%", mt: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Patient Details
            </Typography>
            <Typography>
              <strong>Patient ID:</strong> {patient.patientId}
            </Typography>
            <Typography>
              <strong>NIC:</strong> {patient.nic}
            </Typography>
            <Typography>
              <strong>First Name:</strong> {patient.firstName}
            </Typography>
            <Typography>
              <strong>Last Name:</strong> {patient.lastName}
            </Typography>
            <Typography>
              <strong>Gender:</strong> {patient.gender}
            </Typography>
            <Typography>
              <strong>Date of Birth:</strong>{" "}
              {new Date(patient.dateOfBirth).toLocaleDateString()}
            </Typography>
            <Typography>
              <strong>Email:</strong> {patient.email || "N/A"}
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Display symptoms if available */}
      {symptoms.length > 0 && (
        <Card sx={{ width: "100%", mt: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Symptoms Details
            </Typography>
            {symptoms.map((symptom, index) => (
              <Box key={index} mb={2}>
                <Typography>
                  <strong>Symptom Code:</strong> {symptom.symptomCode}
                </Typography>
                <Typography>
                  <strong>Bilateral Lower Limb Swelling:</strong>{" "}
                  {symptom.bilateralLowerLimbSwelling ? "Yes" : "No"}
                </Typography>
                <Typography>
                  <strong>Dyspnoea:</strong> {symptom.dyspnoea ? "Yes" : "No"}
                </Typography>
                <Typography>
                  <strong>Orthopnoea:</strong>{" "}
                  {symptom.orthopnoea ? "Yes" : "No"}
                </Typography>
                <Typography>
                  <strong>Paroxysmal Nocturnal Dyspnoea:</strong>{" "}
                  {symptom.paroxysmalNocturnalDyspnoea ? "Yes" : "No"}
                </Typography>
                <Typography>
                  <strong>Fatigue:</strong> {symptom.fatigue ? "Yes" : "No"}
                </Typography>
                <Typography>
                  <strong>Doctor Recommendation:</strong>{" "}
                  {symptom.doctorRecommendation}
                </Typography>
                <Typography>
                  <strong>Symptom Date:</strong>{" "}
                  {new Date(symptom.symptomDate).toLocaleDateString()}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Show message when no data is available and no errors */}
      {!patient && !loading && !error && (
        <Typography>No patient data available.</Typography>
      )}
    </Box>
  );
};

export default PatientDataById;
