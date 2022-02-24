var signupmail=localStorage.getItem("signupmail");
var mail=document.getElementById("entermailid");
mail.value=signupmail;

document.addEventListener("keyup",(Event) => {
    if(Event.key==="Enter") {
        signupmail=mail.value;
        localStorage.setItem("signupmail", signupmail);
        submit();
    }
})

function submit() {
    var password=document.getElementById("password").value;
    console.log(password);
    localStorage.setItem(signupmail, password);
    
}

var homepage = document.getElementById("netflixLogo").addEventListener("click", () => {
    open("../../../index.html", "_self");
})

var nextstep = document.getElementById("nextid").addEventListener("click", () => {
    open("../../NetflixLoggedInPage/loggedin.html", "_self");
})