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


  const moon = document.getElementById("moon");
  const mars = document.getElementById("mars");
  const europa = document.getElementById("europa");
  const titan = document.getElementById("titan");
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const distance = document.getElementById("distance");
  const travel = document.getElementById("travel");
  const img = document.getElementById("image");

   moon.addEventListener('click', () => {
      name.textContent = jsonData.destinations[0].name;
      description.textContent = jsonData.destinations[0].description;
      distance.textContent = jsonData.destinations[0].distance;
      travel.textContent = jsonData.destinations[0].travel;
      img.src = jsonData.destinations[0].images.png;
  });

  mars.addEventListener('click', () => {
      name.textContent = jsonData.destinations[1].name;
      description.textContent = jsonData.destinations[1].description;
      distance.textContent = jsonData.destinations[1].distance;
      travel.textContent = jsonData.destinations[1].travel;
      img.src = jsonData.destinations[1].images.png;

  });

  europa.addEventListener('click', () => {  
      name.textContent = jsonData.destinations[2].name;
      description.textContent = jsonData.destinations[2].description;
      distance.textContent = jsonData.destinations[2].distance;
      travel.textContent = jsonData.destinations[2].travel;
      img.src = jsonData.destinations[2].images.png;

  });

  titan.addEventListener('click', () => {
      name.textContent = jsonData.destinations[3].name;
      description.textContent = jsonData.destinations[3].description;
      distance.textContent = jsonData.destinations[3].distance;
      travel.textContent = jsonData.destinations[3].travel;
      img.src = jsonData.destinations[3].images.png;

  });
  