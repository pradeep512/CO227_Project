import React, { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
import {
  Box,
  TextField, // Import TextField
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

const SearchPatients = ({ onSelectPatient }) => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get("/admin/patients/bulk");
        if (response.data) {
          setPatients(response.data);
          setFilteredPatients(response.data);
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
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term) {
      const filtered = patients.filter(
        (patient) =>
          patient.firstName.toLowerCase().includes(term) ||
          patient.lastName.toLowerCase().includes(term) ||
          patient.nic.toLowerCase().includes(term)
      );
      setFilteredPatients(filtered);
    } else {
      setFilteredPatients(patients);
    }
  };

  const handleRowClick = (patient) => {
    onSelectPatient(
      patient.patientId,
      `${patient.firstName} ${patient.lastName}`
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        label="Search by First Name, Last Name or NIC"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Patient ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>NIC</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow
                  key={patient.patientId}
                  hover
                  onClick={() => handleRowClick(patient)}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell>{patient.patientId}</TableCell>
                  <TableCell>{patient.firstName}</TableCell>
                  <TableCell>{patient.lastName}</TableCell>
                  <TableCell>{patient.nic}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default SearchPatients;
