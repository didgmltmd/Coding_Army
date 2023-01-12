function printFruit(){
  for(var i in arguments){
    if(i == (arguments.length - 1)){
      document.write(arguments[i]);
    }
    else{
      document.write(arguments[i],", ");
    }
  }
}

printFruit("hello","apple","banana","pineapple");