let button = document.querySelectorAll('.btn');
let slide = document.getElementById("slide");
const buttons = document.querySelectorAll(".buttons");
const close = document.querySelector(".close");
let cards = document.querySelectorAll('.card');
let modal = document.querySelector('.modal');
let cardPic = document.querySelectorAll(".card-pic");

let imageList = [];
let imageCounter = 0;
cardPic.forEach(function(item){
  //push each imageto the array of images
  imageList.push(item.querySelector('img').src);
})

let modalPic;
cards.forEach((item) => {
  item.addEventListener('click', event => {
    modalPic = modal.querySelector("#slide");
    let pic = item.querySelector('img');
    modal.style.display = "flex";
    modalPic.style.backgroundImage = 'url(\"' + pic.src + '\")';
    //image counter for the modal slider
    imageCounter = imageList.indexOf(pic.src);
  });
});
close.addEventListener('click', event => {
  modal.style.display = 'none';
});

buttons.forEach(function (button) { //click button controller
  button.addEventListener("click", function () {
    if (button.classList.contains("left")) {
      if (imageCounter < 0) imageCounter = (imageList.length - 2);
      else imageCounter--;
    } else if (button.classList.contains("right")) {
      if (imageCounter > (imageList.length - 2)) imageCounter = 0;
      else imageCounter++;
    }
    modalPic.style.backgroundImage = 'url("' + imageList[imageCounter] + '")';
  });
});
