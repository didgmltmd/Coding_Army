var num = parseInt(prompt("숫자를 입력하세요."));
var sum = 1;
function factorial(iNum){
  sum *= iNum;
  if(iNum>1){
    factorial(iNum-1);
  }
}
factorial(num);
document.write(num,"! = ",sum);