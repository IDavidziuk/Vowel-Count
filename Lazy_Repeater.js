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