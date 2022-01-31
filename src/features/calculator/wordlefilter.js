import wordDb from './wordDatabase';

const findWords = () => {
    var wordLength = 5;
    var excludeChars = 'sae';
    var includeChars = 'ilt';
    var exactLetters = ['', '', '', '', 'T'];

    // GETTING INITIAL WORD LIST
    var wordSearchResults = [...new Set(wordDb)];
    var wordSearchResults = wordSearchResults.filter(w => w.length == wordLength);

    // EXCLUDE CHARS
    excludeChars = excludeChars.toUpperCase();
    for (var i = 0; i < excludeChars.length; i++) {
        var c = excludeChars.charAt(i);
        wordSearchResults = wordSearchResults.filter(a => a.toUpperCase().indexOf(c) == -1);
    }

    // INCLUDE CHARS
    includeChars = includeChars.toUpperCase();
    for (var i = 0; i < includeChars.length; i++) {
        var c = includeChars.charAt(i);
        wordSearchResults = wordSearchResults.filter(a => a.toUpperCase().indexOf(c) != -1);
    }

    // EXACT LETTERS
    for (var i = 0; i < exactLetters.length; i++) {
        var c = exactLetters[i];
        c = c.toUpperCase();
        if (c != '') wordSearchResults = wordSearchResults.filter(a => a.toUpperCase().indexOf(c) == i);
    }
    console.log(wordSearchResults);

    return wordSearchResults;
};

export default findWords;