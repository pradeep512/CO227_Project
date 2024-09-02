// import * as React from 'react';
// import axiosClient from '../axiosClient'; // Adjust the import based on your project structure
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import AppBarGeneral from '../components/AppBarGeneral';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Mediguard
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const defaultTheme = createTheme();

// export default function RegisterPatientPage() {
//     const navigate = useNavigate(); // Create a navigate instance
//     const validate = () => {
//         let tempError = {};
//         tempError.email = values.email ? "" : "This field is required";
//         tempError.password = values.password ? (values.password.length >= 8 ? "" : "Password must be at least 8 characters") : "This field is required";
//         setErrors(tempError);
//         return Object.values(tempError).every(x => x === "");
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         const loginData = {
//             username: data.get('email'),
//             password: data.get('password'),
//         };
//         console.log("Submitting registration data:", loginData);

//         try {
//             // Fetch the ID from the /patient server address
//             // const response = await axiosClient.get('/patient');
//             // const id = Number(response.data.id); // Ensure the ID is a number

//             const id = 1;
//             if (isNaN(id)) {
//                 throw new Error("Fetched ID is not a number");
//             }

//             // Use the fetched ID in the registration POST request
//             await axiosClient.post(`/auth/register/patient/${id}`, loginData);
//             console.log("Registration successful, navigating to login page.");
//             navigate("/login"); // Use navigate to go to the login page
//         } catch (error) {
//             console.error("There was an error with the registration:", error);
//         }
//     };

//     return (
//         <div>
//             <AppBarGeneral />
//             <ThemeProvider theme={defaultTheme}>
//                 <Container component="main" maxWidth="xs">
//                     <CssBaseline />
//                     <Box
//                         sx={{
//                             marginTop: 8,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                             <LockOutlinedIcon />
//                         </Avatar>
//                         <Typography component="h1" variant="h5">
//                             Register
//                         </Typography>
//                         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="email"
//                                 label="Email Address"
//                                 name="email"
//                                 autoComplete="email"
//                                 autoFocus
//                             />
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 id="password"
//                                 autoComplete="current-password"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="remember" color="primary" />}
//                                 label="Remember me"
//                             />
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                             >
//                                 Register
//                             </Button>
//                             <Grid container>
//                                 <Grid item xs>
//                                     <Link href="#" variant="body2">
//                                         Forgot password?
//                                     </Link>
//                                 </Grid>
//                                 <Grid item>
//                                     <Link href="/login" variant="body2">
//                                         {"If you have an account? Log In"}
//                                     </Link>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     </Box>
//                     <Copyright sx={{ mt: 8, mb: 4 }} />
//                 </Container>
//             </ThemeProvider>
//         </div>
//     );
// }

import * as React from 'react';
import axiosClient from '../axiosClient'; // Adjust the import based on your project structure
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBarGeneral from '../components/AppBarGeneral';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Mediguard
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function RegisterPatientPage() {
    const navigate = useNavigate(); // Create a navigate instance
    const location = useLocation(); // Create a location instance
    const { patientId } = location.state || {}; // Extract patientId from location state

    const validate = () => {
        let tempError = {};
        tempError.email = values.email ? "" : "This field is required";
        tempError.password = values.password ? (values.password.length >= 8 ? "" : "Password must be at least 8 characters") : "This field is required";
        setErrors(tempError);
        return Object.values(tempError).every(x => x === "");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const loginData = {
            username: data.get('email'),
            password: data.get('password'),
        };
        console.log("Submitting registration data:", loginData);
        console.log("Patient ID:", patientId);

        try {
            // Use the patientId in the registration POST request
            await axiosClient.post(`/auth/register/patient/${patientId}`, loginData);
            console.log("Registration successful, navigating to login page.");
            navigate("/login"); // Use navigate to go to the login page
        } catch (error) {
            console.error("There was an error with the registration:", error);
        }
    };

    return (
        <div>
            <AppBarGeneral />
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Register
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        {"If you have an account? Log In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </div>
    );
}