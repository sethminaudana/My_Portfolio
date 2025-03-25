import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'; // Example MUI icon

const useStyles = makeStyles((theme) => ({
  cvSection: {
    padding: theme.spacing(4, 0),
    textAlign: 'center',
  },
  cvPreviewContainer: {
    // Style for potential CV preview area (can be an iframe or a placeholder)
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[100],
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function CVSection() {
  const classes = useStyles();

  return (
    <Box className={classes.cvSection} id="cv">
      <Typography variant="h4" gutterBottom>
        My Curriculum Vitae
      </Typography>
      <Typography variant="body1" paragraph>
       Here you can preview and download my detailed CV.
      </Typography>

      <Box className={classes.cvPreviewContainer}>
       <iframe
          src="Setnmina Udana Resume.pdf"
          width="100%"
          height="400px"
          title="CV Preview"
          style={{ border: 'none' }}
        >
          <p>Your browser does not support iframes.</p>
        </iframe> 
      </Box>

      <Button
        variant="contained"
        color="primary"
        startIcon={<CloudDownloadIcon />}
        className={classes.button}
        href="Setnmina Udana Resume.pdf"
        download="Sethmina CV.pdf" // Suggested filename for download
        target="_blank" // Open in a new tab
      >
        Download CV
      </Button>

      
    </Box>
  );
}

export default CVSection;