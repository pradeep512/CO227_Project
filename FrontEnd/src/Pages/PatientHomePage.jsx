import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Paper } from "@mui/material";

const PatientsHomePage = () => {
  const navigate = useNavigate();

  // Handler functions for button clicks
  const handleViewDoctorsData = () => {
    navigate("/view-doctors-data"); // Adjust the route as per your application
  };

  const handleViewOwnRecords = () => {
    navigate("/view-own-records"); // Adjust the route as per your application
  };

  return (
    <Box
      sx={{
        minHeight: "60vh", // Reduced the height
        background: "linear-gradient(to right, #7b1fa2, #e91e63, #f44336)", // Kept the same gradient for consistency
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2, // Reduced padding
      }}
    >
      <Paper
        elevation={8}
        sx={{
          padding: 2, // Reduced padding
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(5px)",
          mb: 4, // Reduced margin below
        }}
      >
        <Typography
          variant="h4" // Reduced the size of the heading
          component="h1"
          gutterBottom
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
          }}
        >
          Patient Home Page
        </Typography>
      </Paper>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2, // Reduced gap between buttons
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleViewDoctorsData}
          variant="contained"
          color="primary"
          size="medium" // Changed size from large to medium
          sx={{
            width: { xs: "100%", md: "auto" },
            padding: "8px 24px", // Reduced padding
            fontSize: "1rem", // Reduced font size
            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          View Doctors Data
        </Button>

        <Button
          onClick={handleViewOwnRecords}
          variant="contained"
          color="success"
          size="medium" // Changed size from large to medium
          sx={{
            width: { xs: "100%", md: "auto" },
            padding: "8px 24px", // Reduced padding
            fontSize: "1rem", // Reduced font size
            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          View Own Records
        </Button>
      </Box>
    </Box>
  );
};

export default PatientsHomePage;
