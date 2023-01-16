function Frame(){
  this.name = "None";
  this.first = 0;
  this.second = 0;
  this.third = 0;
  this.fourth = 0;
  this.fifth = 0;
  this.total = 0;
  this.avr = 0;
}

function Student(){
  this.base = Frame;

  this.setScore = function(){
    this.name = prompt("이름을 입력하세요.");
    this.first = parseInt(prompt("첫번째 모의고사 점수를 입력하세요."));
    this.second = parseInt(prompt("두번째 모의고사 점수를 입력하세요."));
    this.third = parseInt(prompt("세번째 모의고사 점수를 입력하세요."));
    this.fourth = parseInt(prompt("네번째 모의고사 점수를 입력하세요."));
    this.fifth = parseInt(prompt("다섯번째 모의고사 점수를 입력하세요."));
  }

  this.checkSum = function(){
    this.total = (this.first + this.second + this.third + this.fourth + this.fifth);
    this.avr = this.total/5;
  }

  this.showResult = function(){
    document.write("이름: ",this.name,"<br/>");
    document.write("모의고사 성적: ",this.first," ",this.second," ",this.third," ",this.fourth," ",this.fifth,"<br/>");
    document.write("총점: ",this.total,", 평균: ",this.avr);
  }
}

var studentInfo = [];
for(let i = 0;i<10;i++){
  studentInfo.push(new Student());
  studentInfo[i].setScore();
  studentInfo[i].checkSum();
  studentInfo[i].showResult();
  document.write("<br/>");
  document.write("<br/>");
}