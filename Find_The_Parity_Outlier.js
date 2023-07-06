function findOutlier(integers){
    let checkEven = integers.filter((el) => el % 2 === 0) 
    if (checkEven.length > 1) {
      let checkOdd = integers.filter((el) => el % 2 !== 0) 
      return checkOdd[0]
      }
    return checkEven[0]
    }