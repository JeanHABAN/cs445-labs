/**
 * Change isPrime function below that takes in a single number parameter and returns a new promise.
Using setTimeout and after 500 milliseconds, the promise will either resolove or reject.
if the input is prime number, the promise resolves with {prime: true}.
if the input is not a prime number, it rejects with {prime: false}.
 */
'use strict';
const isPrime = num => new Promise(function (resolves, rejects) {
  setTimeout(function () {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0){
        rejects({ prime: false });
    }else{
        resolves({ prime: num > 1 });
    }
    
  }, 500);
});
console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');