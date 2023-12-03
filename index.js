// declare card elements
const suits = ["spade", "heart", "club", "diamond"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",];

//  array to contain cards
let deck = [];

var dark = document.getElementById("deck");

// image array
let imgsrc = [
  'public/images/spade.png',
  'public/images/heart.png',
  'public/images/clubs.png',
  'public/images/diamond .png',

]

let imgaray= [
  'public/images/Vector (1).png',
  'public/images/del.png',
  'public/images/Vector (2).png',
  'public/images/Polygon 5.png',

]

for (var i = 0; i < suits.length; i++) {
  var row = document.createElement("tr");
  for (var j = 0; j < values.length; j++) {
    // object
    var myobject = { value: values[j], suit: suits[i] };
    deck.push(myobject);
    // jadval
    var cell = document.createElement("td");
    var card = document.createElement("div");
    card.className = "card " + suits[i];
    card.textContent = values[j] + ' ' + suits[i];

    cell.appendChild(card);
    row.appendChild(cell);
    // img card

/*khalbozorg*/
    const khal = document.createElement("img");
    khal.src = imgsrc[i]
    khal.classList.add("imgclass");
/*khalbozorg*/

/*khal koochak*/
 const topimg = document.createElement("img");
 topimg.src = imgaray[i]
 topimg.classList.add("topimg");


 const bottomimg= document.createElement("img");
 bottomimg.src = imgaray[i]
 bottomimg.classList.add("bottomimg");
/*khal koochak*/


/*number*/

 var topnumber = document.createElement("div");
topnumber.textContent=values[j]
topnumber.className = "topnumber " + suits[i];

var bottomnumber = document.createElement("div");
bottomnumber.textContent=values[j]
bottomnumber.className = "bottomnumber " + suits[i];

cell.appendChild(topnumber);
 cell.appendChild(bottomnumber);
/*number*/
   


    cell.appendChild(khal);
    cell.appendChild(topimg);
    cell.appendChild(bottomimg);


  }

  dark.appendChild(row);
}


let btn = document.getElementById("botton");
let output = document.getElementById("output");

/*random function*/ 
function random() { 

  for (let n = 0; n < 4; n++) {
    let randomcard = Math.floor(Math.random() * deck.length)
   console.log(deck[randomcard])




    var row = document.createElement("tr");
// jadval
    var cell = document.createElement("td");
    var card = document.createElement("div");
    card.className = "card " + deck[randomcard].suit;
    card.textContent = deck[randomcard].value + ' ' + deck[randomcard].suit;

    cell.appendChild(card);
    row.appendChild(cell);

  // img card


/*khalbozorg*/
const khal = document.createElement("img");
khal.src = imgsrc[n]
khal.classList.add("imgclass");
/*khalbozorg*/

/*khal koochak*/
const topimg = document.createElement("img");
topimg.src = imgaray[n]
topimg.classList.add("topimg");


const bottomimg= document.createElement("img");
bottomimg.src = imgaray[n]
bottomimg.classList.add("bottomimg");
/*khal koochak*/


/*number*/

var topnumber = document.createElement("div");
topnumber.textContent=values[n]
topnumber.className = "topnumber " + suits[n];

var bottomnumber = document.createElement("div");
bottomnumber.textContent=values[n]
bottomnumber.className = "bottomnumber " + suits[n];

cell.appendChild(topnumber);
cell.appendChild(bottomnumber);
/*number*/



cell.appendChild(khal);
cell.appendChild(topimg);
cell.appendChild(bottomimg);


    dark.appendChild(row);


  }
  
}


btn.addEventListener('click', () => {

  innerHTML = random(deck)



})
