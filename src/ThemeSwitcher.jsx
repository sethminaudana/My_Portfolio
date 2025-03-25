import React, { useContext } from 'react';
import { IconButton, Switch} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from './ThemeContext';
import { useTheme } from '@mui/material/styles';

function ThemeSwitcher() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  

  return (
    <>
    <IconButton
      color="inherit"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
    
    </>
  );
}

export default ThemeSwitcher;