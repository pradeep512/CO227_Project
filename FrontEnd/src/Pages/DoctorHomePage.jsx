import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Paper } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  // Handler functions for button clicks
  const handlePrediction = () => {
    navigate("/prediction");
  };

  const handleViewPatientDetails = () => {
    navigate("/view-patient-details");
  };

  const handleSubmitPatientDetails = () => {
    navigate("/submit-patient-details");
  };

  return (
    <Box
      sx={{
        minHeight: "60vh", // Reduced the height
        background: "linear-gradient(to right, #7b1fa2, #e91e63, #f44336)",
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
          Doctor Dashboard
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
          onClick={handlePrediction}
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
          Prediction
        </Button>

        <Button
          onClick={handleViewPatientDetails}
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
          View Patient Details
        </Button>

        <Button
          onClick={handleSubmitPatientDetails}
          variant="contained"
          color="error"
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
          Submit Patient Details
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
