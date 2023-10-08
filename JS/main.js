const pagePath = window.location.pathname;
pageName = pagePath.split('/');
pageName = pageName[pageName.length -1];
const nm = document.getElementsByClassName(pageName)[0];
nm.style.backgroundColor = "white";
if(pageName !== "index.html"){
    const nd = document.getElementsByClassName(pageName)[1];
    nd.style.backgroundColor = "white";
}



console.log(pageName);

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

function pageReload(){
    window.location.reload();  
}


if(pageName === "technology-vehicle.html"){
    const btn_hover = document.getElementById("btn-one");
    btn_hover.style.color = "#0d0b17";  
}
else{
    if(pageName === "technology-spaceport.html"){
        const btn_hover = document.getElementById("btn-two");
        btn_hover.style.color = "#0d0b17";  
    }
    else{
        if(pageName === "technology-capsule.html"){
            const btn_hover = document.getElementById("btn-three");
            btn_hover.style.color = "#0d0b17";  
        }
    }
}