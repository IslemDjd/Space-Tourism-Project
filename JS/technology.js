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


  const tech1 = document.getElementById("btn-one");
  const tech2 = document.getElementById("btn-two");
  const tech3 = document.getElementById("btn-three");
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const img = document.getElementById("image");

   tech1.addEventListener('click', () => {
      name.textContent = jsonData.technology[0].name;
      description.textContent = jsonData.technology[0].description;
      img.src = jsonData.destinations[0].images.png;
  });

   tech1.addEventListener('click', () => {
      name.textContent = jsonData.technology[1].name;
      description.textContent = jsonData.technology[1].description;
      img.src = jsonData.destinations[1].images.png;
  });

   tech2.addEventListener('click', () => {
      name.textContent = jsonData.technology[2].name;
      description.textContent = jsonData.technology[2].description;
      img.src = jsonData.destinations[2].images.png;
  });