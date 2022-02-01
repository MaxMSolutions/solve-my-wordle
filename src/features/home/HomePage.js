import React from 'react';
import PagePanel from '../shared/components/PagePanel';
import Solver from './components/Solver';
import PageTitle from './components/PageTitle';
import PageFooter from './components/PageFooter';

const HomePage = () => {
    return (
        <>
            <PagePanel>
                <PageTitle />
                <Solver />
            </PagePanel>
            <PageFooter />
        </>
    );
};

export default HomePage;
