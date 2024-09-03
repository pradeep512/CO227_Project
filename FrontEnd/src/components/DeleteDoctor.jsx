import React, { useState } from "react";
import axiosClient from "../axiosClient";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Paper,
} from "@mui/material";

const DeleteDoctor = () => {
  const { doctor_id } = useParams(); // Get doctor_id from the URL
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleDelete = async () => {
    const doctor_id = 1;
    if (!doctor_id) {
      setError("Doctor ID is missing from the URL.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      // Send DELETE request to delete doctor
      const response = await axiosClient.delete(
        `/admin/delete/doctor/${doctor_id}`
      );

      if (response.status === 200) {
        setSuccess("Doctor deleted successfully!");
      } else {
        setError(`Failed to delete doctor. Status code: ${response.status}`);
      }
    } catch (err) {
      if (err.response) {
        // Server responded with a status other than 2xx
        setError(
          `Failed to delete doctor. Server responded with status ${
            err.response.status
          }: ${err.response.data.message || "Unknown error"}`
        );
      } else if (err.request) {
        // Request was made but no response was received
        setError(
          "No response from the server. Please check your network connection."
        );
      } else {
        // Something happened in setting up the request
        setError(`Failed to delete doctor: ${err.message}`);
      }
      console.error("Error deleting doctor:", err);
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
      <Typography variant="h6">Delete Doctor</Typography>

      <Button
        variant="contained"
        color="error"
        onClick={handleDelete}
        disabled={loading}
        fullWidth
        sx={{ marginTop: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : "Delete Doctor"}
      </Button>

      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="primary">{success}</Typography>}
    </Box>
  );
};

export default DeleteDoctor;
