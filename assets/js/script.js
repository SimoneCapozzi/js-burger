 /* references 

  prendo dall'HTML  gli id che mi servono

*/
//references 


var elPrice = document.getElementById('price'); 

var userName = document.getElementById('name');

var ingredienti = document.getElementsByClassName('ingredient-checkbox');

var button = document.getElementById('button'); 

var sconto = document.getElementById('coupon');



 //references 

/* variabili */

var arrSconti = ['booleaner','simone capozzi','over65']; //sconti
var prezzoDefault = 20; // prezzo iniziale del panino senza applicare ingredienti e sconti

var discount1 = 0.2; //sconto del 20% 
var discount2 = 0.5; //sconto del 50% 
var discount3 = 0.3; //sconto del 30% 

scriviPrezzo(prezzoDefault, elPrice);//qui richiamo la funzione per scrivere il prezzo in modo tale che già a priori l'utente sa che di default il prezzo è di 20$ che poi andrò a richiamare di nuovo quando metterò l'"evento" sul bottone in modo tale che controlla gli ingredienti e lo sconto e ristampa il nuovo valore da far stampare nel target che 

button.addEventListener('click', function(){
    //controllo sul nome
    var nomePaninoUsername = userName.value.trim();

    //se nomePaninoUsername ha la lunghezza <3 allora faccio stampare un errore altrimenti se nomePaninoUsername è valido 
    if(nomePaninoUsername.length < 3 ){
      alert("nome inserito non valido");
    }else{
      var totIngredienti = 0; 
      for(var i = 0; i < ingredienti.length; i++){
        var ingrediente = ingredienti[i];
        //se il valore cecked di ingrediente è spuntato allora faccio tutti i calcoli del caso altrimenti vado avanti 
        if(ingrediente.checked === true){
          totIngredienti = somma(totIngredienti,parseInt(ingrediente.value)); //ingrediente.value è una stringa quindi dev'essere trasformata in un valore numerico intero attraverso il parseInt altrimenti le operazioni di addizione concatenano i valori invece che sommarli
          console.log(totIngredienti);
        }
      }
    }

    var prezzoTotale = somma(totIngredienti, prezzoDefault);
    console.log(prezzoTotale);
    if(arrSconti.includes(sconto.value) === true && sconto.value === 'simone capozzi'){
      prezzoTotale -= prezzoTotale * discount2;
    }else if(arrSconti.includes(sconto.value) === true && sconto.value === 'over65'){
      prezzoTotale -= prezzoTotale * discount3;
    }else if(arrSconti.includes(sconto.value) === true && sconto.value === 'booleaner'){
      prezzoTotale -= prezzoTotale * discount1;
    }
      
    
    scriviPrezzo(prezzoTotale ,elPrice);
    console.log(prezzoTotale);
});



/* FUNZIONI */
function scriviPrezzo (valore, target){
  target.innerHTML = valore.toFixed(2);
}

function somma(x,y){
  return x + y;
}

function moltiplicazione(x,y){
  return x * y;
}

