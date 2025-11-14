// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

//nav hide
let narBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");

narBar.forEach((a) => {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

//navbar toggle icon button
let navbarToggle = document.querySelector(".navbar-toggler");
let navbarToggleIcon = document.querySelector(".navbar-toggler-icon")
navbarToggle.addEventListener("click", function(){
    if(navbarToggle.body.classList.contains("collapsed")){
        navbarToggleIcon.classList.remove("fa-x")
    }
})
