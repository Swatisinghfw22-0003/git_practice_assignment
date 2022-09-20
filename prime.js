//prime num or not
function check(number){
    if(number <= 1){
      return false
    }
    for(let i =2;i<=number**0.5;i++){
        if(number%i==0){
            return false;
        }
    }
    return true
}
console.log(check(1))
