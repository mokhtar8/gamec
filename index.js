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
    const khal = document.createElement("img");
    khal.src = imgsrc[i]
    khal.classList.add("imgclass");



    cell.appendChild(khal);

   


  }

  dark.appendChild(row);
}



let btn = document.getElementById("botton");
let output= document.getElementById("output");

function random (){
 for (let n = 0; n <4; n++) {
  let randomcard = Math.floor(Math.random()*deck.length)

console.log(deck[randomcard])

    }
} 
 
btn.addEventListener( 'click' ,() => {

  innerHTML=random(deck)
 


})
