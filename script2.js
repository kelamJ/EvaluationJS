//Exercice 2 :
let x = parseInt(prompt("Saisissez un nombre pour afficher sa table"));
function n (x)
{
    let i;
    for (i = 1; i <= 10; i++  )
    {
        resultat = x * i;
        console.log( x +" x " + i + " = " + (x *i ))
        document.write("<br>"+x +" x " + i + " = " + (x *i ) )

    }
}
n(x);
