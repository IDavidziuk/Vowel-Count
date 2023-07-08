function cache(func) {
    // do your magic here
    const cache = new Map
    return (...args) => {
      const arg = JSON.stringify(args)
     if (!cache.has(arg)) {
      let result = func.apply(this, args)
      cache.set(arg, result)
      return result
      }
      return cache.get(arg)
    }
  }