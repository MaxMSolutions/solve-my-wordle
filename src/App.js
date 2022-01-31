import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from '../src/features/home/HomePage';
import findWords from './features/calculator/wordlefilter';
import typography from './theme/typography';
require('./assets/images/favicon.ico');

function App() {
    useEffect(() => {
        findWords();
    }, []);

    const theme = createTheme({
        palette: {
            mode: 'dark',
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
