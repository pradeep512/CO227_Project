import React, { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Paper,
} from "@mui/material";

const DeletePatient = () => {
  const { patient_id } = useParams(); // Get patient_id from the URL
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleDelete = async () => {
    const patient_id = 2;
    if (!patient_id) {
      setError("Patient ID is missing from the URL.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      // Send DELETE request to delete patient
      const response = await axiosClient.delete(
        `/admin/delete/patient/${patient_id}`
      );

      if (response.status === 200) {
        setSuccess("Patient deleted successfully!");
      } else {
        setError("Failed to delete patient. Please try again.");
      }
    } catch (err) {
      setError("Failed to delete patient. Please try again.");
      console.error("Error deleting patient:", err);
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
      <Typography variant="h6">Delete Patient</Typography>

      <Button
        variant="contained"
        color="error"
        onClick={handleDelete}
        disabled={loading}
        fullWidth
        sx={{ marginTop: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : "Delete Patient"}
      </Button>

      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="primary">{success}</Typography>}
    </Box>
  );
};

export default DeletePatient;
