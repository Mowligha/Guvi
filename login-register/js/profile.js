

var email=localStorage.getItem('email');
var password=localStorage.getItem('password');
console.log(email);
document.getElementById('email')=email;
document.getElementById('password')=password;
function logout(){
    window.localStorage.clear();

    
    window.location.replace("../login-register/login.html");    
    

}
