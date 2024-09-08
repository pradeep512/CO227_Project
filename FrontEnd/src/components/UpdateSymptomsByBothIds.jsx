import React, { useState } from "react";
import axiosClient from "../axiosClient";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

const UpdateSymptoms = () => {
  const [patientId, setPatientId] = useState("");
  const [symptomCode, setSymptomCode] = useState("");
  const [symptomData, setSymptomData] = useState({
    bilateralLowerLimbSwelling: false,
    dyspnoea: false,
    orthopnoea: false,
    paroxysmalNocturnalDyspnoea: false,
    fatigue: false,
    doctorRecommendation: "",
    symptomDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSymptomData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!patientId || !symptomCode) {
      setError("Please enter both Patient ID and Symptom Code");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Put symptoms data
      const response = await axiosClient.put(`/api/doctors/patients/${patientId}/symptoms/${symptomCode}`, symptomData);
      if (response.data) {
        alert("Symptoms updated successfully.");
      }
    } catch (err) {
      setError("Failed to update symptoms. Please check the data and try again.");
      console.error("Error updating symptoms:", err);
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

      <TextField
        label="Doctor Recommendation"
        variant="outlined"
        name="doctorRecommendation"
        value={symptomData.doctorRecommendation}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Symptom Date"
        type="date"
        variant="outlined"
        name="symptomDate"
        value={symptomData.symptomDate}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{ shrink: true }}
      />

      {/* Additional checkboxes for other symptoms */}
      {["bilateralLowerLimbSwelling", "dyspnoea", "orthopnoea", "paroxysmalNocturnalDyspnoea", "fatigue"].map((symptom) => (
        <label key={symptom}>
          <input
            type="checkbox"
            name={symptom}
            checked={symptomData[symptom]}
            onChange={handleChange}
          />
          {symptom.replace(/([A-Z])/g, ' $1').toLowerCase()}
        </label>
      ))}

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading}
        fullWidth
      >
        Update Symptoms
      </Button>

      {loading && <CircularProgress />}
    </Box>
  );
};

export default UpdateSymptoms;
