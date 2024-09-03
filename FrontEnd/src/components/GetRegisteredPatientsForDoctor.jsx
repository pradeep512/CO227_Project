import React, { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const DoctorPatients = () => {
  const { doctor_id } = useParams(); // Get doctor_id from the URL
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      const doctor_id = 1;
      try {
        setLoading(true);
        const response = await axiosClient.get(
          `/doctors/patients/bulk/${doctor_id}`
        );
        if (response.data) {
          setPatients(response.data);
        } else {
          setError("Failed to fetch patients data.");
        }
      } catch (err) {
        setError("Failed to fetch patients data.");
        console.error("Error fetching patients data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [doctor_id]);

  const handleRowClick = (patientId) => {
    navigate(`/patient/${patientId}`);
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
        maxWidth: 1000,
        margin: "auto",
        mt: 4,
      }}
    >
      <Typography variant="h6">Patients Registered to Doctor</Typography>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Patient ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Date of Birth</TableCell>
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
                  <TableCell>{patient.patientId}</TableCell>
                  <TableCell>{patient.firstName}</TableCell>
                  <TableCell>{patient.lastName}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>
                    {new Date(patient.dateOfBirth).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default DoctorPatients;
