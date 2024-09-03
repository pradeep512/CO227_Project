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

const UpdateDoctor = () => {
  const { doctor_id } = useParams(); // Get doctor_id from the URL
  const [doctorData, setDoctorData] = useState({
    surname: "",
    lastName: "",
    nic: "",
    registeredPatientsForDoctor: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [originalData, setOriginalData] = useState(null);

  // Fetch the current data of the doctor on component mount
  useEffect(() => {
    const fetchDoctorData = async () => {
      const doctor_id = 1;
      try {
        setLoading(true);
        const response = await axiosClient.get(`/admin/doctor/${doctor_id}`);
        if (response.data) {
          setDoctorData(response.data);
          setOriginalData(response.data); // Store the original data
        } else {
          setError("Failed to fetch doctor data.");
        }
      } catch (err) {
        setError("Failed to fetch doctor data.");
        console.error("Error fetching doctor data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorData();
  }, [doctor_id]);

  const handleFieldFocus = (field) => {
    setDoctorData({
      ...doctorData,
      [field]: "", // Clear the field when focused
    });
  };

  const handleChange = (e) => {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const doctor_id = 1;
    if (!doctor_id) {
      setError("Doctor ID is missing.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      // Send PUT request to update doctor
      const response = await axiosClient.put(
        `/admin/update/doctor/${doctor_id}`,
        doctorData
      );

      if (response.status === 200) {
        setSuccess("Doctor updated successfully!");
      } else {
        setError("Failed to update doctor. Please try again.");
      }
    } catch (err) {
      setError("Failed to update doctor. Please try again.");
      console.error("Error updating doctor:", err);
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
      <Typography variant="h6">Update Doctor</Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TextField
            label="Surname"
            name="surname"
            variant="outlined"
            value={doctorData.surname}
            onFocus={() => handleFieldFocus("surname")}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            value={doctorData.lastName}
            onFocus={() => handleFieldFocus("lastName")}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="NIC"
            name="nic"
            variant="outlined"
            value={doctorData.nic}
            onFocus={() => handleFieldFocus("nic")}
            onChange={handleChange}
            fullWidth
          />

          {/* Assuming registeredPatientsForDoctor is handled differently, as it may not be directly editable through a text field */}
          {/* Additional components or logic can be added here to manage registeredPatientsForDoctor if needed */}

          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            disabled={loading}
            fullWidth
            sx={{ marginTop: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : "Update Doctor"}
          </Button>
        </>
      )}

      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="primary">{success}</Typography>}
    </Box>
  );
};

export default UpdateDoctor;
