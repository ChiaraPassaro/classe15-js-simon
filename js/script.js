// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


// Un alert espone 5 numeri casuali (univoci).
var arrayNum = [];

//vado avanti a generare finchè array.length non è 5
while (arrayNum.length < 5) {
  // console.log('array length', arrayNum.length);
  var numRad = getRandomIntInclusive(1, 90);
  // se il numero non e presente allora pusho
  if(arrayNum.includes(numRad) == false) {
    arrayNum.push(numRad);
  }
}

console.log('array di numeri random', arrayNum);
alert(arrayNum);

var time = 1;
var timer = setInterval(showTime, 1000);

// Poi parte un timer di 30 secondi.
// setTimeout(askNumberUser, 30000);


//FUNCTIONS
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente
// confronto tra numeri utente e numeri pc
function askNumberUser() {
  // 5 prompt all'utente
  // ciclo
  var numerUser = [];

  // ho massimo possibilita come lunghezza numeri random 5
  // non deve inserire piu volte lo stesso numberUser

  //finché
  console.log(arrayNum.length);
  while (numerUser.length < arrayNum.length) {
    console.log(numerUser.length);
    var number = parseInt(prompt('Inserisci un numero'));

    if(!numerUser.includes(number) && !isNaN(number)) {
      numerUser.push(number);
    }
  }
  console.log(numerUser);

  var numsOk = [];
  for (var i = 0; i < numerUser.length; i++) {
    if (arrayNum.includes(numerUser[i])) {
        numsOk.push(numerUser[i]);
    }
  }

  console.log('numeri indovinati', numsOk);
  // diciamo all'utente quanti e quali numeri corrispondo
  console.log('hai indovinato ' + numsOk.length + ' numeri');
}

function showTime() {
  // console.log(time);
  document.getElementById('time').innerHTML = time;
  if(time == 0) {
    clearInterval(timer);
    askNumberUser();
  }
  time--;
}
