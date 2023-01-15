function btnClick(){
  var diceA = new Dice(parseInt((Math.random() * 6)) + 1);
  var diceB = new Dice(parseInt((Math.random() * 6)) + 1);

  document.write("A의 주사위:",diceA.num,"<br/>");
  document.write("B의 주사위:",diceB.num,"<br/>");

  if(parseInt(diceA.num)>parseInt(diceB.num)){
    document.write("A가 이겼습니다.");
  }
  else if(parseInt(diceA.num)<parseInt(diceB.num)){
    document.write("B가 이겼습니다.");
  }
  else{
    document.write("비겼습니다.")
  }
}

function Dice(num){
  this.num = num;
}