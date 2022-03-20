canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
width_of_line = 3;

var last_position_of_x, last_position_of_y;

var mouseEvent = "empty";

canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e){
    mouseEvent = "mouseDown";
    
}

canvas.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e){
    mouseEvent = "mouseUP";
    
}

canvas.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e){
    mouseEvent = "mouseLeave";
    
}

canvas.addEventListener("mousemove", my_mouse_move);

function my_mouse_move(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 40, 0, 2 * Math.PI)
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clearbutton(){

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}