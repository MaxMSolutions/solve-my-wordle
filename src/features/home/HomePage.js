import React from 'react';
import PagePanel from '../shared/components/PagePanel';
import Solver from './components/Solver';
import PageTitle from './components/PageTitle';

const HomePage = () => {
    return (
        <PagePanel>
            <PageTitle />
            <Solver />
        </PagePanel>
    );
};

export default HomePage;
