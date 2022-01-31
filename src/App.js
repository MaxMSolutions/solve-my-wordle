import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from '../src/features/home/HomePage';
import typography from './theme/typography';
require('./assets/images/favicon.ico');

function App() {
    const theme = createTheme({
        palette: {
            mode: 'dark',
            secondary: { main: '#3aaf43' },
            primary: { main: '#3aaf43' },
            background: {
                default: '#111111',
            },
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    ...typography,
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
