let myImage = document.querySelector('img');

myImage.onclick = function() { /*Funcion para cambiar imagen */
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lucasbueno.jpg') {
        myImage.setAttribute('src','images/lucasutn.jpg');
      } else {
        myImage.setAttribute('src','images/lucasbueno.jpg');
      }
  }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() { /*Vamo a darle bida al votoncito*/
    ElegirUsuario();
  }

function ElegirUsuario() { /*Seleccion de usuario para Lucas */
    let myName = prompt('Quien osa conocer a Lucas?');
    if(!myName) {
      ElegirUsuario();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Lucas te saluda, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    ElegirUsuario();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Lucas te saluda, ' + storedName;
  }
