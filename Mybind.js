Function.prototype.myBind = function(ctx){
    let arg1 = Array.from(arguments).slice(1,arguments.length)
    const originalFunc= this;
    return( function(){
        let arg2 = Array.from(arguments)
        originalFunc.apply(ctx,arg1.concat(arg2));
    });
} 

Function.prototype.myBind = function(ctx,...arg1){
    
    const originalFunc= this;
    return( function(...arg2){
        originalFunc.call(ctx,...arg1,...arg2);
    });
} 
