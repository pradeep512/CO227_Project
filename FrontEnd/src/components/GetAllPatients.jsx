import React, { useState } from "react";
import axiosClient from "../axiosClient";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// Define the FetchAllPatients component
const FetchAllPatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to fetch all patients
  const fetchAllPatients = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch data from the API
      const response = await axiosClient.get("/admin/patients/bulk");

      if (response.data) {
        setPatients(response.data);
      } else {
        setError("No patients found.");
      }
    } catch (err) {
      setError("Failed to fetch patients. Please try again.");
      console.error("Error fetching patients:", err);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle row click
  const handleRowClick = (patientId) => {
    navigate(`/findbypatientId?patientId=${patientId}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 3,
        maxWidth: 800,
        margin: "auto",
        mt: 4,
      }}
    >
      {/* Button to fetch all patients */}
      <Button
        variant="contained"
        color="primary"
        onClick={fetchAllPatients}
        disabled={loading}
        fullWidth
        sx={{ marginBottom: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : "Fetch All Patients"}
      </Button>

      {/* Display error message if any */}
      {error && (
        <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
          {error}
        </Typography>
      )}

      {/* Display patients in a table if available */}
      {patients.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Patient ID</TableCell>
                <TableCell align="center">NIC</TableCell>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Date of Birth</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient) => (
                <TableRow
                  key={patient.patientId}
                  hover
                  onClick={() => handleRowClick(patient.patientId)}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell align="center">{patient.patientId}</TableCell>
                  <TableCell align="center">{patient.nic}</TableCell>
                  <TableCell align="center">{patient.firstName}</TableCell>
                  <TableCell align="center">{patient.lastName}</TableCell>
                  <TableCell align="center">{patient.gender}</TableCell>
                  <TableCell align="center">
                    {new Date(patient.dateOfBirth).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Show message when no patients are available */}
      {patients.length === 0 && !loading && !error && (
        <Typography variant="body2">No patients available.</Typography>
      )}
    </Box>
  );
};

export default FetchAllPatients;
