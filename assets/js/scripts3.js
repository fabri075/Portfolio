// WEB 3
var tops = 250;
var lefts = 30;
var cuadrado = document.getElementById("cuadro");
var barrera = document.getElementById("barrera");
var bartop = 0;
var barleft = 0;
var barright = 0;
var barbot = 0;

window.onload = function(){
    this.document.onkeydown = teclas;
    var barpos = barrera.getBoundingClientRect();
    bartop = barpos.top;
    barleft = barpos.left;
    barright = barpos.right;
    barbot = barpos.bottom;
}
function teclas(ev){
    var codigo = ev.keyCode;
    var cuapos = cuadrado.getBoundingClientRect();
    var cuatop = cuapos.top;
    var cuabot = cuapos.bottom;
    var cualeft = cuapos.left;
    var cuaright = cuapos.right;
    if (codigo == 87){
        tops--;
        cuadrado.style.top = tops+"px";
    }
    if (codigo == 83){
        tops++;
        cuadrado.style.top = tops+"px";
    }
    if (codigo == 65){
        lefts--;
        cuadrado.style.left = lefts+"px";
    }
    if (codigo == 68){
        lefts++;
        cuadrado.style.left = lefts+"px";
    }
    if (cuaright == barleft && cuabot>=bartop && cuatop<=barbot){
        barrera.style.visibility = "hidden";
        lefts = lefts -2;
    }
    if (cuabot == bartop && cuaright>=barleft && cualeft<=barright){
        barrera.style.visibility = "hidden";
        tops = tops-2;
    }
    if (cualeft == barright && cuabot>=bartop && cuatop<=barbot){
        barrera.style.visibility = "hidden";
        lefts = lefts +2;
    }
    if (cuatop==barbot && cuaright>=barleft && cualeft<=barright){
        barrera.style.visibility = "hidden";
        tops = tops +2;
    }
}