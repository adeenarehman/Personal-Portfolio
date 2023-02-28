import React from 'react'
import './contact.css';
import { Box, Typography, Stack, Divider, Tooltip, IconButton } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function contact() {
  return (
    <Box id='contact' classname='mainContainerContact' backgroundColor='#343a40'>
      {/* HEADING BOX */}
      <Box sx={{ width: '100%', height: '10%', position: 'relative', pt: 30 }}>
        <Typography fontWeight='bold' variant='h1'
          sx={{
            fontSize: { lg: 150, md: 140, sm: 100, xs: 70 }, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', color: '#ABB2B9',
            position: 'absolute', top: 0, bottom: 0, opacity: '0.1'
          }}
        >
          CONTACT
        </Typography>
        <Typography fontWeight='bold' variant='h3'
          sx={{
            fontSize: { lg: 50, md: 40, sm: 30, xs: 20 }, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', width: '100%',
            position: 'absolute', zIndex: '1', top: 0, bottom: 0,
          }}>
          Get In Touch
        </Typography>
      </Box>

      {/* Content Box */}
      <Box sx={{ width: '100%', height: '70%', pb: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '85%', display:'flex', justifyContent:'center' }}>
          <Stack width={'100%'}
            direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }}
            divider={<Divider   variant="middle" orientation={{xs:'horizontal', sm:'horizontal', md:'horizontal', lg:'vertical', xl:'veriticle'}} sx={{backgroundColor:'#FF0000', width:'0.2%'}}/>}
            spacing={2}
          >
            <Box sx={{ display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', p:2}}>
            <LocationOnIcon color='error' sx={{marginRight:'2%'}}/>
            <Typography color={'#fff'}  fontWeight='bold'>Karachi, Pakistan</Typography>
            </Box>
            <Box sx={{ display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', p:2}}>
            <CallIcon color='error' sx={{marginRight:'2%'}}/>
            <Typography color={'#fff'} fontWeight='bold'>+92 3352190817</Typography>
            </Box>
            <Box sx={{ display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', p:2}}>
            <EmailIcon color='error' sx={{marginRight:'2%'}}/>
            <Typography color={'#fff'}  fontWeight='bold'>adeenarehman17@gmail.com</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', p:2}}>
            <Typography color={'#fff'}  fontWeight='bold'>Follow Me</Typography>
            <Tooltip arrow title="LinkedIn">
              <a href='https://www.linkedin.com/in/adeena-rehman-a78a48186/'>
              <IconButton size="small">
                <LinkedInIcon className="linkedinIconContact" fontSize="small"/>
              </IconButton>
              </a>
            </Tooltip>
            <Tooltip arrow title="GitHub">
              <a href='https://github.com/adeenarehman'>
              <IconButton size="small">
                <GitHubIcon className="githubIconContact" fontSize="small"/>
              </IconButton>
              </a>
            </Tooltip>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
