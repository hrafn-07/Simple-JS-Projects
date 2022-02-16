const button = document.querySelector('.btn');  //define the buttons class
const body = document.querySelector('body');    //define body tag

const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
button.addEventListener('click', changeHex);        //change the color when click the button

function changeHex() {
    let hex = '#';  //define hex
  
    //add random hexadecimal numbers to hex
    for(let i = 0; i < 6; i++){
      const index = Math.floor(Math.random() * hexValues.length) //select random characters place in the hexValues array
      hex += hexValues[index];
    }
  
    body.style.backgroundColor = hex;
  }