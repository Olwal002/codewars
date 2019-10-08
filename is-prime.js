//Is a number prime?

function isPrime(num) {
    if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num > 1) {
        return true;
    } else if (num == 2 || num == 3 || num == 5) { return true } else {
        return false;
    }
}