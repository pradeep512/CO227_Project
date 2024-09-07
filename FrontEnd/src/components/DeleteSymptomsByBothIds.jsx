import React, { useState } from "react";
import axiosClient from "../axiosClient";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

const DeleteSymptoms = () => {
  const [patientId, setPatientId] = useState("");
  const [symptomCode, setSymptomCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!patientId || !symptomCode) {
      setError("Please enter both Patient ID and Symptom Code");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Delete symptoms data
      await axiosClient.delete(`/api/doctors/patients/${patientId}/symptoms/${symptomCode}`);
      alert("Symptoms deleted successfully.");
    } catch (err) {
      setError("Failed to delete symptoms. Please check the data and try again.");
      console.error("Error deleting symptoms:", err);
    } finally {
      setLoading(false);
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
      <TextField
        label="Enter Patient ID"
        variant="outlined"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        fullWidth
        error={Boolean(error)}
        helperText={error}
      />

      <TextField
        label="Enter Symptom Code"
        variant="outlined"
        value={symptomCode}
        onChange={(e) => setSymptomCode(e.target.value)}
        fullWidth
        error={Boolean(error)}
        helperText={error}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleDelete}
        disabled={loading}
        fullWidth
      >
        Delete Symptoms
      </Button>

      {loading && <CircularProgress />}
    </Box>
  );
};

export default DeleteSymptoms;
