const burger = document.querySelector('.burger');
const navLink = document.querySelector('.header_nav');
const header_title = document.querySelector('.header_body-h1')
const header_btn = document.getElementById("header_body-btn");

burger.addEventListener('click', openMenu);

function openMenu(){
    burger.classList.toggle ('active');
    navLink.classList.toggle('active');

    if (header_title.style.visibility === "hidden") {
        header_title.style.visibility = "visible";
      } else {
        header_title.style.visibility = "hidden";
      }

    if (header_btn.style.visibility === "hidden") {
        header_btn.style.visibility = "visible";
      } else {
        header_btn.style.visibility = "hidden";
      }
      
}
  