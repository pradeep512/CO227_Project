import React, { useState } from "react";
import axiosClient from "../axiosClient";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

const DeleteClinicalData = () => {
  const [patientId, setPatientId] = useState("");
  const [clinicalDataId, setClinicalDataId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!patientId || !clinicalDataId) {
      setError("Please enter both Patient ID and Clinical Data ID");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Delete clinical data
      await axiosClient.delete(`/doctors/patients/${patientId}/clinical-data/${clinicalDataId}`);
      alert("Clinical data deleted successfully.");
    } catch (err) {
      setError("Failed to delete clinical data. Please check the IDs and try again.");
      console.error("Error deleting clinical data:", err);
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
        label="Enter Clinical Data ID"
        variant="outlined"
        value={clinicalDataId}
        onChange={(e) => setClinicalDataId(e.target.value)}
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
        Delete Clinical Data
      </Button>

      {loading && <CircularProgress />}
    </Box>
  );
};

export default DeleteClinicalData;
