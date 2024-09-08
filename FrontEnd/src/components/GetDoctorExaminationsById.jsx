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

const PatientExaminationDataById = () => {
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
        `/doctors/${patientId}/examines`
      );

      // Set fetched patient data
      if (patientResponse?.data) {
        setPatient(patientResponse.data);
      } else {
        setError("No patient data found.");
      }

      // Set fetched clinical data
      if (clinicalDataResponse?.data) {
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
              <strong>Patient ID:</strong> {patient.patientId || "N/A"}
            </Typography>
            <Typography>
              <strong>NIC:</strong> {patient.nic || "N/A"}
            </Typography>
            <Typography>
              <strong>First Name:</strong> {patient.firstName || "N/A"}
            </Typography>
            <Typography>
              <strong>Last Name:</strong> {patient.lastName || "N/A"}
            </Typography>
            <Typography>
              <strong>Gender:</strong> {patient.gender || "N/A"}
            </Typography>
            <Typography>
              <strong>Date of Birth:</strong>{" "}
              {patient.dateOfBirth
                ? new Date(patient.dateOfBirth).toLocaleDateString()
                : "N/A"}
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
              Examination Data
            </Typography>
            <Typography>
              <strong>Examination Code:</strong>{" "}
              {clinicalData.examinationCode || "N/A"}
            </Typography>
            <Typography>
              <strong>Tachycardia at Rest:</strong>{" "}
              {clinicalData.tachycardiaAtrest ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Hypotension:</strong>{" "}
              {clinicalData.hypotention ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Narrow Pulse Pressure:</strong>{" "}
              {clinicalData.narrowPulsePressure ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Raised Jugular Venous Pressure:</strong>{" "}
              {clinicalData.raisedJugularVenousPressure ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Displaced Apex Beat:</strong>{" "}
              {clinicalData.displacedApexBeat ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Right Ventricular Heave:</strong>{" "}
              {clinicalData.rightVenticularHeave ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Pleural Effusion:</strong>{" "}
              {clinicalData.pleuralEffusion ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Hepatomegaly:</strong>{" "}
              {clinicalData.hepatomegaly ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Gallop Rhythm on Auscultation:</strong>{" "}
              {clinicalData.gallopRhythmOnAuscultation ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Murmurs Associated with Valvular Heart Disease:</strong>{" "}
              {clinicalData.murmursAssociatedWithValvularHeartDisease
                ? "Yes"
                : "No"}
            </Typography>
            <Typography>
              <strong>Pedal and Ankle Oedema:</strong>{" "}
              {clinicalData.pedalAndAnkleOedema ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Tachypnoea:</strong>{" "}
              {clinicalData.tachypnoea ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Ascites:</strong> {clinicalData.ascites ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Examination Date:</strong>{" "}
              {clinicalData.examinationDate
                ? new Date(clinicalData.examinationDate).toLocaleDateString()
                : "N/A"}
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

export default PatientExaminationDataById;
