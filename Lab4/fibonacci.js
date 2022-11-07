function fibonacci1(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci1(n - 1) + fibonacci1(n - 2);
}


const fibonacci =(function(n){
    let cache ={};
    return function(n){
        if(n <=1){
            return 1;
        }else{
            if(n in cache){
                return cache[n];
            }else{
                cache[n] = fibonacci(n-1) + fibonacci(n-2);
                return cache[n];
            }
        }
    }
})();

console.time('normal fib')
console.log(fibonacci1(40));
console.timeEnd('normal fib')

// console.time('memoized')
// console.log(fibonacci(40));
// console.timeEnd('memoized')