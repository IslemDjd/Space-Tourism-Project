const pagePath = window.location.pathname;
pageName = pagePath.split('/');
pageName = pageName[pageName.length -1];
console.log(pageName);
const nm = document.getElementsByClassName(pageName)[0];
nm.style.backgroundColor = "white";
if(pageName !== "index.html"){
    const nd = document.getElementsByClassName(pageName)[1];
    nd.style.backgroundColor = "white";
}






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