//WEB 4
function agregar(){
    var concepto = document.getElementById("concepto").value;
    var definicion = document.getElementById("definicion").value;
    var autor = document.getElementById("autor").value;
    if (!concepto)
    {
        alert("No ha agregado un concepto");
    }
    else
    {
        if (!definicion)
        {
            alert("No ha agregado una definición");
        }
        else
        {
            document.getElementById("info").style.visibility = "visible";
            document.getElementById("conagre").innerHTML = concepto + ":";
            document.getElementById("defagre").innerHTML = definicion;
            if (!autor)
            {
                document.getElementById("autagre").innerHTML = "Anónimo"
            }
            else
            {
                document.getElementById("autagre").innerHTML = "Agregado por " + autor;
            }
        }
    }

   


}