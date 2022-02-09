function clearScreen(){
	document.getElementById("disp").value ="";
}
function display(value){
	document.getElementById("disp").value += value;
}
function calc(){
	let y = document.getElementById("disp").value;
	document.getElementById("disp").value = eval(y);
}

 
