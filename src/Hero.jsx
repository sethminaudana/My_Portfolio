import React from 'react';
import { Typography, Button, Container, Grid , Box} from '@mui/material';
import { makeStyles } from '@mui/styles'; // For inline styles or more complex styling
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(8, 0),
  },
  heroContent: {
    textAlign: 'center',
  },
  heroTitle: {
    marginBottom: theme.spacing(2),
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <Container maxWidth="md" className={classes.heroContent}>
        <Typography variant="h4" component="h1" className={classes.heroTitle}>
          Hello, I'm Sethmina Udana
        </Typography>
        <Typography variant="h6" color="inherit" paragraph>
          I'm a passionate Fullstack Developer specializing in building modern web applications.
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'center', gap: 2, margin:'25px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EmailIcon color="inherit" fontSize="small" />
            <Typography variant="body2" color="inherit">
              sethminaudana@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PhoneIcon color="inherit" fontSize="small" />
            <Typography variant="body2" color="inherit">
              +94 703499535
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOnIcon color="inherit" fontSize="small" />
            <Typography variant="body2" color="inherit">
              Sri Lanka
            </Typography>
          </Box>
        </Box>
        
        
        <Button variant="contained" color="secondary" size="large" href='#projects'>
          View My Projects
        </Button>
      </Container>
    </div>
  );
}

export default Hero;