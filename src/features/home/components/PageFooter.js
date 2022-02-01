import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import logo from '../../../assets/images/logo.png';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#181818',
        marginTop: 32,
        padding: 64,
        textAlign: 'center',
    },
    logo: {
        marginLeft: -4,
    },
    company: {
        marginTop: -12,
    },
    subtitle: {
        color: '#727272',
    },
});

const PageFooter = () => {
    const styles = useStyles();
    return (
        <Grid className={styles.root}>
            <Grid style={{ marginBottom: 16 }}>
                <Typography className={styles.subtitle}>
                    Wordle is produced by Josh Wardle, and we're huge fans. This is just a silly tool for those of you who inevitably get stuck.
                </Typography>
            </Grid>
            <Grid>
                <Typography className={styles.subtitle}>
                    <b>
                        SOLVEMY<span style={{ color: '#3aaf43' }}>WORDLE</span>
                    </b>{' '}
                    is open source! If you're interested in contributing, you can do so{' '}
                    <a style={{ color: '#ea9000', fontWeight: '700' }} href="https://github.com/maxmsolutions/solve-my-wordle" target="_blank">
                        HERE.
                    </a>
                </Typography>
            </Grid>

            <Grid>
                <img className={styles.logo} width={174} src={logo} alt="Morrow Solutions Logo" />
            </Grid>
            <Grid className={styles.company}>
                <Typography>
                    <span style={{ fontSize: 20, letterSpacing: 8, fontWeight: 700 }}>MORROW</span>
                    <br />
                    <span style={{ letterSpacing: 2, fontWeight: 700, letterSpacing: 5 }}>SOLUTIONS</span>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default PageFooter;
