'use strict';

var arrayOfItems = [];
var leftImg = document.getElementById('left-img');
var centerImg = document.getElementById('center-img');
var rightImg = document.getElementById('right-img');

var leftText = document.getElementById('left-one');
var centerText  = document.getElementById('center-one')
var rightText = document.getElementById('right-one');

var itemsSection = document.getElementById('the-container');

var clicksTimes = 0;


function Goods(name, image) {
  this.image = image;
  this.name = name;
  this.url = 'img/' + image;
  this.clicks = 0;
  this.showen = 0;

  arrayOfItems.push(this);

}

new Goods ('Bag', 'bag.jpg'); new Goods ('Banana', 'banana.jpg'); new Goods ('Bathroom', 'bathroom.jpg');
new Goods ( 'Boots', 'boots.jpg'); new Goods ('Chair', 'chair.jpg'); new Goods ('Cthulhu', 'cthulhu.jpg'); new Goods ('Dog-duck', 'dog-duck.jpg')
new Goods ('Breakfast', 'breakfast.jpg'); new Goods ('Dragon', 'dragon.jpg'); new Goods ('Pen', 'pen.jpg'); new Goods ('Pet-sweep', 'pet-sweep.jpg');
new Goods ('Bubblegum', 'bubblegum.jpg'); new Goods ('Scissors', 'scissors.jpg'); new Goods ('Shark', 'shark.jpg'); new Goods ('Sweep', 'sweep.png');


function renderGoods(leftImage, centerImage, rightImage) {

    leftImg.setAttribute('src', arrayOfItems[leftImage].url);
    centerImg.setAttribute('src',arrayOfItems[centerImage].url);
    rightImg.setAttribute('src', arrayOfItems[rightImage].url);
  
    leftText.textContent = arrayOfItems[leftImage].name;
    centerText.textContent = arrayOfItems[centerImage].name;
    rightText.textContent = arrayOfItems[rightImage].name;

  }

  function chooseGood() {
    var leftImage = Math.round(Math.random() * (arrayOfItems.length - 1))
   
   
    do { 
    var centerImage = Math.round(Math.random()* (arrayOfItems.length - 1))
    var rightImage = Math.round(Math.random()* (arrayOfItems.length - 1))
    } while (leftImage === rightImage || leftImage === centerImage || rightImage === centerImage);
  
    console.log(leftImage);
    console.log(centerImage);
    console.log(rightImage);
  
    renderGoods(leftImage, centerImage, rightImage)
  
  }

  
function checkGoods(itemSelector) {
    for (var index = 0; index < arrayOfItems.length; index++) {
      if (arrayOfItems[index].url === itemSelector) {
        arrayOfItems[index].counter++;
        clicksTimes--;
      }
    }
  }

  chooseGood();
function itemsCounter(event) {
    if( clicksTimes<25){
        var clickedItems = event.target.id;

      if (clickedItems === 'left-img' || clickedItems === 'center-img'  || clickedItems === 'right-img') {
         clicksTimes++;

     if (clickedItems === 'left-img') {
          leftImg.clicks += 1;
      }

      if (clickedItems === 'center-img') {
        centerImg.clicks += 1;
      }
      if (clickedItems === 'right-img') {
        rightImg.clicks += 1;
      }
 chooseGood();
    }
}

  else{

    var resultsList = document.getElementById('list');

    for (var i = 0; i < arrayOfItems.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = arrayOfItems[i].name + ' has ' + arrayOfItems[i].numberOfClicks + ' clicks , and ' + arrayOfItems[i].shown + ' times shown';
        resultsList.appendChild(listItem);
      }
      itemsSection.removeEventListener('click',itemsCounter);
    }
};


    
