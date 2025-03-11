var emailArray=[];
var passwordArray=[];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun(){
    event.preventDefault();

    regBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";

    regTab.style.backgroundColor="rgb(12, 132, 189)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function loginTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";

    loginTab.style.backgroundColor="rgb(12, 132, 189)";
    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function forTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";

    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

}


function register(){
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Password don't match retype your Password.");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}
function login(){
    event.preventDefault();

    console.log("Pressed Login Submit");

    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const loginBox = document.getElementById("loginBox");
    console.log("loginBox" + loginBox);

    const loginData = {
        username: username,
        password: password
    };
    console.log("loginData" + loginData);

    console.log("username/email =" + email);
    console.log("password/password =" + password);

    if (email == ""){
        alert("Email required.");
        return ;
    }
    if (password == ""){
        alert("Password required.");
        return ;
    }

    if(password != "") {


    }
    else {
        alert(email + " yor are login Now \n welcome to our website.");

        document.getElementById("username").value ="";
        document.getElementById("password").value="";
        return ;
    }

}
function forgot(){
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }

    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value ="";
}

const loginSubmitEl = document.getElementById("loginButton");

const clickHandler = async () => {
    console.log("Login Submit click handler");

    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const loginData = {};
    loginData["username"] = email;
    loginData["password"] = password;
    console.log("LoginData" + loginData);

    try {
        const res = await fetch("http://localhost:8080/rest/login",
            {method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(loginData)});
        const json = await res.json();

        console.log("json = " + json);

        if ( json. length != 0) {
            window.location.replace("index.html");
        } else {
            console.log("Failed Login - Invalid information");
            return;
        }

        if(!res.ok) {
            return;
        }


    }
    catch(err){
        console.log(err);
    }
};

loginSubmitEl.addEventListener("click", clickHandler);