localStorage.setItem("root", "toor");

localStorage.setItem("signupmail", localStorage.getItem("signupmail"));
if (localStorage.getItem("signupmail") === "null") {
    document.getElementById("signupmail1").value = "";
    document.getElementById("signupmail2").value = "";
}
else {
    document.getElementById("signupmail1").value = localStorage.getItem("signupmail");
    document.getElementById("signupmail2").value = localStorage.getItem("signupmail");
}


var SignIn = document.getElementById("sign-in");
SignIn.addEventListener("click", redirectToSignInPage);

let a = 0;

function a1(e) {
    a = 1;
    redirectToSignUpPage();
}
var SignUp = document.getElementById("get-started");
SignUp.addEventListener("click", a1);

var SignUp1enter = document.getElementById("signupmail1");
SignUp1enter.addEventListener("keyup", (Event) => {
    // console.log(Event.key);
    if (Event.key === "Enter") {
        a1();
    }
});

function a2(e) {
    a = 2;
    redirectToSignUpPage();
}

var SignUp2 = document.getElementById("get-started1");
SignUp2.addEventListener("click", a2);

var SignUp2enter = document.getElementById("signupmail2");
SignUp2enter.addEventListener("keyup", (Event) => {
    // console.log(Event.key);
    if (Event.key === "Enter") {
        a2();
    }
});

function redirectToSignUpPage(e) {
    // console.log(a);
    if (a === 1) {
        localStorage.setItem("signupmail", document.getElementById("signupmail1").value);
    }
    else {
        localStorage.setItem("signupmail", document.getElementById("signupmail2").value);
    }
    open("tree/signUp/signUp.html", "_self");
}


function redirectToSignInPage(e) {
    open("tree/signIn/signin.html", "_self");
}



if (parseInt(window.innerHeight) < 550) {
    document.getElementById("head-contentid").style.marginTop = "0px";
} else {
    document.getElementById("head-contentid").style.marginTop = "none";
}

var r1 = false;
var r2 = false;
var r3 = false;
var r4 = false;
var r5 = false;
var r6 = false;

function faq_row1() {
    document.getElementById("toggle_row1").classList.toggle("active");
    document.getElementById("answershow1").classList.toggle("closed");

    r1 = !r1;
}


function faq_row2() {
    document.getElementById("toggle_row2").classList.toggle("active");
    document.getElementById("answershow2").classList.toggle("closed");
    // closerestoftheboxes();
    r2 = !r2;
}

function faq_row3() {
    document.getElementById("toggle_row3").classList.toggle("active");
    document.getElementById("answershow3").classList.toggle("closed");
    // closerestoftheboxes();
    r3 = !r3;
}


function faq_row4() {
    document.getElementById("toggle_row4").classList.toggle("active");
    document.getElementById("answershow4").classList.toggle("closed");
    // closerestoftheboxes();
    r4 = !r4;
}


function faq_row5() {
    document.getElementById("toggle_row5").classList.toggle("active");
    document.getElementById("answershow5").classList.toggle("closed");
    // closerestoftheboxes();
    r5 = !r5;
}


function faq_row6() {
    document.getElementById("toggle_row6").classList.toggle("active");
    document.getElementById("answershow6").classList.toggle("closed");
    // closerestoftheboxes();
    r6 = !r6;
}

function closerestoftheboxes(i) {
    if (r1 && i !== 1) {
        faq_row1();
    }
    if (r2 && i !== 2) {
        faq_row2();
    }
    if (r3 && i !== 3) {
        faq_row3();
    }
    if (r4 && i !== 4) {
        faq_row4();
    }
    if (r5 && i !== 5) {
        faq_row5();
    }
    if (r6 && i !== 6) {
        faq_row6();
    }
}