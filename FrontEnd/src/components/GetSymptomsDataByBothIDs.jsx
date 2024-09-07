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

const PatientSymptomDataById = () => {
  const [patient, setPatient] = useState(null);
  const [symptoms, setSymptoms] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [symptomCode, setSymptomCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPatientDataById = async () => {
    if (!patientId) {
      setError("Please enter a valid Patient ID");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setPatient(null);
      setSymptoms([]);

      // Fetch patient data
      const patientResponse = await axiosClient.get(`/patients/${patientId}`);
      if (patientResponse.data) {
        setPatient(patientResponse.data);
      } else {
        setError("No patient data found.");
      }

      // Fetch symptoms by patient ID
      const symptomsResponse = await axiosClient.get(`/api/doctors/patients/${patientId}/symptoms`);
      if (symptomsResponse.data) {
        setSymptoms(symptomsResponse.data);
      } else {
        setError("No symptoms data found.");
      }
    } catch (err) {
      setError("Failed to fetch data. Please check the Patient ID and try again.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSymptomsByIdAndCode = async () => {
    if (!patientId || !symptomCode) {
      setError("Please enter both Patient ID and Symptom Code");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Fetch symptoms by patient ID and symptom code
      const symptomsResponse = await axiosClient.get(`/api/doctors/patients/${patientId}/symptoms/${symptomCode}`);
      if (symptomsResponse.data) {
        setSymptoms([symptomsResponse.data]); // Setting as an array for consistency
      } else {
        setError("No symptoms data found.");
      }
    } catch (err) {
      setError("Failed to fetch data. Please check the Patient ID and Symptom Code and try again.");
      console.error("Error fetching data:", err);
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
        label="Enter Symptom Code (optional)"
        variant="outlined"
        value={symptomCode}
        onChange={(e) => setSymptomCode(e.target.value)}
        fullWidth
      />

      <Button
        variant="contained"
        color="primary"
        onClick={fetchPatientDataById}
        disabled={loading}
        fullWidth
      >
        Get Patient Data
      </Button>

      <Button
        variant="contained"
        color="secondary"
        onClick={fetchSymptomsByIdAndCode}
        disabled={loading || !symptomCode}
        fullWidth
      >
        Get Specific Symptom Data
      </Button>

      {loading && <CircularProgress />}

      {patient && (
        <Card sx={{ width: "100%", mt: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Patient Details
            </Typography>
            <Typography>
              <strong>Patient ID:</strong> {patient.patientId}
            </Typography>
            <Typography>
              <strong>NIC:</strong> {patient.nic}
            </Typography>
            <Typography>
              <strong>First Name:</strong> {patient.firstName}
            </Typography>
            <Typography>
              <strong>Last Name:</strong> {patient.lastName}
            </Typography>
            <Typography>
              <strong>Gender:</strong> {patient.gender}
            </Typography>
            <Typography>
              <strong>Date of Birth:</strong>{" "}
              {new Date(patient.dateOfBirth).toLocaleDateString()}
            </Typography>
            <Typography>
              <strong>Email:</strong> {patient.email || "N/A"}
            </Typography>
          </CardContent>
        </Card>
      )}

      {symptoms.length > 0 && (
        <Card sx={{ width: "100%", mt: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Symptoms Details
            </Typography>
            {symptoms.map((symptom, index) => (
              <Box key={index} mb={2}>
                <Typography>
                  <strong>Symptom Code:</strong> {symptom.symptomCode}
                </Typography>
                <Typography>
                  <strong>Bilateral Lower Limb Swelling:</strong>{" "}
                  {symptom.bilateralLowerLimbSwelling ? "Yes" : "No"}
                </Typography>
                <Typography>
                  <strong>Dyspnoea:</strong> {symptom.dyspnoea ? "Yes" : "No"}
                </Typography>
                <Typography>
                  <strong>Orthopnoea:</strong>{" "}
                  {symptom.orthopnoea ? "Yes" : "No"}
                </Typography>
                <Typography>
                  <strong>Paroxysmal Nocturnal Dyspnoea:</strong>{" "}
                  {symptom.paroxysmalNocturnalDyspnoea ? "Yes" : "No"}
                </Typography>
                <Typography>
                  <strong>Fatigue:</strong> {symptom.fatigue ? "Yes" : "No"}
                </Typography>
                <Typography>
                  <strong>Doctor Recommendation:</strong>{" "}
                  {symptom.doctorRecommendation}
                </Typography>
                <Typography>
                  <strong>Symptom Date:</strong>{" "}
                  {new Date(symptom.symptomDate).toLocaleDateString()}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      )}

      {!patient && !loading && !error && (
        <Typography>No patient data available.</Typography>
      )}
    </Box>
  );
};

export default PatientSymptomDataById;
