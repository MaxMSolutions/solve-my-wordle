import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../src/features/home/HomePage';
import findWords from './features/calculator/wordlefilter';
require('./assets/images/favicon.ico');

function App() {
    useEffect(() => {
        findWords();
    }, []);

    return (
        <div>
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        </div>
    );
}

export default App;
