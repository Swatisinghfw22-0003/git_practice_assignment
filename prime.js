//prime num or not
let num=8;
let count=0;
for(let i=0;i<=6;i++){
if(num%i==0){
count++}
if(count==2){
console.log("prime")
}esle {
console.log("not a prime"}
}
 //a palindrome or note
let str = "naman";
let bag = "";
for(let i = str.length-1;i>=0;i--){
    bag = bag + str[i];
}
if(str === bag){
    console.log(str,"is a palindrome");
}else{
    console.log(str,"is not a palindrome");
}