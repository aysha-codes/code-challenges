// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let revStr = '';
    for (i = str.length-1; i >= 0; i--) {
      revStr = revStr + str[i]
    }
    return revStr
  }