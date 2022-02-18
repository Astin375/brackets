module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  // работает и без этой проверки, но почему бы не избежать лишней работы
  if(arr.length % 2 !== 0){
    return false;
  } else{
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < bracketsConfig.length; j++){
      if(arr[i] === bracketsConfig[j][0] && arr[i+1] === bracketsConfig[j][1]){
        arr.splice(i, 2);
        i-=2;
      }
    }
  }
  if(arr.length === 0){
    return true
  } else{
    return false
  }
}
}