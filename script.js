function People(name,tel,loc){
  this.name = name;
  this.tel = tel;
  this.loc = loc;

  this.showInfor = function(){
    document.write("이름: ",this.name,"<br/>","전화번호: ",this.tel,"<br/>","주소: ",this.loc);
  }
}
var searchName = prompt("찾고자하는 이름을 입력해주세요.");

var peopleInfo = [];
peopleInfo.push(new People("홍길동","010-111-1111","서울 강남구"));
peopleInfo.push(new People("김두한","010-222-2222","서울 강서구"));
peopleInfo.push(new People("이춘복","010-333-3333","부산 동구"));
peopleInfo.push(new People("임꺽정","010-444-4444","전북 익산"));
peopleInfo.push(new People("신나라","010-555-5555","서울 관악구"));

for(let i = 0;i<5;i++){
  if(peopleInfo[i].name == searchName){
    peopleInfo[i].showInfor();
  }
}