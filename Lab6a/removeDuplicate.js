/**
 * Create a method named `removeDuplicatesAsync` 
 * which works only for
 *  Array types and removes 
 * all duplicates for any array asynchornously. 
 */

  Array.prototype.removeDuplicatesAsync =async function(){
         let arr = this;
         let newArr =[];
         arr.forEach((element) => {
            if (!newArr.includes(element)) {
                newArr.push(element);
            }
        })
        console.log(await(newArr));
     
    }
    
  
  console.log(`start`);
  [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
  console.log(`end`);