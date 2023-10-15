const pagePath = window.location.pathname;
pageName = pagePath.split('/');
pageName = pageName[pageName.length -1];
console.log(pageName);

if(pageName === ""){
    const ind = document.getElementById("hoverLine");
    ind.style.backgroundColor = "white";
}
else{
    const nm = document.getElementsByClassName(pageName)[0];
    nm.style.backgroundColor = "white";
    const nd = document.getElementsByClassName(pageName)[1];
    nd.style.backgroundColor = "white";
};


if(pageName === "technology-vehicle"){
    const btn_hover = document.getElementById("btn-one");
    btn_hover.style.color = "#0d0b17";  
}
else{
    if(pageName === "technology-spaceport"){
        const btn_hover = document.getElementById("btn-two");
        btn_hover.style.color = "#0d0b17";  
    }
    else{
        if(pageName === "technology-capsule"){
            const btn_hover = document.getElementById("btn-three");
            btn_hover.style.color = "#0d0b17";  
        }
    }
}