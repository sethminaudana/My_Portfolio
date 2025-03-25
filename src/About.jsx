import React from 'react';
import { Typography, Grid, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    padding: theme.spacing(4, 0),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutSection} id="about">
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={4} textAlign="center">
          <Avatar className={classes.avatar} src="pic.jpg" alt="pic.jpg"
          sx={{width: { xs: 150, sm: 200, md: 250, lg: 300 }, // Larger sizes
        height: { xs: 150, sm: 200, md: 250, lg: 300 },
        marginTop: "25px",
        marginRight: { xs: 0, md: "35px" }, // Right margin only for medium+ screens
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.7)", }} />
        </Grid>
        <Grid item xs={12} md={8}>
          
          <Typography variant="body1" paragraph>
          🔹 BSc(Hons) IT Undergraduate | Specialization in Information Technology <br/><br/>
            Hello! I'm Sethmina, a passionate and results-oriented developer with a strong foundation in both frontend and backend technologies.
             I enjoy crafting user-friendly and efficient web applications.
          </Typography>
          <Typography variant="body1">
            I have experience in building responsive and user-friendly web applications using technologies like React, JavaScript, HTML, and CSS.
          </Typography>
          <br/>
          <Typography variant="body1" paragraph>
            On the frontend, I specialize in building engaging and responsive user interfaces using modern JavaScript frameworks like React. 
            I have experience with HTML, CSS, and styling libraries such as Material UI to create visually appealing and accessible web experiences.
          </Typography>
          <Typography variant="body1" paragraph>
            My interests also extend to the backend, where I have worked with technologies like Node.js, Express.js, SpringBoot and ASP.NET to build robust and scalable 
            server-side applications and APIs. I am also familiar with Databases like MySQL, MsSQL, Oracle and MongoDB.
          </Typography>
          <Typography variant="body1">
            Beyond coding, I am always eager to learn new technologies and stay updated with the latest trends in the web development world. 
            
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;