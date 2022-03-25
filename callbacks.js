//Define a function called callback which receives an argument and prints it out.

function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    console.log(sentence);
}

useCallback(callback);
