/**
 * 
 *  the `isPrime` function below which is the solution of
 *  yesterday's solution for Exercise 01, create a new function named `isPrimeAsync` 
 * which use async&await keywords to resolve the `isPrime` function.
 *
 */
const isPrime = num => new Promise((resolve, reject) => {
    setTimeout(function() {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) reject({ prime: false });
        resolve({ prime: num > 1 });
    }, 500);
});


async function isPrimeAsync(num){
    try {
        let res = await isPrime(num);
        console.log(res);
    } catch (error) {
      console.log(error);
        
    }
}

console.log('start');
isPrimeAsync(11);
console.log('end');