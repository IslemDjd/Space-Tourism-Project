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
  document.getElementById("line1").style.backgroundColor = "white";

   moon.addEventListener('click', () => {
    handleData(0);
    changeColor();
    document.getElementById("line1").style.backgroundColor = "white";
  });

  mars.addEventListener('click', () => {
    handleData(1);
    changeColor();
    document.getElementById("line2").style.backgroundColor = "white";

  });

  europa.addEventListener('click', () => {  
    handleData(2);
    changeColor();
    document.getElementById("line3").style.backgroundColor = "white";

  });

  titan.addEventListener('click', () => {
    handleData(3);
    changeColor();
    document.getElementById("line4").style.backgroundColor = "white";

  });
  

  function handleData(index){
      name.textContent = jsonData.destinations[index].name;
      description.textContent = jsonData.destinations[index].description;
      distance.textContent = jsonData.destinations[index].distance;
      travel.textContent = jsonData.destinations[index].travel;
      img.src = jsonData.destinations[index].images.png;
  }

  function changeColor(){
    document.getElementById("line1").style.backgroundColor = "transparent";
    document.getElementById("line2").style.backgroundColor = "transparent";
    document.getElementById("line3").style.backgroundColor = "transparent";
    document.getElementById("line4").style.backgroundColor = "transparent";
  }