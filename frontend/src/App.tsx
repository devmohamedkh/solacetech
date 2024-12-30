import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { MUITheme } from './utility/theme';
import Home from './pages/Home';


function App() {
  return (
    <ThemeProvider theme={MUITheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
