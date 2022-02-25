if (parseInt(window.innerWidth) > 550) {
  document.getElementById("container").classList.add("blacktranslucent");
} else
  document.getElementById("container").classList.remove("blacktranslucent");

if (parseInt(window.innerHeight) > 700) {
  document.getElementById("foot").classList.add("footer");
} else {
  document.getElementById("foot").classList.remove("footer");
}

window.addEventListener("resize", () => {
  if (parseInt(window.innerWidth) > 550) {
    document.getElementById("container").classList.add("blacktranslucent");
  } else {
    document.getElementById("container").classList.remove("blacktranslucent");
  }

  if (parseInt(window.innerHeight) > 700) {
    document.getElementById("foot").classList.add("footer");
  } else {
    document.getElementById("foot").classList.remove("footer");
  }
});

var passwordshowHide = document.getElementById("passwordinput");
var abs = document.getElementById("toggleshowhide");
function passwordToggle(e) {
  console.log(passwordshowHide.type);
  if (passwordshowHide.type === "text") {
    passwordshowHide.type = "password";
    abs.innerHTML = "SHOW";
  } else {
    passwordshowHide.type = "text";
    abs.innerHTML = "HIDE";
  }
}

const netflixhomepage = document.getElementById("netflix-logoid").addEventListener("click", () => {
  open("../../index.html", "_self");
})



//onsubmit: id, pass, or pressed sign-in button:

//pressed sign in button
var submit = document.getElementById("sign-in").addEventListener("click", signin);

//pressed enter
var emailid = document.getElementById("emailaddressinputvalue");
var uname;
var passid = document.getElementById("passwordinput");
var pass;

emailid.addEventListener("keyup", (Event) => {
  if (Event.key === "Enter") {
    uname = emailid.value;
    pass = passid.value;
    // console.log(uname);
    signin();
  }
})
document.getElementById("passwordinput").addEventListener("keyup", (Event) => {
  if (Event.key === "Enter") {
    uname = emailid.value;
    pass = passid.value;
    // console.log(pass);
    signin();
  }
})
function signin(e) {
  if (localStorage.getItem(uname) !== pass ) {
    document.getElementById("errorshow").classList.remove("closed")
  }
  else {
    open("../NetflixLoggedInPage/loggedin.html", "_self");
  }
}