import React from 'react';
import { Typography, Grid, Paper, Chip, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CodeIcon from '@mui/icons-material/Code'; // Example MUI icon

const useStyles = makeStyles((theme) => ({
  skillsSection: {
    padding: theme.spacing(4, 0),
  },
  skillCategory: {
    marginBottom: theme.spacing(2),
  },
  skillItem: {
    padding: theme.spacing(1),
    margin: theme.spacing(0.5),
  },
}));

function Skills() {
  const classes = useStyles();
  const skills = {
    Frontend: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
      'Material UI',
      'Responsive Design',
    ],
    Backend: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'SpringBoot',
      'ASP.NET',
    ],
    Databases: [
      'MongoDB',
      'MySQL',
      'MS SQL Server',
      'SQLite',
    ],
    Cloud: [
      'AWS (EC2, S3, RDS)',
    ],
    Mobile: [
      'Kotlin',
    ],
    Other: [
      'Git',
      'CI/CD',
      'Linux',
      'Figma',

    ],
    // Add other categories and skills as needed
  };


  return (
    <div className={classes.skillsSection} id="skills">
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      {Object.keys(skills).map((category) => (
        <Box key={category} className={classes.skillCategory}>
          <Typography variant="h6" gutterBottom>
            {category}
          </Typography>
          <Grid container spacing={1}>
            {skills[category].map((skill, index) => (
              <Grid item key={index}>
                <Chip
                  icon={<CodeIcon />} // Or a relevant icon for the category
                  label={skill}
                  variant="outlined"
                  className={classes.skillItem}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </div>
  );
}

export default Skills;