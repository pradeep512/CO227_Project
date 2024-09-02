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

      // Fetch data from the API
      const response = await axiosClient.get(`/patients/${patientId}`);

      // Log the response to debug the structure
      console.log("Fetched Patient Data:", response.data.PatientDataById);
      console.log("done");

      // Check if the response contains the expected data
      if (response.data) {
        setPatient(response.data);
      } else {
        setError("No patient data found.");
      }
    } catch (err) {
      // Set error message if request fails
      setError(
        "Failed to fetch patient data. Please check the Patient ID and try again."
      );
      console.error("Error fetching patient data:", err); // Log error for debugging
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

      {/* Show message when no patient data is available and no errors */}
      {!patient && !loading && !error && (
        <Typography>No patient data available.</Typography>
      )}
    </Box>
  );
};

export default PatientDataById;
