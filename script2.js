//Exercice 2 :

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
