import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import Layout from './Layout';
import ProgressBar from './ProgressBar';
import ThemeProviderWrapper from './ThemeContext';
function App() {
 

  return (
    <ThemeProviderWrapper>
    <ProgressBar/>
      <Layout />
      </ThemeProviderWrapper>
  )
}

export default App
