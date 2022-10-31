
//Exercice 1 :
/*
let age = parseInt(prompt("Entrez un age, si > 100 arrêt."))
let jeunes = 0;
let moyens = 0;
let vieux = 0;
let centenaire = 0;
while (age <=100)
{
    if (age < 20){
        jeunes++;
    }
    else if (age > 40){
        vieux++;
    }
    else if (age >= 20 && age <= 40){
        moyens++;
    }
    age = parseInt(prompt("Saissisez l'âge"));
        
    console.log(jeunes);
    console.log(moyens);
    console.log(vieux);
}
if (age >= 100){
    centenaire++;
}
console.log("Vous avez saisi l'age de "+ jeunes+" jeunes, " + " l'age de " + moyens + " moyens, "+ " l'age de " + vieux + " vieux "+", l'age de " + centenaire + " centenaire.");
document.write("Vous avez saisi l'age de "+ jeunes+" jeunes, " + " l'age de " + moyens + " moyens, "+ " l'age de " + vieux + " vieux "+", l'age de " + centenaire + " centenaire.");
*/
//Exercice 2 :
/*
let x = parseInt(prompt("Saisissez un nombre que voulez multipliez"));
let t = parseInt(prompt("Saisissez le nombre de multiple que vous voulez afficher"));
function n ()
{
    for (n = 1; n <= t; n++  )
    {
        resultat = x * t;
        console.log( x +" x " + n + " = " + (x *n ))
        document.write("<br>"+x +" x " + n + " = " + (x *n ) )
    }
    
}
n();
*/
//Exercice 3
let prenom = prompt("Saississez un prénom reconnue");
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];


console.log(p);
let nMaj = n.CharAt(0).toUpperCase() + n.slice(1).toLowerCase();
var p = tab.indexOf(nMaj)+1
console.log(p);
if ( p >0 & p <=9)
{
     tab.splice(p, 1);
     tab.push('');
}
else
{
    console.log(tab);
}