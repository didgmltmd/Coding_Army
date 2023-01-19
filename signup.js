import * as logIn2 from "login,js"

function signUpCheck(){
  let name= document.getElementById("name").value
  let password = document.getElementById("password").value
  let passwordCheck = document.getElementByID("passwordCheck").value

  UserData(name,password);
  alert("회원가입되었습니다.")
  window.location.href = 'index.html'
  
}