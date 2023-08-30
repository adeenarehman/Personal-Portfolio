import React from 'react'
import './about.css';
import { Box, Typography, Grid, List, ListItem, Button, Divider } from '@mui/material'
import { Slide, Fade } from "react-awesome-reveal";

export default function about() {

  return (
    <Box id='about' classname='mainContainerAbout' backgroundColor='#212529'>

      {/* HEADING BOX */}
      <Box sx={{ width: '100%', height: '10%', position: 'relative', pt: 30 }}>
        <Typography fontWeight='bold' variant='h1'
          sx={{
            fontSize: { lg: 150, md: 140, sm: 100, xs: 70 }, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', color: '#ABB2B9',
            position: 'absolute', top: 0, bottom: 0, opacity: '0.1'
          }}
        >
          ABOUT ME
        </Typography>
        <Typography fontWeight='bold' variant='h3'
          sx={{
            fontSize: { lg: 50, md: 40, sm: 30, xs: 20 }, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', width: '100%',
            position: 'absolute', zIndex: '1', top: 0, bottom: 0,
          }}>
          Know Me More
        </Typography>
      </Box>

      {/* CONTENT BOX */}
      <Box sx={{ height: '70%', width: '100%', pb: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '90%', display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' } }}>
          <Grid container>
            <Grid item sm={12} xs={12} md={12} lg={8} xl={8} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Slide cascade>
              <Box sx={{ width: '95%', marginTop:'3%' }}>
                <Typography variant='h5' color='#fff' fontWeight={'bold'} >
                  I'm <spam style={{color:'#dc3545'}}>Adeena Rehman,</spam> a Web Developer
                  </Typography>
                <Typography color='grey' fontWeight={'bold'}  mt={'2%'}>
                I am an optimistic, enthusiastic and competent freelance Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly. I am a React Developer with 3 years of hands-on experience in identifying web-based user interactions along with designing & implementing highly responsive user interface components.
                  </Typography>
                  <Typography color='grey' fontWeight={'bold'}  mt={'2%'}>
                  I take my work as a Web Developer seriously and always ensure my skills are kept up to date within this rapidly changing industry.
                  </Typography>
                  <Typography color='grey' fontWeight={'bold'}  mt={'2%'}>
                  Delivering work within time and budget which meets the client’s requirements is my motto.                  </Typography>
              </Box>
              </Slide>
            </Grid>
            <Grid item sm={12} xs={12} md={12} lg={4} xl={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: '95%', marginTop:'3%' }}>
                <List component="nav" aria-label="mailbox folders">
                  <Slide damping={0.1}  direction='right'>
                  <ListItem>
                    {/* <ListItemText primary="Name: Adeena Rehman" sx={{color:'#fff', fontWeight:'bold'}}/> */}
                    <Typography color={'white'} fontWeight={'bold'}>Name: Adeena Rehman</Typography>
                  </ListItem>
                  <Divider sx={{backgroundColor:'lightgray'}} />
                  </Slide >
                  <Slide damping={0.1} direction='right'>
                  <ListItem>
                    {/* <ListItemText primary="Email: adeenarehman17@gmail.com" sx={{color:'#fff', fontWeight:'bold'}}/> */}
                    <Typography color={'white'} fontWeight={'bold'}>Email: <spam style={{color:'#dc3545', fontWeight:'bold'}}>adeenarehman17@gmail.com</spam></Typography>
                  </ListItem>
                  <Divider sx={{backgroundColor:'lightgray'}} />
                  </Slide>
                  <Slide damping={0.1} direction='right'>
                  <ListItem>
                    {/* <ListItemText primary="Location: Karachi, Pakistan" sx={{color:'#fff', fontWeight:'bold'}}/> */}
                    <Typography color={'white'} fontWeight={'bold'}>Location: Karachi Pakistan</Typography>
                  </ListItem>
                  </Slide>
                </List>
                <a href={require("../../Assets/resume.pdf")} download="Resume" style={{textDecoration:'none'}}>
                <Button variant='contained' color='error' sx={{marginLeft:'4%', backgroundColor:'#dc3545'}}>Download CV</Button>
                </a>
                {/* <Pdf filename={Resume}>
        {({toPdf, targetRef}) => (
            <Button onClick={toPdf} ref={targetRef} variant='contained' sx={{marginLeft:'4%', backgroundColor:'#dc3545'}}>Download CV</Button>
        )}
    </Pdf> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
