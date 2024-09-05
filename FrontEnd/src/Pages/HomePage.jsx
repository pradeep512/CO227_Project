import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Dashboard from "./DoctorHomePage";
import PatientsHomePage from "./PatientHomePage";
import AdminHomePage from "./AdminHomePage";
import RegisterPatientToDoctor from "../components/RegisterPatientsForDoctor";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#fff", textAlign: "center", mb: 6 }}
      >
        Welcome to the Home Page
      </Typography>

      <Grid container spacing={4} direction="column" justifyContent="center">
        <Grid item xs={12}>
          <Paper
            elevation={6}
            sx={{
              padding: 3,
              borderRadius: 3,
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(5px)",
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, color: "#fff" }}>
              Doctor Home
            </Typography>
            <Dashboard />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            elevation={6}
            sx={{
              padding: 3,
              borderRadius: 3,
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(5px)",
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, color: "#fff" }}>
              Patient Home
            </Typography>
            <PatientsHomePage />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            elevation={6}
            sx={{
              padding: 3,
              borderRadius: 3,
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(5px)",
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, color: "#fff" }}>
              Admin Home
            </Typography>
            <AdminHomePage />
            <RegisterPatientToDoctor />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
