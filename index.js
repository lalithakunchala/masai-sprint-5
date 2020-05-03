let biryani = ["https://i.imgur.com/dEGF9teb.jpg", "https://i.imgur.com/iCrxpaob.jpg","https://i.imgur.com/mgOARz8b.jpg","https://i.imgur.com/NrkqeBVb.jpg","https://i.imgur.com/MQHkfd9b.jpg","https://i.imgur.com/JqJZ6beb.jpg","https://i.imgur.com/NrkqeBVb.jpg","https://i.imgur.com/E0hWoz3b.jpg","https://i.imgur.com/Dw9VHnDb.jpg","https://i.imgur.com/50tvOKMb.jpg","https://i.imgur.com/6qAAZaTb.jpg","https://i.imgur.com/pLZSMaob.jpg","https://i.imgur.com/JdRqOYCb.jpg","https://i.imgur.com/MQHkfd9b.jpg","https://i.imgur.com/NrkqeBVb.jpg","https://i.imgur.com/4vj2b6xb.jpg","https://i.imgur.com/hSihUbSb.jpg","https://i.imgur.com/T26UJgab.jpg","https://i.imgur.com/Z5GyK7hb.jpg","https://i.imgur.com/NlgULmOb.jpg","https://i.imgur.com/tqm6wBYb.jpg","https://i.imgur.com/T26UJgab.jpg","https://i.imgur.com/dl7c2M9b.jpg","https://i.imgur.com/J1F5w8bb.jpg"];

//console.log(biryani);

var store = window.localStorage;


var reg_details = document.getElementById("reg_details");
  reg_details.addEventListener('click',function(){
    var flag = true;
    var check =JSON.parse(store.getItem("index"));
    if(check==null){
      //console.log("not enter");
      store.setItem("users",JSON.stringify([]));
      var data = JSON.parse(store.getItem("users"));
      console.log(data);
      var name = document.getElementById("reg_name");
      var password = document.getElementById("reg_password");
      var user = {username:name.value,password:password.value};
      //console.log(user);
      data.push(user);
      console.log(data);
      store.setItem("users",JSON.stringify(data));
      store.setItem("index",JSON.stringify(1));
      name.value = "";
      password.value = "";
  }
  else{
    
    var data = JSON.parse(store.getItem("users"));
      //console.log(data);
      var name = document.getElementById("reg_name");
      var password = document.getElementById("reg_password");
      for(var i=0;i<data.length; i++){
        console.log(data[i].username);
        console.log(name);
        console.log(data[i].username==name);
        if(data[i].username===name.value && data[i].password===password.value){
          console.log("user Already exists");
          flag = false;
          name.value = "";
          password.value = "";
          break;
        }
        
      }
      if(flag==true){
        var user = {username:name.value,password:password.value};
        console.log(user);
        console.log(data);
        data.push(user);
        console.log(data);
        store.setItem("users",JSON.stringify(data));
        name.value ="";
        password.value = "";
      }
      
  }
  });

var login = document.getElementById("login_details");
login.addEventListener('click',function(){
  var flag = true;
  var data = JSON.parse(store.getItem("users"));
  console.log(data);
  var name = document.getElementById("login_name");
  var password = document.getElementById("login_password");
  var name = document.getElementById("login_name");
      var password = document.getElementById("login_password");
      for(var i=0;i<data.length; i++){
        
        if(data[i].username===name.value && data[i].password===password.value){
          console.log("Login successfull");
          flag = false;
          name.value = "";
          password.value = "";
          
          break;
        }
        
      }
      if(flag==true){
        console.log("Not registered");
      }
})




