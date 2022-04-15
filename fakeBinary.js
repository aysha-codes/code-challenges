// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

function fakeBin(x){
    let zero = /[0-4]/gm
    let one = /[5-9]/gm
    return x.replace(zero,0).replace(one,1);
  }