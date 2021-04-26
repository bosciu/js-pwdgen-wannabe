/* Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */
var root = document.getElementById("root");

var password = document.getElementById("password");


function myFunction() {
    var nomeUtente = prompt("Qual'è il tuo nome?");

    var cognomeUtente = prompt("Qual'è il tuo cognome?");

    var colorePreferito = prompt("Qual'è il tuo colore preferito?");

    root.innerHTML = "Ciao " + nomeUtente + ", la password generata per te è:";

    password.innerHTML = " " + nomeUtente + cognomeUtente + colorePreferito + "21";
}