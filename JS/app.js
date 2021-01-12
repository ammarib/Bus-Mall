'use strict';

var arrayOfItems = [];
var leftImg = document.getElementById('left-img');
var centerImg = document.getElementById('center-img');
var rightImg = document.getElementById('right-img');

var leftText = document.getElementById('left-one');
var centerText = document.getElementById('center-one')
var rightText = document.getElementById('right-one');

var itemsSection = document.getElementById('the-container');

var itemsCanvas = document.getElementById('itemsChart').getContext('2d');
var trails = 25;


function Goods(name, image) {
  this.image = image;
  this.name = name;
  this.url = 'img/' + image;
  this.clicks = 0;
  this.showen = 0;

  arrayOfItems.push(this);

}

new Goods('Bag', 'bag.jpg'); new Goods('Banana', 'banana.jpg'); new Goods('Bathroom', 'bathroom.jpg');
new Goods('Boots', 'boots.jpg'); new Goods('Chair', 'chair.jpg'); new Goods('Cthulhu', 'cthulhu.jpg'); new Goods('Dog-duck', 'dog-duck.jpg')
new Goods('Breakfast', 'breakfast.jpg'); new Goods('Dragon', 'dragon.jpg'); new Goods('Pen', 'pen.jpg'); new Goods('Pet-sweep', 'pet-sweep.jpg');
new Goods('Bubblegum', 'bubblegum.jpg'); new Goods('Scissors', 'scissors.jpg'); new Goods('Shark', 'shark.jpg'); new Goods('Sweep', 'sweep.png');


function renderGoods(leftImage, centerImage, rightImage) {

  leftImg.setAttribute('src', arrayOfItems[leftImage].url);
  centerImg.setAttribute('src', arrayOfItems[centerImage].url);
  rightImg.setAttribute('src', arrayOfItems[rightImage].url);

  leftText.textContent = arrayOfItems[leftImage].name;
  centerText.textContent = arrayOfItems[centerImage].name;
  rightText.textContent = arrayOfItems[rightImage].name;
  shownItems(leftImage, centerImage, rightImage);
}

function chooseGood() {
  var leftImage = Math.round(Math.random() * (arrayOfItems.length - 1))


  do {
    var centerImage = Math.round(Math.random() * (arrayOfItems.length - 1))
    var rightImage = Math.round(Math.random() * (arrayOfItems.length - 1))
  } while (leftImage === rightImage || leftImage === centerImage || rightImage === centerImage);

  // console.log(leftImage);
  // console.log(centerImage);
  // console.log(rightImage);

  renderGoods(leftImage, centerImage, rightImage)

}


function checkGoods(itemSelector) {
  for (var index = 0; index < arrayOfItems.length; index++) {
    if (arrayOfItems[index].url === itemSelector) {
      arrayOfItems[index].clicks++;
      trails--;
    }
    storeVotes();
  }
}

chooseGood();

function shownItems(leftImage, centerImage, rightImage) {
  arrayOfItems[leftImage].showen++;
  console.log(arrayOfItems[leftImage]);
  arrayOfItems[centerImage].showen++;
  arrayOfItems[rightImage].showen++;

}
function countImage(event) {

  var targetId = event.target.id;

  if (trails !== 0) {

    if (targetId === "left-img" || "center-img" || "right-img") {
      var itemsSelector = event.target.getAttribute('src');
      checkGoods(itemsSelector);
      chooseGood();
    }
  } else {
    itemsSection.removeEventListener('click', countImage);
    console.log(arrayOfItems);
    renderchart();
  }
}

itemsSection.addEventListener('click', countImage);


var parentElement = document.getElementById('clicksResult');
var ul = document.createElement('ul');
parentElement.appendChild(ul);

var button = document.getElementById('clicksResult');

button.addEventListener('click', function () {
  var ul = document.createElement('ul');
  var section = document.getElementById('list');
  section.appendChild(ul);
  for (let i = 0; i < 15; i++) {
    var li = document.createElement('li');
    li.textContent = arrayOfItems[i].name + " / " + "was clicked: " + arrayOfItems[i].clicks + " / " + "Time shown: " + arrayOfItems[i].showen;
    ul.appendChild(li);
  }
});



function renderchart() {

  var arrayOfItemsName = [];
  var arrayOfItemsCount = [];
  var arrayOfItemsShown = [];


  for (var index = 0; index < arrayOfItems.length; index++) {
    arrayOfItemsName.push(arrayOfItems[index].name);
    arrayOfItemsCount.push(arrayOfItems[index].clicks);
    arrayOfItemsShown.push(arrayOfItems[index].showen);

  }

  var myChart = new Chart(itemsCanvas, {
    type: 'bar',
    data: {
      labels: arrayOfItemsName,
      datasets: [
        {
          label: '# of items Clicks',
          data: arrayOfItemsCount,
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9",
            "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
            "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'Time Items was shown',
          data: arrayOfItemsShown,
          backgroundColor: ["rgb(255,255,0)", "rgb(255,255,0)", "rgb(255,255,0)", "rgb(255,255,0)", "rgb(255,255,0)",
            "rgb(255,255,0)", "rgb(255,255,0)", "rgb(255,255,0)", "rgb(255,255,0)", "rgb(255,255,0)", "rgb(255,255,0)",
            "rgb(255,255,0)", "rgb(255,255,0)", "rgb(255,255,0)", "rgb(255,255,0)"],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}



function storeVotes() {

  localStorage.setItem('our Items', JSON.stringify(arrayOfItems));

}


function getVotes() {

  if (localStorage.length > 0) {


    var prodactArray = localStorage.getItem('our Items');

    arrayOfItems = JSON.parse(prodactArray);

    renderchart();
  }

}

console.log('list');
getVotes();

// function checkAndRestore() {

//   
// }
// checkAndRestore();
