var userData = [];
function UserData(name,password){
  this.name = name;
  this.password = password;

  pushUserData(this.name,this.password);
}

function pushUserData(name,password){
  userData.push(new UserData(name,password));
}