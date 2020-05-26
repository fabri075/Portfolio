// WEB 2

var triples = 3;
var multiplos = setInterval(empezar, 500); 
function empezar() {
    document.getElementById("multiplos").innerHTML += " " + triples ;
    triples = triples + 3;
}

function detener () {
    clearInterval (multiplos);
}