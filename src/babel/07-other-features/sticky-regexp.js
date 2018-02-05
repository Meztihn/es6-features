const global = /\w/g;
const sticky = /\w/y;
const string = 'Word. Another word.';

// Global will match every character while sticky will stop after first failed match
console.log('Global:', findAll(global, string));
console.log('Sticky:', findAll(sticky, string));

function findAll(regex, string) {
    const result = [];
    const nextMatch = matcher(regex, string);
    let next = nextMatch();
    while (!next.done) {
        result.push(next.value);
        next = nextMatch();
    }
    return result;
}

function matcher(regex, string) {
    return function () {
        const result = regex.exec(string);
        const done = result === null;
        return {
            done,
            value: done ? undefined : result[0]
        };
    };
}