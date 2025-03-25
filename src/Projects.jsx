import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import projectsData from './data/projects'; // Import project data

const useStyles = makeStyles((theme) => ({
  projectsSection: {
    padding: theme.spacing(4, 0),
  },
  projectCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  projectMedia: {
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  projectContent: {
    flexGrow: 1,
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.projectsSection} id="projects">
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projectsData.map((project) => (
          <Grid item key={project.id} xs={12} md={6} lg={4}>
            <Card className={classes.projectCard}>
              <CardMedia
                className={classes.projectMedia}
                image={project.image}
                title={project.title}
              />
              <CardContent className={classes.projectContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardContent>
                <Button size="small" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </Button>
                <Button size="small" href={project.githubLink} target="_blank" rel="noopener noreferrer" sx={{ ml: 1 }}>
                  Code
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;