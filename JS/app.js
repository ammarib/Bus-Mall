'use strict';

var arrayOfItems = [];
var leftImg = document.getElementById('left-img');
var centerImg = document.getElementById('center-img');
var rightImg = document.getElementById('right-img');

var leftText = document.getElementById('left-one');
var centerText  = document.getElementById('center-one')
var rightText = document.getElementById('right-one');

var itemsSection = document.getElementById('the-container');

var clicksLeft = 25;


function Goods(name, image) {
  this.image = image;
  this.name = name;
  this.url = 'img/' + image;
  this.counter = 0;

  arrayOfItems.push(this);

}

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
    var rightImage = Math.round(Math.random()* (arrayOfItems.length - 1))
    var centerImage = Math.round(Math.random()* (arrayOfItems.length - 1))
    
    } while (leftImage === rightImage || leftImage === centerImage || rightImage === centerImage);
  
    console.log(leftImage);
    console.log(centerImage);
    console.log(rightImage);
  
    renderGoods(leftImage, centerImage, rightImage)
  
  }
  
  new Goods ('bag', 'bag.jpg');
  new Goods ('banana', 'banana.jpg');
  new Goods ('bathroom', 'bathroom.jpg');
  new Goods ( 'boots', 'boots.jpg');

  chooseGood();
  