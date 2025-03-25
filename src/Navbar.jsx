import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitcher from './ThemeSwitcher';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  return (
    <AppBar position="fixed" color="primary" sx={{ marginTop: '4px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SETHMINA UDANA
        </Typography>
        <ThemeSwitcher/>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2, ml: 2 }}>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#skills">Skills</Button>
        <Button color="inherit" href="#projects">Projects</Button>
        <Button color="inherit" href="#cv">Resume</Button> {/* Add CV link */}
        <Button color="inherit" href="#contact">Contact</Button>
        </Box>
        {/* For smaller screens, you might want a hamburger menu */}
         <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ ml: 2, display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton> 
        <Drawer
          anchor="right" // Or 'left', 'top', 'bottom'
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }} // Adjust width as needed
            role="presentation"
            onClick={toggleDrawer(false)} // Close on click outside
            onKeyDown={toggleDrawer(false)} // Close on keydown
          >
            <List>
              <ListItem button component="a" href="#about">
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component="a" href="#skills">
                <ListItemText primary="Skills" />
              </ListItem>
              <ListItem button component="a" href="#projects">
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem button component="a" href="#cv">
                <ListItemText primary="Resume" />
              </ListItem>
              <ListItem button component="a" href="#contact">
                <ListItemText primary="Contact" />
              </ListItem>
              
              <Divider />
              <br/>
              <ListItem>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    sethminaudana@gmail.com
                  </Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    +94 703499535
                  </Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    Sri Lanka
                  </Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LinkedInIcon color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    <a href='https://www.linkedin.com/in/sethmina-udana-726390334/'>Sethmina Udana</a>
                  </Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <GitHubIcon color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    <a href='https://github.com/sethminaudana'>sethminaudana</a>
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;