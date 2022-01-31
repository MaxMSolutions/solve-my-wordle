import React from 'react';
import { Typography } from '@mui/material';
import PagePanel from '../shared/components/PagePanel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const HomePage = () => {
    return (
        <PagePanel>
            <Typography style={{ textAlign: 'center' }} variant="h1" gutterBottom>
                SolveMyWordle
            </Typography>
            <Card variant="outlined" elevation={4}>
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography variant="body1">
                        Having trouble solving a Wordle? No problem, punch in your letters below.
                        <br />
                        <br />
                    </Typography>
                    <Typography style={{ fontSize: 11 }} color="text.secondary">
                        P.S. We won't tell anyone you needed a little help 😉.
                    </Typography>
                </CardContent>
            </Card>
        </PagePanel>
    );
};

export default HomePage;
