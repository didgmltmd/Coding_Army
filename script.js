function User(name,password){
  this.name = name;
  this.password = password;
}

function signUpCheck(){
  let name= document.getElementById("name").value
  let password = document.getElementById("password").value
  let passwordCheck = document.getElementByID("passwordCheck").value
  let check = true;

  if(name===""){
    document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
    check = false
  }else{
    document.getElementById("nameError").innerHTML=""
  }

  if(password !== passwordCheck){
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
    check = false
  }else{
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
  }

  if(password===""){
    document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
    check = false
  }else{
    document.getElementById("passwordError").innerHTML=""
  }
  if(passwordCheck===""){
    document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
    check = false
  }else{
    document.getElementById("passwordCheckError").innerHTML=""
  }
  
  
  if(check){
    document.getElementById("nameError").innerHTML=""
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
    setTimeout(function(){
      alert("가입이 완료되었습니다.")
    },0);
    
  }

  
}