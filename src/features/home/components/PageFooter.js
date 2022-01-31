import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { fontWeight } from '@mui/system';

const useStyles = makeStyles({
    root: {
        marginTop: 32,
        marginBottom: 64,
    },
});

const PageFooter = ({ children }) => {
    const styles = useStyles();
    return (
        <Grid className={styles.root}>
            <Grid>
                <Typography>// MORROW SOLUTIONS 2022</Typography>
            </Grid>
            <Grid>
                <Typography>
                    WORDLE is produced by and owned Josh Wardle. This is just a silly tool for those of you who inevitably get stuck.
                </Typography>
            </Grid>
            <Grid>
                <Typography>
                    SOLVEMYWORDLE is open source! If you're interested in contributing, you can do so{' '}
                    <a style={{ color: '#b59f3b', fontWeight: '700' }} href="https://github.com/maxmsolutions/solve-my-wordle" target="_blank">
                        HERE.
                    </a>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default PageFooter;
