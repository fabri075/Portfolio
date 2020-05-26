//WEB 5
var size = prompt("Para entrar, necesitas un tamaño para tu pincel");
var canvas = document.getElementById("paint");
canvas.addEventListener("mousedown", down);
canvas.addEventListener("mouseup", toggledraw);
canvas.addEventListener("mousemove", 
function (ev){
    var mousepos = getMousePos(canvas, ev);
    var posx = mousepos.x;
    var posy = mousepos.y;
    draw(canvas, posx, posy);
});
function down(){
    md = true;
};
function toggledraw(){
    md = false;
    canvas.style.cursor = "default";
};
function getMousePos(canvas,ev){
    var rect = canvas.getBoundingClientRect();
    return{
        x:ev.clientX - rect.left,
        y:ev.clientY - rect.top,
    };
}
function draw(canvas, posx, posy){
    var context = canvas.getContext("2d");
    if(md){
        canvas.style.cursor = "pointer";
        context.fillRect(posx, posy, size, size)
    }
}