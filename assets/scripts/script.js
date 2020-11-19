function hello(){
    var name=document.getElementById("name").value;
    document.getElementById("friendName").innerHTML=String(name).replace(/[^\w. ]/gi,'');
  }