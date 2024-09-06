import React from 'react';
import AppBarGeneral from '../components/AppBarGeneral';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'; // Import Link
import '../components/styles/AboutUs.css'

const AboutPage = () => {
    return (
        <div className='backroundImage'>
            <AppBarGeneral />
            <Box sx={{display: 'flex', flexDirection:'column',  minHeight: '100vh'}}>
                <Box sx={{ width: '100%', color: 'white', height: 200, flex: 1, paddingTop: 10}}>
                    <Typography variant="body1" gutterBottom sx={{paddingTop:5, paddingLeft:3, paddingRight:3}}>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisic elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingTop:5, paddingLeft:3, paddingRight:3}}>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                </Box>
                <Box sx={{ marginTop: 4,
                    padding: 2,
                    backgroundColor: '#333',
                    }}> {/* Add background color */}
                    <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
                        <h2>Contact Information</h2>
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                        Email:{" "}
                        <Link href="mailto:info@mediguard.com" sx={{ color: "#fff" }}>
                            info@yourwebsite.com
                        </Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                        Phone: (123) 456-7890
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                        Address: 123 Main Street, Anytown, USA
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default AboutPage;
