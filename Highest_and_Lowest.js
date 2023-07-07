function highAndLow(numbers){
    let arr=numbers.split(' ')
    return `${arr.sort((a,b)=>b-a)[0]} ${arr.sort((a,b)=>a-b)[0]}`
  }