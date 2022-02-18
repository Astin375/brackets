module.exports = function check(str, bracketsConfig) {
  if(str.split('').length % 2 !== 0){
    return false;
  } else{
    return true;
  }
}
