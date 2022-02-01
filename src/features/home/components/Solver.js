import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import findWords from '../../calculator/wordleSearchService';
import { Card, CardContent, Chip, TextField, Typography } from '@mui/material';

const useStyles = makeStyles({
    root: {
        marginTop: 8,
    },
    tbSm: {
        maxWidth: 50,
        marginRight: '2px !important',
        background: 'linear-gradient(168deg, #050605 30%, #111611 90%)',
        textTransform: 'uppercase',
        '& > .MuiFilledInput-underline .MuiInputBase-input.mui-focused::after': {
            borderBottom: '2px solid #487748',
        },
        '& input': {
            fontSize: 32,
            padding: '5px 0px',
            textAlign: 'center',
        },
    },
    tbFilled: {
        maxWidth: 50,
        marginRight: '2px !important',
        textTransform: 'uppercase',
        background: 'linear-gradient(168deg, #366a36 30%, #39974c 90%)',
        '& input': {
            fontSize: 32,
            padding: '5px 0px',
            textAlign: 'center',
            textTransform: 'uppercase',
        },
    },
    tbYellow: {
        width: '258px !important',
        textTransform: 'uppercase',
        background: 'linear-gradient(168deg, #000000 30%, #3a3318 90%)',
        '& input': {
            fontSize: 32,
            padding: '4px 16px',
            textTransform: 'uppercase',
            letterSpacing: 4,
        },
    },
    tbExclude: {
        width: '258px !important',
        textTransform: 'uppercase',
        background: 'linear-gradient(168deg, #000000 30%, #4e1717 90%)',
        '& input': {
            fontSize: 32,
            padding: '4px 16px',
            textTransform: 'uppercase',
            letterSpacing: 4,
        },
    },
    gridCenter: {
        marginTop: 16,
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    label: {
        fontSize: 18,
        fontWeight: 700,
        textTransform: 'uppercase',
        width: 258,
        textAlign: 'left',
    },
    resultsContainer: {
        marginTop: 32,
        marginBottom: 64,
        margin: 16,
    },
    resultTitle: {
        textAlign: 'center',
    },
    results: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    chip: {
        fontWeight: 700,
        fontSize: 24,
        letterSpacing: 2,
        marginRight: 8,
        marginBottom: 8,
        textTransform: 'uppercase',
        width: 120,
    },
});

const Solver = ({ children }) => {
    const styles = useStyles();
    const [exactLetters, setExactLetters] = useState(['', '', '', '', '']);
    const [classes, setClasses] = useState([styles.tbSm, styles.tbSm, styles.tbSm, styles.tbSm, styles.tbSm]);
    const [knownLetters, setKnownLetters] = useState('');
    const [excludedLetters, setExcludedLetters] = useState('');
    const [result, setResult] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        const newWords = findWords(exactLetters, knownLetters, excludedLetters);
        setClasses([calculateClass(0), calculateClass(1), calculateClass(2), calculateClass(3), calculateClass(4)]);

        if (newWords.length < 2500) setResult(newWords);
    }, [exactLetters, knownLetters, excludedLetters, setResult, setClasses]);

    const calculateClass = index => {
        if (exactLetters[index]) return styles.tbFilled;
        else return styles.tbSm;
    };

    const onExactChange = (val, index) => {
        const newExactLetters = [...exactLetters];
        newExactLetters[index] = val.target.value;
        setExactLetters(newExactLetters);
        setHasSearched(true);
    };

    const onKnownChange = val => {
        setKnownLetters(val.target.value);
        setHasSearched(true);
    };

    const onExcludedChange = val => {
        setExcludedLetters(val.target.value);
        setHasSearched(true);
    };

    return (
        <Grid className={styles.root}>
            <Grid className={styles.gridCenter}>
                <Typography variant="h4" className={styles.label}>
                    <span style={{ color: '#3aaf43' }}>Exact</span> Letters
                </Typography>
            </Grid>
            <Grid className={styles.gridCenter}>
                <TextField
                    variant="filled"
                    inputProps={{ maxLength: 1 }}
                    className={classes[0]}
                    onChangeCapture={val => {
                        onExactChange(val, 0);
                    }}
                />
                <TextField
                    variant="filled"
                    inputProps={{ maxLength: 1 }}
                    className={classes[1]}
                    onChangeCapture={val => {
                        onExactChange(val, 1);
                    }}
                />
                <TextField
                    variant="filled"
                    inputProps={{ maxLength: 1 }}
                    className={classes[2]}
                    onChangeCapture={val => {
                        onExactChange(val, 2);
                    }}
                />
                <TextField
                    variant="filled"
                    inputProps={{ maxLength: 1 }}
                    className={classes[3]}
                    onChangeCapture={val => {
                        onExactChange(val, 3);
                    }}
                />
                <TextField
                    variant="filled"
                    inputProps={{ maxLength: 1 }}
                    className={classes[4]}
                    onChangeCapture={val => {
                        onExactChange(val, 4);
                    }}
                />
            </Grid>
            <Grid className={styles.gridCenter}>
                <Typography variant="h4" className={styles.label}>
                    <span style={{ color: '#d5b032' }}>Known</span> Letters
                </Typography>
            </Grid>
            <Grid className={styles.gridCenter}>
                <TextField variant="filled" onChange={onKnownChange} inputProps={{ maxLength: 26 }} className={styles.tbYellow} />
            </Grid>
            <Grid className={styles.gridCenter}>
                <Typography variant="h4" className={styles.label}>
                    <span style={{ color: '#e63e3e' }}>Excluded</span> Letters
                </Typography>
            </Grid>
            <Grid className={styles.gridCenter}>
                <TextField variant="filled" onChange={onExcludedChange} inputProps={{ maxLength: 26 }} className={styles.tbExclude} />
            </Grid>

            <Card elevation={4} className={styles.resultsContainer}>
                <CardContent>
                    <Grid className={styles.resultTitle}>
                        {result.length > 0 && hasSearched && (
                            <Typography variant="h5" gutterBottom>
                                Give these words a try! 😊
                            </Typography>
                        )}
                        {result.length === 0 && hasSearched && (
                            <Typography variant="h5" gutterBottom>
                                😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭
                                <br /> Oh no, we couldn't find any good word matches. Maybe you have a typo?
                            </Typography>
                        )}
                        {!hasSearched && (
                            <Typography variant="h5" gutterBottom>
                                Add some letters above to see what we find!
                            </Typography>
                        )}
                    </Grid>
                    <Grid className={styles.results}>
                        {result.map((w, i) => (
                            <Chip key={i.toString()} className={styles.chip} style={{}} label={w} />
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Solver;
