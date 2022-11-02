//Exercice 3

let prenom = prompt("Saississez un prénom reconnue");
let pMaj = prenom.charAt(0).toUpperCase() + prenom.slice(1).toLowerCase();
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
let p = tab.indexOf(pMaj);
if (pMaj === 'Audrey' || 'Aurélien' || 'Flavien' ||'Jérémy' || 'Laurent' || 'Melik' || 'Nouara' ||'Salem' || 'Samuel' ||'Stéphane')
{
    tab.splice(p, 1);
    tab.push('');
}
console.log(tab);
document.write("Ouvrir le console log")