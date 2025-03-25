import React from 'react';
import { Typography, Container, Link, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer>
      <Container maxWidth="md" sx={{ py: 2, textAlign: 'center' }}>
      
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EmailIcon color="action" fontSize="small" />
            <Link href="mailto:your.email@example.com" color="inherit" underline="hover" variant="body2">
              sethminaudana@gmail.com
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PhoneIcon color="action" fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              +94 703499535
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOnIcon color="action" fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              Kadawatha, Sri Lanka
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <Link href="https://www.linkedin.com/in/sethmina-udana-726390334/" target="_blank" rel="noopener noreferrer" color="inherit">
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link href="https://github.com/sethminaudana" target="_blank" rel="noopener noreferrer" color="inherit">
            <GitHubIcon fontSize="large" />
          </Link>
          {/* Add more links as needed */}
        </Box>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Sethmina. All rights reserved.
        </Typography>
      
      </Container>
    </footer>
  );
}

export default Footer;