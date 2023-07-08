function makeLooper(str) {
    let i = 0;
    return () => {
      if(i === str.length) i = 0
      return str[i++]
    }
  }