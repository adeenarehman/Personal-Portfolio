import React from 'react'
import './resume.css';
import { Grid, Box, Typography, LinearProgress, Chip, CardContent, Card } from '@mui/material'
import { Slide } from "react-awesome-reveal";

export default function resume() {
  return (
    <Box id='resume' classname='mainContainer' backgroundColor='#343a40'>
      {/* HEADING BOX */}
      <Box sx={{ width: '100%', height: '10%', position: 'relative', pt: 30 }}>
        <Typography fontWeight='bold' variant='h1'
          sx={{
            fontSize: { lg: 150, md: 140, sm: 100, xs: 70 }, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', color: '#ABB2B9',
            position: 'absolute', top: 0, bottom: 0, opacity: '0.1'
          }}
        >
          SUMMARY
        </Typography>
        <Typography fontWeight='bold' variant='h3'
          sx={{
            fontSize: { lg: 50, md: 40, sm: 30, xs: 20 }, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', width: '100%',
            position: 'absolute', zIndex: '1', top: 0, bottom: 0,
          }}>
          Resume
        </Typography>
      </Box>
      {/* Content Box */}
      <Box sx={{ width: '100%', height: '70%', display: 'flex', justifyContent: 'center', pb: 10 }}>
        <Box sx={{ width: '85%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', }}>
          <Grid container> {/* Experience & Education Container */}
            <Grid item sm={12} md={12} lg={6} display={'flex'} flexDirection={'column'} alignItems={'center'}> {/* Education Container */}
              
                  <Slide  cascade direction={"left"} damping={0.3}>
                <Box sx={{ width: '95%', m: 2 }}>
                  <Typography variant='h5' fontWight='bold' color='#fff'>My Education</Typography>
                  <Card sx={{ backgroundColor: '#111418', width: '100%', mt: 3, p: 1, borderRadius: 1.5 }}> {/* Masters Card */}
                    <CardContent>
                      <Chip variant='filled' color='error' label='2022 - 2024' />
                      <Typography my={2} variant='h6' fontWight='bold' color='#fff'>MBA - Management</Typography>
                      <Typography color='error'>Shaheed Zulfikar Ali Bhutto Institute of Science and Technology</Typography>
                    </CardContent>
                  </Card>
                  {/* </Slide> */}
                  {/* <Slide cascade direction={"left"} delay={1e2}> */}
                  <Card sx={{ backgroundColor: '#111418', width: '100%', mt: 3, p: 1, borderRadius: 1.5 }}> {/* Bachelors Card */}
                    <CardContent>
                      <Chip variant='filled' color='error' label='2017 - 2022' />
                      <Typography my={2} variant='h6' fontWight='bold' color='#fff'>Bachelors of Science(Computer Science)</Typography>
                      <Typography color='error'>Karachi Institute of Economics and Technology</Typography>
                    </CardContent>
                  </Card>
                </Box>
                  </Slide>
             
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} display={'flex'} flexDirection={'column'} alignItems={'center'}> {/* Experience Container */}
              <Slide cascade direction={"right"}>
                <Box sx={{ width: '95%', m: 2 }}>
                  <Typography variant='h5' fontWight='bold' color='#fff'>My Experience</Typography>
                  <Card sx={{ backgroundColor: '#111418', width: '100%', mt: 3, p: 1, borderRadius: 1.5 }}> {/* SJJ Card */}
                    <CardContent>
                      <Chip variant='filled' color='error' label='Oct 2021 - Sept 2022' />
                      <Typography my={2} variant='h6' fontWight='bold' color='#fff'>React Js Developer</Typography>
                      <Typography color='error'>SJJ Digital Healthcare</Typography>
                      <Typography my={2} variant='body1' fontWight='bold' color='#fff'>
                        •	Develop and deploy new user-facing features for the website and admin dashboard using React Js.
                      </Typography>
                      <Typography my={2} variant='body1' fontWight='bold' color='#fff'>
                        •	Building reusable components using front-end libraries for future use.
                      </Typography>
                      <Typography my={2} variant='body1' fontWight='bold' color='#fff'>
                        •	Translating designs and wireframes into high-quality code.
                      </Typography>
                      <Typography my={2} variant='body1' fontWight='bold' color='#fff'>
                        •	Working on Node Js for server & MySQL for back-end.
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Slide>
            </Grid>
          </Grid>

          <Grid container> {/* SKills Container */}
            {/* <Box sx={{ width:'90%', display:'flex', justifyContent: 'space-evenly', flexDirection: 'column',}}> */}
            <Grid container> {/* SKills Heading Container */}
              <Grid item xs={12} sm={12} md={12} lg={6} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Box sx={{ width: '95%', m: 2 }}>
                  <Typography variant='h5' fontWight='bold' color='#fff'>My Skills</Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container> {/* SKills Data Container */}
              <Grid item xs={12} sm={12} md={12} lg={6} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Box sx={{ width: '95%' }}>
                  <Slide  direction={"up"}>
                    <Box mt={3} width={'100%'}>
                      <Typography variant={'body1'} color={'#fff'} >HTML/CSS</Typography>
                      <Typography variant={'body1'} color={'#fff'} >90%</Typography>
                      <LinearProgress variant="determinate" color="error" value={90} />
                    </Box>
                  </Slide>
                  <Slide  direction={"up"} delay={1e2}>
                    <Box mt={3} width={'100%'}>
                      <Typography variant={'body1'} color={'#fff'}>React</Typography>
                      <Typography variant={'body1'} color={'#fff'}>90%</Typography>
                      <LinearProgress variant="determinate" color="error" value={90} />
                    </Box>
                  </Slide>
                  <Slide  direction={"up"} delay={1e2}>
                    <Box mt={3} width={'100%'}>
                      <Typography variant={'body1'} color={'#fff'}>React Redux</Typography>
                      <Typography variant={'body1'} color={'#fff'}>70%</Typography>
                      <LinearProgress variant="determinate" color="error" value={70} />
                    </Box>
                  </Slide>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Box sx={{ width: '95%',  }}>
                  <Slide  direction={"up"}>
                    <Box mt={3} width={'100%'}>
                      <Typography variant={'body1'} color={'#fff'}>Firebase</Typography><Typography variant={'body1'} color={'#fff'}>70%</Typography>
                      <LinearProgress variant="determinate" color="error" value={70} />
                    </Box>
                  </Slide>
                  <Slide  direction={"up"} delay={1e2}>
                    <Box mt={3} width={'100%'}>
                      <Typography variant={'body1'} color={'#fff'}>MySQL</Typography><Typography variant={'body1'} color={'#fff'}>60%</Typography>
                      <LinearProgress variant="determinate" color="error" value={60} />
                    </Box>
                  </Slide>
                  <Slide  direction={"up"} delay={1e2}>
                    <Box mt={3} width={'100%'}>
                      <Typography variant={'body1'} color={'#fff'} >NodeJS</Typography><Typography color={'#fff'}>60%</Typography>
                      <LinearProgress variant="determinate" color="error" value={60} />
                    </Box>
                  </Slide>
                </Box>
              </Grid>
            </Grid>
            {/* </Box> */}
          </Grid>
        </Box>
      </Box>
    </Box>)
}
