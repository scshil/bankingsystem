// login page

document.getElementById("submit-btn").addEventListener("click",function(){
    const email=document.getElementById("login-email").value;
    const password=document.getElementById("login-password").value;
    if(email=="admin@pbank.com" &&password==12345){
        window.location.href="newpage.html";
    }
    else{
        window.alert("You enter a wrong ID or Password")
    }
})

