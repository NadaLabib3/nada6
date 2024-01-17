var arr= [
    {
    username: "user1", pass: "pass123", age: 25, gender: "male", phone: "123-456-7890"
    },
    {
    username: "user2", pass: "abc456", age: 30, gender: "female", phone: "987-654-3210"
    }
   ];
    function validate_submit(){
       var username=document.getElementById("username_signup").value;
       var pass=document.getElementById("passworddd").value;
        var age=document.getElementById("age").value;
        var phone=document.getElementById("phone").value;
       
        var gender=document.querySelector(".gender");
        var regax=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&*]).{8,12}$/  
        console.log(username)
        console.log(pass);
        console.log(age);
            if(username == "" || pass == "" || age=="")
            {
                if(regax.test(pass))
                {
                    if(5 < username.length && username.length < 15)
                    {
                        if(age >= 18 && age <= 60)
                        {
                            var input={
                                user:username,
                                pass:pass,
                                age:age,
                                phone:phone,
                                gender:gender
                            };
                            arr.push(input);
                            alert("ok soka");
                            console.log(arr);
                        }
                        else{
                            alert("AGE")
                        }
                    }
                    else{
                       alert("USER LENTHER")
                    }
                }
                else{
                    alert("BAD PASS")
                }
            }
            else{
                alert("enter date")
            }
    }
    function profile()
    { 
        
       document.getElementById("user_name").innerHTML="user:"+username
       document.getElementById("pass1").innerHTML="password:"+pass
       document.getElementById("age1").innerHTML="Age:"+age
       document.getElementById("phone_number").innerHTML="phone:"+phone
    }
        /////////////////
       function signin()
       {
        var user=document.getElementById("username").value;
        var pass=document.getElementById("pass").value;
        for(var i=0;i<arr.length;i++){
            if(arr[i].user==user&&arr[i].pass==pass){
                alert("pass")
                window.location.href="review.html"
            }
            else{
                alert("not")
            }
        }
    }
      /////////////////  
     function update()
     {
        var usernames=document.getElementById("username").value;
        var newpass=document.getElementById("passw").value;
        for(let i=0;i<arr.length;i++) {
            {
                if(arr[i].username===usernames)
                {
                    arr[i].pass=newpass;
                    alert("in pass");
                    
                    console.log(arr);
                    return true;
                }
            }
        }
        alert("user not found")   
        return false; 
    }
        
