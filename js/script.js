/* Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

var nomeUtente = prompt("Qual'è il tuo nome?");

var cognomeUtente = prompt("Qual'è il tuo cognome?")

var colorePreferito = prompt("Qual'è il tuo colore preferito?")

document.getElementById("root").innerHTML = "Ciao " + nomeUtente + ", la password generata per te è: " + nomeUtente + cognomeUtente + colorePreferito + "21";