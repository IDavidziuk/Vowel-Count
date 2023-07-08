function makeLooper(str) {
    let i = 0;
    return () => {
      if(i === str.length) i = 0
      return str[i++]
    }
  }

//Reusable memoisation
function memo(fn) {
    const cache = new Map();
    return (x) => {
      if(!cache.has(x)) cache.set(x, fn(x));
       return  cache.get(x);
    }
  }

//The wheat/rice and chessboard problem
function squaresNeeded(grains){
    //your code here
    return Math.ceil(Math.log2(grains+1))
  }

//Replicate `new`
function nouveau (Constructor, ...args) {
    // Don't forget, unnamed arguments after Constructor may be passed in!
    const instance = Object.create(Constructor.prototype);
    const callFunction = Constructor.call(instance, ...args);
          if((typeof callFunction === 'object' || typeof callFunction === 'function') && callFunction !== null) {
            return callFunction;
          } else {
            return instance;
          }
  }