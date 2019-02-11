// Given an array of integers, find the sum of its elements.
function simpleArraySum(ar) {
    let sum = 0;
    ar.forEach(num => {
        sum += num
    })
    return sum;
}