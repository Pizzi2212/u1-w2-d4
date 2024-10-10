/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const area = function(b,h){

   console.log("L'area è:" + b * h)
}

area(22,10)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sum = 0

const crazySum = function (number,number2){
    sum = number + number2
    if (number !== number2 ){
        return sum
    } else {
        sum = sum * 3
        return sum
    }
}

console.log( "il risultato è", + crazySum(15,15))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let diff = 0
const crazyDiff = function(number) {
    
 diff = Math.abs(number - 19)
  if(number > 19){
    diff = diff * 3
    return diff
  }else {
    return diff 
  }
}

console.log("la differenza assoluta è", + crazyDiff(20))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function(n) {
 if(n > 20 && n <= 100 || n === 400){
   return true
 } else {
    return false
 }
}

 console.log("è compreso tra 20 e 100 uguale a 400 " + boundary(400))




/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (string){
   if(string === "EPICODE"){
    return string
   }else {
    string = "EPICODE" + string
    return string
   }
}

console.log("epicode? " + epify(" massimo") )

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 const check3and7 = function (number){
   if (number % 3 === 0 || number % 7 === 0){
    return true
   }
 }

console.log("Il numero è multiplo di 3 o di 7? " + check3and7(3))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
newstring = " "
 const reverseString = function(string){
    
     newstring = reverseString(string)
     return string
 }

 console.log("la parola al contrario è " + reverseString("massimo"))


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
