import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import SearchDoctors from "./SearchDoctors";
import SearchPatients from "./SearchPatients"; // Assuming these components are imported
import axiosClient from "../axiosClient";

const RegisterPatientToDoctor = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleDoctorSelect = (doctorId) => {
    setSelectedDoctorId(doctorId);
  };

  const handlePatientSelect = (patientId) => {
    setSelectedPatientId(patientId);
  };

  const handleRegister = async () => {
    if (!selectedDoctorId || !selectedPatientId) {
      setError("Please select both a doctor and a patient.");
      return;
    }

    try {
      const response = await axiosClient.put(
        `/admin/registerTo/${selectedDoctorId}/${selectedPatientId}/register`
      );
      if (response.status === 200) {
        setSuccess("Patient successfully registered to doctor!");
        setError(null);
      } else {
        setError("Failed to register patient to doctor. Please try again.");
      }
    } catch (err) {
      setError("Failed to register patient to doctor. Please try again.");
      console.error("Error registering patient to doctor:", err);
    }
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 3,
        maxWidth: 1000,
        margin: "auto",
        mt: 4,
      }}
    >
      <Typography variant="h6">Register Patient to Doctor</Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          width: "100%",
          marginBottom: 2,
        }}
      >
        {/* Doctor search section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1">Select Doctor:</Typography>
          <SearchDoctors onSelectDoctor={handleDoctorSelect} />
          <TextField
            label="Selected Doctor ID"
            variant="outlined"
            value={selectedDoctorId}
            disabled
            fullWidth
            sx={{ marginTop: 2 }}
          />
        </Box>

        {/* Patient search section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1">Select Patient:</Typography>
          <SearchPatients onSelectPatient={handlePatientSelect} />
          <TextField
            label="Selected Patient ID"
            variant="outlined"
            value={selectedPatientId}
            disabled
            fullWidth
            sx={{ marginTop: 2 }}
          />
        </Box>
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleRegister}
        sx={{ marginTop: 2 }}
        disabled={!selectedDoctorId || !selectedPatientId}
      >
        Register Patient to Doctor
      </Button>

      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="primary">{success}</Typography>}
    </Box>
  );
};

export default RegisterPatientToDoctor;
