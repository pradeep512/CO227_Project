//Code to geta data by giving patent Id

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

const PatientClinicalDataById = () => {
  const [patient, setPatient] = useState(null);
  const [clinicalData, setClinicalData] = useState(null);
  const [patientId, setPatientId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch patient data and clinical data by ID
  const fetchPatientDataById = async () => {
    if (!patientId) {
      setError("Please enter a valid Patient ID");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setPatient(null);
      setClinicalData(null);

      // Fetch patient data
      const patientResponse = await axiosClient.get(`/patients/${patientId}`);
      // Fetch clinical data
      const clinicalDataResponse = await axiosClient.get(
        `/doctors/patients/${patientId}/clinical-data`
      );

      // Set fetched patient data
      if (patientResponse.data) {
        setPatient(patientResponse.data);
      } else {
        setError("No patient data found.");
      }

      // Set fetched clinical data
      if (clinicalDataResponse.data) {
        setClinicalData(clinicalDataResponse.data);
      } else {
        setError("No clinical data found.");
      }
    } catch (err) {
      setError(
        "Failed to fetch data. Please check the Patient ID and try again."
      );
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

      <Button
        variant="contained"
        color="primary"
        onClick={fetchPatientDataById}
        disabled={loading}
        fullWidth
      >
        Get Patient Data
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

      {clinicalData && (
        <Card sx={{ width: "100%", mt: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Clinical Data
            </Typography>
            <Typography>
              <strong>Clinical Data ID:</strong> {clinicalData.clinicalDataId}
            </Typography>
            <Typography>
              <strong>Diagnosis of Heart Disease:</strong>{" "}
              {clinicalData.diagnosisOfHeartDisease ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Presence of Anemia:</strong>{" "}
              {clinicalData.presenceOfAnemia ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Creatinine Phosphokinase:</strong>{" "}
              {clinicalData.creatininePhosphokinase}
            </Typography>
            <Typography>
              <strong>Diabetes:</strong> {clinicalData.diabetes ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Ejection Fraction:</strong>{" "}
              {clinicalData.ejectionFraction}%
            </Typography>
            <Typography>
              <strong>Blood Pressure:</strong> {clinicalData.bloodPressure}
            </Typography>
            <Typography>
              <strong>Platelets:</strong> {clinicalData.platelets}
            </Typography>
            <Typography>
              <strong>Serum Creatinine:</strong> {clinicalData.serumCreatinine}
            </Typography>
            <Typography>
              <strong>Serum Sodium:</strong> {clinicalData.serumSodium}
            </Typography>
            <Typography>
              <strong>Smoking:</strong> {clinicalData.smoking ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Follow-Up Period (Days):</strong>{" "}
              {clinicalData.followUpPeriodDays}
            </Typography>
          </CardContent>
        </Card>
      )}

      {!patient && !loading && !error && (
        <Typography>No patient data available.</Typography>
      )}
    </Box>
  );
};

export default PatientClinicalDataById;
