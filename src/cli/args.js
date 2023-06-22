const parseArgs = () => {
    let argumentsToParse = [];
    [,, ...argumentsToParse] = process.argv;

    const stringifiedArgs = argumentsToParse.reduce((acc, curr, index) => {
        return index % 2 === 0 ? acc.concat(`${curr.slice(2)} is `) : acc.concat(`${curr}, `)
    }, '');
    console.log(stringifiedArgs.slice(0, -2))
};

parseArgs();