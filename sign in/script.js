form = document.getElementById("signinform")
username = document.getElementById("username")
password = document.getElementById("password")
submit = document.getElementById("submit")
errormsg = document.getElementById("alert")

signinform.addEventListener('submit', (e)=>{
    if(username.value != "user123" || password.value != "cheesecake") {
        e.preventDefault();
        errormsg.innerHTML = "Please enter the correct password."
    }
    else{
        errormsg.innerHTML = ""
    }
}

)