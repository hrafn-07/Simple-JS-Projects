let button = document.querySelectorAll('.btn');
let items = document.querySelectorAll('.card');


 button.forEach((btn) => {
  btn.addEventListener('click', event => {
    //Activate Filter Button
    for (let i = 0; i < button.length; i++) {
      button[i].classList.remove('active');
    }
    event.target.classList.add('active');

    //filter items with brand
    items.forEach((item) => {
      let brand = item.querySelector('.card-sub');  //brand is a class under the item
      if(event.target.innerText == 'All')           //clicked items inner text
        {
          item.style.display = 'block';
        }
        else{
          if(brand.innerText == event.target.innerText)
          {
            item.style.display = 'block'
          }else{
            item.style.display = 'none'
          }
        }

    });
  });
});
const searchBox = document.querySelector('#search-filter');

searchBox.addEventListener('keyup', (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();
    
    //display only items that contain filter input
    items.forEach((item) => {
      let srchLower = item.innerText.toLowerCase();
        if (srchLower.includes(searchFilter)){
            item.style.display = 'block'
         } else {
             item.style.display = 'none'
         }
    })
 });