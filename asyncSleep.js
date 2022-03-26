//Write an async function which waits 500 milliseconds and
//then returns the uppercase of a given string.

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uppercaseString(s) {
    await sleep(500);
    return s.toUpperCase();
}

uppercaseString("edward").then(console.log);

