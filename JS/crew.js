
let jsonData;


if (typeof window === 'undefined') {
  // This is the Node.js environment
  const fs = require('fs');
  const path = require('path'); // Import the 'path' module
  
  const dataFilePath = path.resolve(__dirname, 'data.json');
  
  fs.promises.readFile(dataFilePath, 'utf8')
  .then(data => {
      const jsonData = JSON.parse(data);
      console.log(jsonData.destinations);
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });
  } else {
    // This is the web browser environment
    fetch('JS/data.json')
    .then(response => {
      if (!response.ok) {
        throw  Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      jsonData = data;
      console.log(data.destinations);
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });
  }
  
  const crew1 = document.getElementById("crew1");
  const crew2 = document.getElementById("crew2");
  const crew3 = document.getElementById("crew3");
  const crew4 = document.getElementById("crew4");
  const crewName = document.getElementById("memberName");
  const bio = document.getElementById("bio");
  const role = document.getElementById("role");
  const memberImage = document.getElementById("crewImg");
  document.getElementById("crew-commander").style.backgroundColor = "white";

  crew1.addEventListener('click', () => {
    handleData(0);
    changeColor();
    document.getElementById("crew-commander").style.backgroundColor = "white";
  });

  crew2.addEventListener('click', () => {
    handleData(1);
    changeColor();
    document.getElementById("crew-specialist").style.backgroundColor = "white";
  });

  crew3.addEventListener('click', () => {
    handleData(2);
    changeColor();
    document.getElementById("crew-pilot").style.backgroundColor = "white";
  });

  crew4.addEventListener('click', () => {
    handleData(3);
    changeColor();
    document.getElementById("crew-engineer").style.backgroundColor = "white";
  });

  function handleData(index){
    crewName.textContent = jsonData.crew[index].name;
    bio.textContent = jsonData.crew[index].bio;
    role.textContent = jsonData.crew[index].role;
    memberImage.src = jsonData.crew[index].images.png;
  }

  function changeColor(){
    document.getElementById("crew-commander").style.backgroundColor = "gray";
    document.getElementById("crew-specialist").style.backgroundColor = "gray";
    document.getElementById("crew-pilot").style.backgroundColor = "gray";
    document.getElementById("crew-engineer").style.backgroundColor = "gray";
  }
  