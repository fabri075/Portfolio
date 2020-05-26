var tops = 250;
var lefts = 30;
var cuadrado = document.getElementById("cuadrado");
var barrera = document.getElementById("llegada");
var aviso = document.getElementById("aviso")
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
    if (codigo == 38){
        tops--;
        cuadrado.style.top = tops+"px";
    }
    if (codigo == 40){
        tops++;
        cuadrado.style.top = tops+"px";
    }
    if (codigo == 37){
        lefts--;
        cuadrado.style.left = lefts+"px";
    }
    if (codigo == 39){
        lefts++;
        cuadrado.style.left = lefts+"px";
    }
    if (cuaright == barleft && cuabot>=bartop && cuatop<=barbot){
        
        aviso.style.visibility = "Visible";
    }
    if (cuabot == bartop && cuaright>=barleft && cualeft<=barright){
        
        aviso.style.visibility = "Visible";
    }
    if (cualeft == barright && cuabot>=bartop && cuatop<=barbot){
        
        aviso.style.visibility = "Visible";
    }
    if (cuatop==barbot && cuaright>=barleft && cualeft<=barright){
        
        aviso.style.visibility = "Visible";

    }
}