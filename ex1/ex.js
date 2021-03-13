
var x =Math.floor(Math.random() * 11);
difficulty = prompt("donner le nombre d'essais qui vous convient"); 
while (difficulty>10){
    alert("ce nombre droit etre inferieur a 9");
    difficulty = prompt("entrez a nouveau le nombre dessais"); 
}
while(difficulty--){
    g = prompt("guess the number");
    if(g==x)  {   alert("you win ");
break ;}


}
console.log(difficulty);
if(difficulty == -1)    alert("you lose, the number is " + x);
