//Exercice 4 :

let pu = prompt('Saisir le prix unitaire :');
let qtecom = prompt('Saisir la quantité commandé :');
let tot = (pu * qtecom);
let reduc1 = 0.95; // remise 5 %
let reduc2 = 0.90; // remise de 10 %
let port = 6;
let totF; // Total final
let totRm =  tot * reduc2;
if (tot >= 100 &&  tot<= 200)
{
    totRm = tot * reduc1;
    totF = totRm + port;
    document.write("Le prix total sera de " + totF+ " € ");
}
else if (tot > 200 && tot < 500)
{
    totRm = tot * reduc2;
    totF = (totRm * 1.02);
    document.write("Le prix total sera de " + totF+ " € ");
}
else if (tot < 100)
{
    totRm = tot;
    totF = totRm + port;
    document.write("Le prix total sera de " + totF+ " € " +" ,le port est de : "+ (totF - totRm)+ " € ");
}

else if (tot > 200 && totRm <= 500)
{
    totRm = tot * reduc2;
    totF = (totRm * 1.02);
    document.write("Le prix total après réduction sera de : " + totF + " € " +" ,la réduction est de : "+ (totF - totRm)+ " € ");
}
else if (totRm > 500)
{
    document.write("Le prix total après réduction sera de " + totRm + " € ");
}