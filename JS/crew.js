
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

  crew1.addEventListener('click', () => {
      crewName.textContent = jsonData.crew[0].name;
      bio.textContent = jsonData.crew[0].bio;
      role.textContent = jsonData.crew[0].role;
      memberImage.src = jsonData.crew[0].images.png;

  });

  crew2.addEventListener('click', () => {
    crewName.textContent = jsonData.crew[1].name;
    bio.textContent = jsonData.crew[1].bio;
    role.textContent = jsonData.crew[1].role;
    memberImage.src = jsonData.crew[1].images.png;

  });

  crew3.addEventListener('click', () => {
    crewName.textContent = jsonData.crew[2].name;
    bio.textContent = jsonData.crew[2].bio;
    role.textContent = jsonData.crew[2].role;
    memberImage.src = jsonData.crew[2].images.png;

  });


  crew4.addEventListener('click', () => {
    crewName.textContent = jsonData.crew[3].name;
    bio.textContent = jsonData.crew[3].bio;
    role.textContent = jsonData.crew[3].role;
    memberImage.src = jsonData.crew[3].images.png;

  });
  