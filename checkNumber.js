//construct an if inside the checkNumber function statement  
//that checks if the number myNumber is equal to 42. 
//If that is the case, the function must print out using console.log the word "correct".
//If myNumber is not equal to 42, the function must print out using console.log the word "incorrect".
function checkNumber(myNum)
{
    if (myNum == 42) {
    	console.log("correct");
    } else {
        console.log("incorrect");
    }
}

checkNumber(3);
checkNumber(7);
checkNumber(42);