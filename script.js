

var book = [];
function dataSet(){
  book.push = ({name:"홍길동",tel:"010-111-1111",loc:"서울 강남구"});
  book.push = ({name:"김두한",tel:"010-222-2222",loc:"서울 강서구"});
  book.push = ({name:"이춘복",tel:"010-333-3333",loc:"부산 동구"});
  book.push = ({name:"임꺽정",tel:"010-444-4444",loc:"전북 익산"});
  book.push = ({name:"신나라",tel:"010-555-5555",loc:"서울 관악구"});  
}
var searchName = prompt("찾으실 이름을 입력하세요");

dataSet();

for(key in book){
  if(book[key].name == searchName){
    document.write("이름: ",book[key].name," 전화번호:",book[key].tel," 주소:",book[key].loc);
  }
}




