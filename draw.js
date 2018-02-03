var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var shape = "square";

var change_shape = function(){
	if (shape == "square"){
		shape = "circle";
	}
	else {
		shape = "square";
	}
	console.log(shape);
}

var erase = function(){
	ctx.clearRect(0, 0, 500, 500);
	console.log("cleared");
}

var draw = function(e){
    var rect = c.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
	if (shape == "square"){
		ctx.fillStyle = "lightsteelblue";
		ctx.fillRect(x - 5, y - 5, 10, 10);
	}
	else {
		ctx.fillStyle = "#98DFAF"
		ctx.beginPath();
		ctx.arc(x, y, 10, 0, 2 * Math.PI);
		ctx.fill()
	}
}

toggle.addEventListener('click', change_shape);
clear.addEventListener('click', erase);
canvas.addEventListener('click', draw);