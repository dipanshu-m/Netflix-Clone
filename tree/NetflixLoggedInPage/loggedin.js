
var img = document.getElementsByClassName("imgview");
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", clicked);
}
var playbutton = document.querySelectorAll(".play-button");
for (let i = 0; i < playbutton.length; i++) {
    playbutton[i].addEventListener("click", clicked);
}

// var imgpause= document.querySelectorAll(".player-video");

function clicked(e) {
    document.getElementById("vid-player").classList.toggle("closed");
}

window.addEventListener('mouseup', (Event) => {
    var box = document.getElementById('movie');
    if (Event.target != box && Event.target.parentNode != box) {
        box.pause();
        document.getElementById("vid-player").classList.add("closed");
    }
});

// window.addEventListener("scroll", () => {
    
// if(window.scrollY>=2) {
//     document.getElementsByClassName("header-nav")[0].classList.add("scroll");
// }
// else
// document.getElementsByClassName("header-nav")[0].classList.remove("scroll");
// });

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("header-nav")[0].classList.add("scrolled");
  } else {
    document.getElementsByClassName("header-nav")[0].classList.remove("scrolled");
  }
}


function scrolltotop() {
    window.scrollTo(0,0);
}