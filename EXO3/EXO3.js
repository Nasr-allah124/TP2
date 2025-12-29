let email =document.getElementById("email");
let password=document.getElementById("mdp");
let emails=["nasr@gmail.com","test@.gmail.com"];
let passwords=["12345","00000"];
function login(){
    if(email.value === emails[0] || email.value===emails[1]){
        if(password.value===passwords[0]|| password.value===password[1]){
            window.location.href="conv.html";
        }
    }
    else if (email.value==="" || password.value===""){
        alert("svp remplir tous les champs")
        
    }
    else {
        alert("errr ");
    }
}