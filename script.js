var multiply = function (num1, num2) {
    if (typeof num1 !== "number") {
        return 'You must provide two numbers for this function.';
    } else if (typeof num2 !== "number") {
        return 'You must provide two numbers for this function.';
    }
    return num1 * num2;
};

console.log(multiply(7, 8));

console.log(multiply(50, 3));

console.log(multiply("mama", "mia"));



