import React from 'react';
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  skillBarContainer: {
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.shape.borderRadius,
    height: 20, // Adjust the height of the bar as needed
    marginBottom: theme.spacing(1),
    position: 'relative',
  },
  skillBar: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    transition: 'width 0.3s ease-in-out',
  },
  skillLabel: {
    position: 'absolute',
    top: '50%',
    left: theme.spacing(1),
    transform: 'translateY(-50%)',
    color: theme.palette.text.primary,
    fontSize: '0.8rem',
  },
  percentageLabel: {
    position: 'absolute',
    top: '50%',
    right: theme.spacing(1),
    transform: 'translateY(-50%)',
    color: theme.palette.text.secondary,
    fontSize: '0.8rem',
  },
}));

const skillsData = [
    { category: 'Frontend', items: [
      { name: 'React', percentage: 90 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'HTML', percentage: 95 },
      { name: 'CSS', percentage: 80 },
      { name: 'Material UI', percentage: 88 },
      { name: 'Responsive Design', percentage: 92 },
    ]},
    { category: 'Backend', items: [
      { name: 'Node.js', percentage: 75 },
      { name: 'Express.js', percentage: 70 },
      { name: 'MongoDB', percentage: 78 },
      { name: 'REST APIs', percentage: 82 },
    ]},
    { category: 'Databases', items: [
      { name: 'PostgreSQL', percentage: 65 },
    ]},
    { category: 'Cloud', items: [
      { name: 'AWS (EC2, S3)', percentage: 60 },
    ]},
    // Add more categories and skills as needed
  ];

function SkillBar() {
  const classes = useStyles();

  return (
    <Box mb={1}>
      <Typography variant="body1" sx={{ fontWeight: 'medium', mb: 0.5 }}>
        {skillsData.category}
      </Typography>
      <Box className={classes.skillBarContainer}>
        <Box
          className={classes.skillBar}
          style={{ width: `${percentage}%` }}
        />
        <Typography className={classes.skillLabel} variant="body2">
          {name}
        </Typography>
        <Typography className={classes.percentageLabel} variant="body2">
          {percentage}%
        </Typography>
      </Box>
    </Box>
  );
}

export default SkillBar;