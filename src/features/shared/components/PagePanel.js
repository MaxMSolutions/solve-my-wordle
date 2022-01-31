import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #282a28 30%, #393e3a 90%)',
        height: '100vh',
    },
});

const PagePanel = ({ children }) => {
    const styles = useStyles();
    return (
        <Grid className={styles.root}>
            <Grid
                sx={{
                    margin: {
                        s: '0px',
                        md: 'auto 10%',
                        lg: 'auto 20%',
                    },
                }}
            >
                {children}
            </Grid>
        </Grid>
    );
};

PagePanel.propTypes = {
    children: PropTypes.node,
};

export default PagePanel;
