import React, { useState } from "react";
import axiosClient from "../axiosClient";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

const DeleteExamination = () => {
  const [patientId, setPatientId] = useState("");
  const [examinationCode, setExaminationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!patientId || !examinationCode) {
      setError("Please enter both Patient ID and Examination Code");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Delete doctor examination
      await axiosClient.delete(`/doctors/{patientId}/examines/${examinationCode}`);
      alert("Examination deleted successfully.");
    } catch (err) {
      setError("Failed to delete examination. Please check the IDs and try again.");
      console.error("Error deleting examination:", err);
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
        label="Enter Examination Code"
        variant="outlined"
        value={examinationCode}
        onChange={(e) => setExaminationCode(e.target.value)}
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
        Delete Examination
      </Button>

      {loading && <CircularProgress />}
    </Box>
  );
};

export default DeleteExamination;
