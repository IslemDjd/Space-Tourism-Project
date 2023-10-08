const toggleButton = document.getElementsByClassName('toggle')[0];
const nav_btn = document.getElementsByClassName('navElements')[0];
var closePNG = document.getElementById("close");

toggleButton.addEventListener('click',() =>{
    nav_btn.classList.toggle('active');
    // const activeNavElements = document.getElementsByClassName('active')[0];
    // activeNavElements.style.display = "block";
    closePNG.style.display = "block";
    toggleButton.style.display = "none";

});

closePNG.addEventListener('click',() =>{
    // const activeNavElements = document.getElementsByClassName('active')[0];
    // activeNavElements.style.display = "none";
    nav_btn.classList.toggle('active');
    closePNG.style.display = "none";
    toggleButton.style.display = "block";

});