import React from 'react'
import './projects.css';
import { Box, Typography } from '@mui/material'
import Gallery from './../../gallery';
// import { Slide, Fade } from "react-awesome-reveal";


export default function projects() {
 
  return (
    // <ThemeProvider theme={theme}>
    <Box id='project' classname='mainContainerProjects' backgroundColor='#212529'>
      {/* HEADING BOX */}
      <Box sx={{ width: '100%', height: '10%', position: 'relative', pt: 30 }}>
        <Typography fontWeight='bold' variant='h1'
          sx={{
            fontSize: { lg: 150, md: 140, sm: 100, xs: 70 }, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', color: '#ABB2B9',
            position: 'absolute', top: 0, bottom: 0, opacity: '0.1'
          }}
        >
          PORTFOLIO
        </Typography>
        <Typography fontWeight='bold' variant='h3'
          sx={{
            fontSize: { lg: 50, md: 40, sm: 30, xs: 20 }, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', width: '100%',
            position: 'absolute', zIndex: '1', top: 0, bottom: 0,
          }}>
          My Work
        </Typography>
      </Box>

      <Box sx={{ width: '100%', height: '70%', pb: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '85%', display: 'flex', flexDirection: { md: 'column', lg: 'row' }, justifyContent: 'space-around', alignItems: 'center', }}>
        <Gallery/>
        </Box>
      </Box>
    </Box>
    // </ThemeProvider>
  )
}
