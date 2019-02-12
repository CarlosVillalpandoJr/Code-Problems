// Given an array of integers, find the sum of its elements.
function simpleArraySum(ar) {
    let sum = 0;
    ar.forEach(num => {
        sum += num
    })
    return sum;
}



// Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

// compareTriplets has the following parameter(s):

// a: an array of integers representing Alice's challenge rating
// b: an array of integers representing Bob's challenge rating


function compareTriplets(a, b) {
    let resultsArray = [];
    let aScore = 0;
    let bScore = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]) {
            aScore++;
        }
        if (b[i] > a[i]) {
            bScore++;
        }
    }
    resultsArray[0] = aScore;
    resultsArray[1] = bScore;
    return resultsArray;
}


