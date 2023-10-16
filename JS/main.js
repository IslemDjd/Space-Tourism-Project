const pagePath = window.location.pathname;
pageName = pagePath.split('/');
pageName = pageName[pageName.length -1];
console.log(pageName);

if(pageName === ""){
    const ind = document.getElementById("hoverLine");
    ind.style.backgroundColor = "white";
}
else{
    const whiteLine = document.getElementsByClassName(pageName)[0];
    whiteLine.style.backgroundColor = "white";
};
 
