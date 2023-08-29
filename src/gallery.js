import React, { useState } from 'react'
import './gallery.css'
import { Box, Grid, Typography, List, Divider, Modal, ListItemText, ListItem } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from './Assets/1.png'
import image2 from './Assets/3.png'
import image3 from './Assets/2.png'
import CloseIcon from '@mui/icons-material/Close';
import { Slide, Fade } from "react-awesome-reveal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth:'100%', 
    minWidth:'75%',
    maxHeight:'90%',
    minHeight:'fitContent',
    bgcolor: '#43444D',
    border: '0.2px solid #43444D',
    boxShadow: 24,
    p: 2,
    borderRadius: 3,
    overflowY:'scroll'
};

const itemData = [
    {
        id: 1,
        imgSrc: Image,
        title: "Pandemic Control System",
        client: 'Final Year Project', 
        techno: 'React, Material UI, Firebase',
        url: 'https://pandemic-control.web.app/',
        info:` PANDEMIC SITUATION CONTROLLING SYSTEM, is a system designed to control the spread of the virus. Keeping in mind the recent 
        pandemic situation (Covid-19) of the whole world, we see that the government decided to 
        lock those areas where there was a high rate of infected people recorded, so that people 
        would not be allowed to leave those areas in order to avoid more spreading of the disease. 
        For this, the forces were handed over the job to cover those areas`
    },
    {
        id: 2,
        imgSrc: image2,
        title: "SJJ Digital Healthcare",
        client: 'SJJ', 
        techno: 'React, Material UI, AntDesign, React Redux, MySQL',
        url: 'https://adminpanel-7ebbc.web.app/',
        info: `SAIFULLAH JUNAID JAMSHED DIGITAL HEALTHCARE is one of the best digital healthcare platforms in Pakistan. 
        SJJ DIGITAL HEALTHCARE offers you to quickly reserve appointments or virtual consultations with the top doctors of Pakistan. 
        Our cooperative and incredible platform allows you to select the right physician, complete information regarding our fee schedule, 
        ratings, and appointments.`
    },
    {
        id: 3,
        imgSrc: image3,
        title: "Personal Portfolio",
        client: 'Personal', 
        techno: 'React, Material UI, Bootstrap',
        url: 'https://personal-portfolio-11607.web.app',
        info: `Adeena is a one-page resume, cv, vcard and bootstrap 5 personal portfolio react template with unique design, 
        made with precision and focus on an intuitive user experience. A design that will suit every use, and give your customers a 
        sense of true quality. The perfect personal portfolio template for beginners and professionals engineer. Designed and developed 
        keeping in mind the latest one page portfolio design standard.`
    }
];

export default function Gallery() {

    const [TempImgSrc, setTempImgSrc] = useState(' ');
    const [Title, setTitle] = useState(' ');
    const [Client, setClient] = useState(' ');
    const [Techno, setTechno] = useState(' ');
    const [Info, setInfo] = useState(' ');
    const [Url, setUrl] = useState(' ');
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const getDetails = (imgSrc, title, client, techno, info, url) => {
        setTempImgSrc(imgSrc); setTitle(title); setClient(client); setTechno(techno); setInfo(info); setUrl(url);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className='container'>
            {itemData.map((val, index) => {
                return (
                    <Fade cascade  damping={0.2}>
                    <div className='pics' key={index} onClick={() => { getDetails(val.imgSrc, val.title, val.client, val.techno, val.info, val.url) }}>
                        <Box className='imageProjectHeading'>
                        <img src={val.imgSrc} className='image' alt='projects'/>
                        <div className='txtBox'>
                            <Typography variant='h4' fontWeight={'bold'} align='center' color='#fff'>{val.title}</Typography>
                            </div>
                        </Box>
                    </div>
                    </Fade>
                )
            })}

            <Modal 
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CloseIcon className='modalCloseIcon' onClick={handleClose}/>
                    <Box sx={{ width: '100%', p:2 }}>
                        <Typography id="modal-modal-title" variant="h4" fontWeight={'bold'} align='center' color={'#fff'}>
                            {Title}
                        </Typography>
                    </Box>
                    <Box sx={{ width:'100%'}}>
                    <Grid container sx={{ width: '100%' }}>
                        <Grid item xs={12} sm={12} md={12} lg={7} xl={7} sx={{ display:'flex', justifyContent:'center', p:2 }} >
                                <img src={TempImgSrc} style={{width:'100%'}}  alt='projects'/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={5} xl={5} sx={{ display:'flex', justifyContent:'center', p:2 }} >
                               <Box sx={{width:'100%'}}>
                                <List sx={{p:0}}>
                                    <ListItem>
                                    <ListItemText primary='Project Info:' primaryTypographyProps={{fontWeight: 'bold', color:'#fff', fontSize:20}}/>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemText primary={Info} primaryTypographyProps={{color:'#fff'}}/>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemText primary='Project Details:' primaryTypographyProps={{fontWeight: 'bold',  color:'#fff', fontSize:20}}/>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemText  primary={`Client: ${Client}`} primaryTypographyProps={{color:'#fff',}}/>
                                    </ListItem>
                                    <Divider sx={{backgroundColor:'lightgray'}}/>
                                    <ListItem>
                                    <ListItemText primary={`Technologies: ${Techno}`} primaryTypographyProps={{color:'#fff'}}/>
                                    </ListItem>
                                    <Divider sx={{backgroundColor:'lightgray'}}/>
                                    <ListItem>
                                    <Typography color={'#fff'}>
                                        URL: <a style={{color:'#dc3545', fontWeight:'bold'}} href={Url}>{Url}</a>
                                    </Typography>
                                        {/* <a href='https://pandemic-control.web.app/' style={{textDecoration:'none'}}>
                                    <ListItemText primary={`URL: ${<a>{Url}</a>}`} primaryTypographyProps={{color:'#fff'}}/>
                                    </a> */}
                                    </ListItem>
                                    <Divider sx={{backgroundColor:'lightgray'}}/>
                                </List>
                               </Box>
                        </Grid>
                    </Grid>
                    </Box>

                </Box>
            </Modal>
        </Box>
    )
}
