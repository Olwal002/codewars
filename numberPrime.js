// Is a number prime?

function isPrime(num) 
{
    if (num<2) return false;

    // Loop from 2 to square root of n
    for (let i = 2; i <= Math.sqrt(num); i++) 
        // If i is a divisor of num, num is not prime
        if (num % i == 0) return false;

    return true;
}
