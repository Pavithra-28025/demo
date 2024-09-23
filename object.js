localStorage.setItem("username","pavi")
localStorage.setItem("password","123")

var user=localStorage.getItem("username")
var v=localStorage.getItem("password")
function objet() {
    var name=document.getElementById("user").value
    var password=document.getElementById("password").value
if(user==name && v==password){
     var name= document.getElementById('user').style.borderColor='green'
       var  password = document.getElementById('password').style.borderColor='green' 
       console.log(user==name && v==password("successful sumit")); 
    }
else if(user!=name){
    var name= document.getElementById('user').style.borderColor='red'
   var a=document.getElementById("pavi").innerHTML="user name is incorrect"
  }
  else if (v!=password){
 var password= document.getElementById('password').style.borderColor='red'
 var b=document.getElementById("yogesh").innerHTML="password is incorrect" 
  }

}

    