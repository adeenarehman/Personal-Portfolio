import React from 'react'
import {Grid, Box, Typography} from '@mui/material'

export default function skills() {
  return (
<Box sx={{width:'100%', height:'100vh', backgroundColor:'#343a40', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
       {/* HEADING BOX */}
       <Box sx={{ width: '100%', height:'10%', position: 'relative' }}>
        <Typography fontWeight='bold' variant='h1'
          sx={{ fontSize: { lg: 150, md: 140, sm: 100, xs: 70 }, display:'flex', alignItems:'center', justifyContent:'center', width: '100%', color: '#ABB2B9',
           position: 'absolute', top: 0, bottom: 0, opacity: '0.1' }}
        >
          ABOUT ME
        </Typography>
        <Typography fontWeight='bold' variant='h3'
        sx={{ fontSize: { lg: 50, md: 40, sm: 30, xs: 20 }, display:'flex', alignItems:'center', justifyContent:'center', color: '#fff', width: '100%', 
        position: 'absolute', zIndex: '1',top: 0, bottom: 0, }}>
          Know Me More
          </Typography>
      </Box>
      </Box>  )
}