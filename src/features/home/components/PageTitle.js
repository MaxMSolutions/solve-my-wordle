import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        marginTop: 32,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '0px 20px',
    },
    title: {
        fontSize: '36px !important',
        fontWeight: '700 !important',
        letterSpacing: '2px !important',
        lineHeight: '32px !important',
    },
    tagline: {
        textTransform: 'uppercase',
        fontWeight: '700 !important',
    },
    left: {
        marginBottom: 8,
    },
    right: {
        marginBottom: 16,
    },
});

const PageTitle = () => {
    const styles = useStyles();
    return (
        <Grid className={styles.root}>
            <Grid className={styles.left}>
                <Typography className={styles.title}>SOLVE.</Typography>
                <Typography className={styles.title}>MY.</Typography>
                <Typography className={styles.title} style={{ color: '#3aaf43' }}>
                    WORDLE.
                </Typography>
            </Grid>
            <Grid className={styles.right}>
                <Typography variant="body1" className={styles.tagline}>
                    Let's get that wordle solved.
                </Typography>
                <Typography style={{ fontSize: 11 }} color="text.secondary">
                    P.S. We won't tell anyone you needed a little help 😉.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default PageTitle;
