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

// Define the FetchAllDoctors component
const FetchAllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to fetch all doctors
  const fetchAllDoctors = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch data from the API
      const response = await axiosClient.get("/doctors");

      if (response.data) {
        setDoctors(response.data);
      } else {
        setError("No doctors found.");
      }
    } catch (err) {
      setError("Failed to fetch doctors. Please try again.");
      console.error("Error fetching doctors:", err);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle row click
  const handleRowClick = (doctorId) => {
    navigate(`/findbydoctorId?doctorId=${doctorId}`);
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
      {/* Button to fetch all doctors */}
      <Button
        variant="contained"
        color="primary"
        onClick={fetchAllDoctors}
        disabled={loading}
        fullWidth
        sx={{ marginBottom: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : "Fetch All Doctors"}
      </Button>

      {/* Display error message if any */}
      {error && (
        <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
          {error}
        </Typography>
      )}

      {/* Display doctors in a table if available */}
      {doctors.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Doctor ID</TableCell>
                <TableCell align="center">Surname</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">NIC</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctors.map((doctor) => (
                <TableRow
                  key={doctor.doctorId}
                  hover
                  onClick={() => handleRowClick(doctor.doctorId)}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell align="center">{doctor.doctorId}</TableCell>
                  <TableCell align="center">{doctor.surname}</TableCell>
                  <TableCell align="center">{doctor.lastName}</TableCell>
                  <TableCell align="center">{doctor.nic}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Show message when no doctors are available */}
      {doctors.length === 0 && !loading && !error && (
        <Typography variant="body2">No doctors available.</Typography>
      )}
    </Box>
  );
};

export default FetchAllDoctors;
