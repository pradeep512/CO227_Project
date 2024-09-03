import React, { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
import {
  Box,
  TextField, // Make sure to import TextField
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

const SearchDoctors = ({ onSelectDoctor }) => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get("/admin/doctors/bulk");
        if (response.data) {
          setDoctors(response.data);
          setFilteredDoctors(response.data);
        } else {
          setError("Failed to fetch doctors data.");
        }
      } catch (err) {
        setError("Failed to fetch doctors data.");
        console.error("Error fetching doctors data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term) {
      const filtered = doctors.filter(
        (doctor) =>
          doctor.surname.toLowerCase().includes(term) ||
          doctor.lastName.toLowerCase().includes(term) ||
          doctor.nic.toLowerCase().includes(term)
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  };

  const handleRowClick = (doctor) => {
    onSelectDoctor(doctor.doctorId, `${doctor.surname} ${doctor.lastName}`);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        label="Search by Surname, Last Name or NIC"
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
                <TableCell>Doctor ID</TableCell>
                <TableCell>Surname</TableCell>
                <TableCell>Last Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredDoctors.map((doctor) => (
                <TableRow
                  key={doctor.doctorId}
                  hover
                  onClick={() => handleRowClick(doctor)}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell>{doctor.doctorId}</TableCell>
                  <TableCell>{doctor.surname}</TableCell>
                  <TableCell>{doctor.lastName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default SearchDoctors;
