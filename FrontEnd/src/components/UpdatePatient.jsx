import React, { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  CircularProgress,
  Typography,
  Paper,
} from "@mui/material";

const UpdatePatient = () => {
  const { patient_id } = useParams(); // Get patient_id from the URL
  const [patientData, setPatientData] = useState({
    nic: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [originalData, setOriginalData] = useState(null);

  // Fetch the current data of the patient on component mount
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const patient_id = 1;
        setLoading(true);
        const response = await axiosClient.get(`/admin/patient/${patient_id}`);
        if (response.data) {
          setPatientData(response.data);
          setOriginalData(response.data); // Store the original data
        } else {
          setError("Failed to fetch patient data.");
        }
      } catch (err) {
        setError("Failed to fetch patient data.");
        console.error("Error fetching patient data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [patient_id]);

  const handleFieldFocus = (field) => {
    setPatientData({
      ...patientData,
      [field]: "", // Clear the field when focused
    });
  };

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const patient_id = 1;
    if (!patient_id) {
      setError("Patient ID is missing.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      // Send PUT request to update patient
      const response = await axiosClient.put(
        `/admin/update/patient/${patient_id}`,
        patientData
      );

      if (response.status === 200) {
        setSuccess("Patient updated successfully!");
      } else {
        setError("Failed to update patient. Please try again.");
      }
    } catch (err) {
      setError("Failed to update patient. Please try again.");
      console.error("Error updating patient:", err);
    } finally {
      setLoading(false);
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
        maxWidth: 500,
        margin: "auto",
        mt: 4,
      }}
    >
      <Typography variant="h6">Update Patient</Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TextField
            label="NIC"
            name="nic"
            variant="outlined"
            value={patientData.nic}
            onFocus={() => handleFieldFocus("nic")}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            value={patientData.firstName}
            onFocus={() => handleFieldFocus("firstName")}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            value={patientData.lastName}
            onFocus={() => handleFieldFocus("lastName")}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Gender"
            name="gender"
            variant="outlined"
            value={patientData.gender}
            onFocus={() => handleFieldFocus("gender")}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            variant="outlined"
            type="date"
            value={patientData.dateOfBirth}
            onFocus={() => handleFieldFocus("dateOfBirth")}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            value={patientData.email}
            onFocus={() => handleFieldFocus("email")}
            onChange={handleChange}
            fullWidth
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            disabled={loading}
            fullWidth
            sx={{ marginTop: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : "Update Patient"}
          </Button>
        </>
      )}

      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="primary">{success}</Typography>}
    </Box>
  );
};

export default UpdatePatient;
