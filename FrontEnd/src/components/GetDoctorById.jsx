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

// Define the DoctorDataById component
const DoctorDataById = () => {
  // State to store doctor data
  const [doctor, setDoctor] = useState(null);
  // State to manage input value for doctor ID
  const [doctorId, setDoctorId] = useState("");
  // State to manage loading status
  const [loading, setLoading] = useState(false);
  // State to manage error messages
  const [error, setError] = useState(null);

  // Function to fetch doctor data by ID
  const fetchDoctorDataById = async () => {
    if (!doctorId) {
      setError("Please enter a valid Doctor ID");
      return;
    }

    try {
      setLoading(true); // Set loading state
      setError(null); // Clear previous errors
      setDoctor(null); // Clear previous doctor data

      // Fetch data from the API
      const response = await axiosClient.get(`/doctors/${doctorId}`);

      // Log the response to debug the structure
      console.log("Fetched Doctor Data:", response.data);

      // Check if the response contains the expected data
      if (response.data) {
        setDoctor(response.data);
      } else {
        setError("No doctor data found.");
      }
    } catch (err) {
      // Set error message if request fails
      setError(
        "Failed to fetch doctor data. Please check the Doctor ID and try again."
      );
      console.error("Error fetching doctor data:", err); // Log error for debugging
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
      {/* Input field for doctor ID */}
      <TextField
        label="Enter Doctor ID"
        variant="outlined"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
        fullWidth
        error={Boolean(error)}
        helperText={error}
      />

      {/* Button to fetch doctor data */}
      <Button
        variant="contained"
        color="primary"
        onClick={fetchDoctorDataById}
        disabled={loading}
        fullWidth
      >
        Get Doctor Data
      </Button>

      {/* Show loading spinner if data is being fetched */}
      {loading && <CircularProgress />}

      {/* Display doctor data if available */}
      {doctor && (
        <Card sx={{ width: "100%", mt: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Doctor Details
            </Typography>
            <Typography>
              <strong>Doctor ID:</strong> {doctor.doctorId}
            </Typography>
            <Typography>
              <strong>Surname:</strong> {doctor.surname}
            </Typography>
            <Typography>
              <strong>Last Name:</strong> {doctor.lastName}
            </Typography>
            <Typography>
              <strong>NIC:</strong> {doctor.nic}
            </Typography>
            <Typography>
              <strong>Registered Patients:</strong>{" "}
              {doctor.registeredPatientsForDoctor.length > 0
                ? doctor.registeredPatientsForDoctor.join(", ")
                : "None"}
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Show message when no doctor data is available and no errors */}
      {!doctor && !loading && !error && (
        <Typography>No doctor data available.</Typography>
      )}
    </Box>
  );
};

export default DoctorDataById;
