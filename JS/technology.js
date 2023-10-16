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
  const img = document.getElementById("img");
  document.getElementById("btn-one").style.backgroundColor = "white";
  document.getElementById("btn-one").style.color = "#0b0d17";

   tech1.addEventListener('click', () => {
      handleData(0);
      changeColor();
      document.getElementById("btn-one").style.backgroundColor = "white";
      document.getElementById("btn-one").style.color = "#0b0d17";
    });
    
    tech2.addEventListener('click', () => {
      handleData(1); 
      changeColor();
      document.getElementById("btn-two").style.backgroundColor = "white";
      document.getElementById("btn-two").style.color = "#0b0d17";
    });
    
    tech3.addEventListener('click', () => {
      handleData(2);
      changeColor();
      document.getElementById("btn-three").style.backgroundColor = "white";
      document.getElementById("btn-three").style.color = "#0b0d17";
    });
    
    function handleData(index){
    name.textContent = jsonData.technology[index].name;
    description.textContent = jsonData.technology[index].description;
    img.src = jsonData.technology[index].images.portrait;
  };

  function changeColor(){
    document.getElementById("btn-one").style.backgroundColor = "#0b0d17";
    document.getElementById("btn-one").style.color = "white";
    document.getElementById("btn-two").style.backgroundColor = "#0b0d17";
    document.getElementById("btn-two").style.color = "white";
    document.getElementById("btn-three").style.backgroundColor ="#0b0d17";
    document.getElementById("btn-three").style.color = "white";
  }