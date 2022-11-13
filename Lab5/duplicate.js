/**
 * Create a method named removeDuplicatesAsync which works only 
 * for Array types and removes all duplicates for any array asynchornously.
 */
'use strict';
Array.prototype.removeDuplicatesAsync = function(){
  let arr = this;
 let newArr= [];
 arr.forEach(function(item){
   if(!newArr.includes(item)){
    newArr.push(item);
   }
 })
  new Promise(function(resolves, rejects){
    resolves(newArr)
  }).then(console.log);
  


}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);