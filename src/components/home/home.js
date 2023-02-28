import React from 'react'
import './home.css';
import { Box, Typography, Button } from '@mui/material'
import { TypeAnimation } from 'react-type-animation';

export default function home() {

  const HireButton = () => {
    const element = document.getElementById('contact');
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    // <Box sx={{ backgroundColor:'#000', opacity:'0.3', width:'100%', height:'91vh', position:'relative'}}>
      <Box  id='home' sx={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h5' fontWeight='bold' color='white'>Welcome</Typography>
        <TypeAnimation
          sequence={[
            "I'm Adeena Rehman.",
            2000, // Waits 1s
            "I'm a React Js Developer.",
            2000, // Waits 2s
            "I'm a Front-End Developer.",
            2000,
            () => {
              console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="div"
          speed={20}
          cursor={true}
          repeat={Infinity}
          style={{ color: 'white', fontWeight: 'bolder', fontSize:'3em' }}
        />
        <Typography variant='h5' fontWeight='bold' color='white'>Based In Karachi, Pakistan.</Typography>
        <Button variant="outlined" color='error'  size='large' onClick={()=>{HireButton()}} sx={{mt:2}} className='homeHireButton'>
          Hire Me
        </Button>
      </Box>
  )
}
