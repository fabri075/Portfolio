//WEB 1
var puntaje = 0;
var respuesta1 = "";
var respuesta2 = "";
var respuesta3 = "";
var respuesta4 = "";
var respuesta5 = "";
function trivia()
{
    var primera = document.getElementsByName("primera");
    if(primera[1].checked)
    {
        puntaje = puntaje + 2;
        respuesta1 = "Correcto";
    }
    else
    {
        puntaje = puntaje + 0;
        respuesta1 = "Incorrecto";
    }
    document.getElementById("respuesta1").innerHTML = respuesta1;
    var segunda = document.getElementsByName("segunda");
    if(segunda[2].checked)
    {
        puntaje = puntaje + 2;
        respuesta2 = "Correcto";
    }
    else 
    {
        puntaje = puntaje + 0;
        respuesta2 = "Incorrecto";
    }
    document.getElementById("respuesta2").innerHTML = respuesta2;
    var tercera = document.getElementsByName("tercera");
    if(tercera[2].checked)
    {
        puntaje = puntaje + 2;
        respuesta3 = "Correcto";
    }
    else 
    {
        puntaje = puntaje + 0;
        respuesta3 = "Incorrecto";
    }
    document.getElementById("respuesta3").innerHTML = respuesta3;
    var cuarta = document.getElementsByName("cuarta");
    if(cuarta[2].checked)
    {
        puntaje = puntaje + 2;
        respuesta4 = "Correcto";
    }
    else 
    {
        puntaje = puntaje + 0;
        respuesta4 = "Incorrecto";
    }
    document.getElementById("respuesta4").innerHTML = respuesta4;
    var quinta = document.getElementsByName("quinta");
    if(quinta[0].checked)
    {
        puntaje = puntaje + 2;
        respuesta5 = "Correcto";
    }
    else 
    {
        puntaje = puntaje + 0;
        respuesta5 = "Incorrecto";
    }
    document.getElementById("respuesta5").innerHTML = respuesta5;
    
    document.getElementById("resultado").innerHTML = "Su puntaje es de " + puntaje + " puntos."; 
    puntaje = 0;
}



