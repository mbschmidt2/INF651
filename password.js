let password;
let userPassword; 

do{ 
    password = prompt("enter a password");
    userPassword = prompt("enter the password again silly");

    if(userPassword !== password) { 
        alert("passwords do not match! Try again!!!")
    }
}
while(password !== userPassword);
