
//Exercice 1 :
let age = parseInt(prompt("Entrez un age, si > 100 arrêt."))
let jeunes = 0;
let moyens = 0;
let vieux = 0;
let centenaire = 0;
while (age <=100){
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