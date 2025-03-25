import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  progressBarContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: 4, // Adjust the height as needed
    backgroundColor: theme.palette.grey[300], // Light gray background
    zIndex: 1000, // Ensure it's above other content
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.palette.primary.main, // Your primary color
    width: '0%', // Initial width is 0
    transition: 'width 0.2s ease-in-out', // Smooth transition
  },
}));

function ProgressBar() {
  const classes = useStyles();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const currentHeight = window.pageYOffset;
      const progress = (currentHeight / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call to set the progress on load

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className={classes.progressBarContainer}>
      <div className={classes.progressBar} style={{ width: `${scrollProgress}%` }} />
    </div>
  );
}

export default ProgressBar;