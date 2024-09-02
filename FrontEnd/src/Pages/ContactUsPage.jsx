import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AppBarGeneral from "../components/AppBarGeneral";
import '/src/components/styles/ContactUs.css';


export default function ContactUsPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get("name");
        const email = data.get("email");
        const message = data.get("message");
        console.log({ name, email, message });
        console.log({
            name: data.get("name"),
            email: data.get("email"),
            message: data.get("message"),
        });
    };

    return (
        <div>
            <AppBarGeneral/>
            <div className="contact-us-body">
            <Grid container spacing={2} sx={{ padding: 2 }}>
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            padding: 4,
                            width: "100%",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            borderRadius: 4,
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                            sx={{ color: "#fff" }}
                        >
                            Get in Touch
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                position: "relative",
                                zIndex: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                padding: 4,
                            }}
                        >
                            <TextField
                                label="Name"
                                name="name"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    marginBottom: 2,
                                    "& .MuiInputBase-input": {
                                        color: "#fff", // Text color
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#fff", // Label color
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#fff", // Border color
                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#fff", // Border color on hover
                                    },
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderColor: "#fff", // Border color when focused
                                        },
                                }}
                                required
                            />
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    marginBottom: 2,
                                    "& .MuiInputBase-input": {
                                        color: "#fff", // Text color
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#fff", // Label color
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#fff", // Border color
                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#fff", // Border color on hover
                                    },
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderColor: "#fff", // Border color when focused
                                        },
                                }}
                                required
                            />
                            <TextField
                                label="Message"
                                name="message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                sx={{
                                    marginBottom: 2,
                                    "& .MuiInputBase-input": {
                                        color: "#fff", // Text color
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#fff", // Label color
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#fff", // Border color
                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#fff", // Border color on hover
                                    },
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderColor: "#fff", // Border color when focused
                                        },
                                }}
                                required
                            />
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            padding: 4,
                            width: "100%",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            borderRadius: 4,
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                            sx={{ color: "#fff" }}
                        >
                            Contact Information
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ color: "#fff" }}>
                            Email:{" "}
                            <a href="mailto:info@yourwebsite.com" style={{ color: "#fff" }}>
                                info@yourwebsite.com
                            </a>
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ color: "#fff" }}>
                            Phone: (123) 456-7890
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ color: "#fff" }}>
                            Address: 123 Main Street, Anytown, USA
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}
