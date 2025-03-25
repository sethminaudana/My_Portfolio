import React from 'react';
import { Typography, Grid, Card, CardContent, Box, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  certificationsSection: {
    padding: theme.spacing(4, 0),
  },
  certificationCard: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
  },
  logoContainer: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.grey[100], // Placeholder background
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    marginLeft:'10px'
  },
  logoImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    
  },
  details: {
    flexGrow: 1,
  },
}));

function Certifications({ certifications }) {
  const classes = useStyles();

  return (
    <Box className={classes.certificationsSection} id="certifications">
      <Typography variant="h4" gutterBottom>
        Certifications
      </Typography>
      <Grid container spacing={2}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} key={index}>
            <Card className={classes.certificationCard}>
              <Box className={classes.logoContainer}>
                {cert.logo ? (
                  <img src={cert.logo} alt={cert.name} className={classes.logoImage} />
                ) : (
                  <Typography variant="subtitle2" color="textSecondary">
                    Logo Placeholder
                  </Typography>
                )}
              </Box>
              <CardContent className={classes.details}>
                <Typography variant="h6" component="div" gutterBottom>
                  {cert.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Issued by: {cert.issuer}
                </Typography>
                {cert.date && (
                  <Typography variant="body2" color="textSecondary">
                    Issued: {cert.date}
                  </Typography>
                )}
                {cert.link && (
                  <Typography variant="body2">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      View Credential
                    </a>
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Certifications;