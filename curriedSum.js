// const curriedSum = function(numArgs){
//     let nums= [];
//     return (_curriedSum= function(arg){
//         nums.push(arg);
//         if(numArgs === nums.length){
//             return nums.reduce((acc,ele) => (acc+ele),0)}
//             // return nums;}
//             else{
//                     return _curriedSum;
//             }
//     });

// }


Function.prototype.curriedSum = function(numArgs){
    let nums = [];
    let originalFunc = this;
    return (function _curriedSum(arg){
        nums.push(arg);
        if(numArgs <= nums.length){
            // if(numArgs === nums.length){
            return originalFunc.apply(null, nums);
            // return originalFunc(...nums);
        } else {
            return _curriedSum;
        }
    });

}

function sum(a, b, c) {
    return a + b + c;
  }
  
  const curriedSum = sum.curriedSum(3);
  console.log(curriedSum(1)(2)(3)); // Output: 6
  