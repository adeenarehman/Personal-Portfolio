import React from "react";
import './navbar.css'
import PropTypes from "prop-types";
import {
  AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar,
  Typography, Button, useScrollTrigger, Tooltip, Fab, Fade
} from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Home from '../home/home';
import About from '../about/about';
import Resume from '../resume/resume';
import Contact from '../contact/contact';
import Projects from '../projects/projects';
import Footer from '../footer/footer';
import { color } from "@mui/system";

const drawerWidth = 240;
const navItems = ["Home", "About", "Resume", "Portfolio", "Contact"];

function ScrollTop(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trig = useScrollTrigger({
    // target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleScrollClick = () => {

    const element = document.getElementById('home');
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // console.log('anchor is: ', event.target)
    // const anchor = (event.target.viewBox='0 0 0 0' || document).querySelector(
    //   "#back-to-top-anchor"
    // );

    //   // console.log('anchor is: ', anchor)

    //   if (anchor) {
    //   anchor.scrollIntoView({
    //     block: 'center',
    //     behavior: "smooth", 
    //   });
    // }
  };

  return (
    <Fade in={trig}>
      <Box onClick={() => { handleScrollClick() }} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  );
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ my: 2, fontFamily: 'sans-serif', fontSize: '20' }}>
        Adeena Rehman
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
          // margin: "2%"
        }}
      >
        <LinkedInIcon sx={{ margin: "3%" }} />
        <GitHubIcon sx={{ margin: "3%" }} />
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const trigger = useScrollTrigger({ disableHysteresis: true });


  const HomeButton = () => {
    const element = document.getElementById('home');
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const AboutButton = () => {
    const element = document.getElementById('about');
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const ResumeButton = () => {
    const element = document.getElementById('resume');
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const ProjectButton = () => {
    const element = document.getElementById('project');
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const ContactButton = () => {
    const element = document.getElementById('contact');
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          // position="fixed"
          elevation={trigger ? 24 : 0}
          style={{
            // color: trigger ? "#fff" : "#000",
            backgroundColor: trigger ? "#000" : "transparent",
            boxShadow: trigger
              ? "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
              : undefined
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* For Large Screens */}
            <Typography
              variant="h4"
              component="div"
              fontWeight={'bold'}
              sx={{
                flexGrow: 0.4,
                display: { xs: "none", sm: "block" },
                cursor: 'pointer'
              }}
              onClick={() => { HomeButton() }}
            >
              Adeena
            </Typography>
            <Box
              sx={{
                flexGrow: 0.4,
                display: { xs: "none", sm: "block", md: "flex" },
                justifyContent: "space-evenly"
              }}
            >
              <Button className="Button" sx={{ color: '#fff' }} onClick={() => { HomeButton() }}>Home</Button>
              <Button className="Button" sx={{ color: '#fff' }} onClick={() => { AboutButton() }}>About</Button>
              <Button className="Button" sx={{ color: '#fff' }} onClick={() => { ResumeButton() }}>Resume</Button>
              <Button className="Button" sx={{ color: '#fff' }} onClick={() => { ProjectButton() }}>Projects</Button>
              <Button className="Button" sx={{ color: '#fff' }} onClick={() => { ContactButton() }}>Contact</Button>
            </Box>
            <Box
              sx={{
                flexGrow: 0.4,
                display: { xs: "none", sm: "block", md: "flex" },
                alignItems: "center",
                justifyContent: "flex-end"
                // margin: "2%"
              }}
            >
              <Tooltip arrow title="LinkedIn">
                <a href='https://www.linkedin.com/in/adeena-rehman-a78a48186/'>
                  <IconButton>
                    <LinkedInIcon className="linkedinIcon" />
                  </IconButton>
                </a>
              </Tooltip>
              <Tooltip arrow title="GitHub">
                <a href="https://github.com/adeenarehman">
                  <IconButton>
                    <GitHubIcon className="githubIcon" />
                  </IconButton>
                </a>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav"> {/* Small screen drawer*/}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            sx={{
              opacity: "0.9",
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#000",
                color: "#fff"
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        {/* <Container sx={{ maxWidth: '100%', backgroundColor:'pink' }}> */}
        <Box component="main" sx={{ width: '100%' }}>
          <Toolbar />
          <Home id='home' />
          <About id='about' />
          {/* <Skills /> */}
          <Resume id='resume' />
          <Projects id='project' />
          <Contact id='contact' />
          <Footer />
        </Box>
        {/* </Container> */}
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </React.Fragment>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


export default DrawerAppBar;
