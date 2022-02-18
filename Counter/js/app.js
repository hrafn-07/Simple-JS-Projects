//define DOM elements
var reduce = document.getElementById("reduce");
var add = document.getElementById("add");
var zero = document.getElementById("zero");
var counter = document.getElementById("count");

let c = 0;

//function for change color and counter
function count()
{
	if (c > 0)
		counter.style.color = "green";
	else if	(c < 0)
		counter.style.color = "red";
	else
		counter.style.color = "black";

	counter.innerHTML = c.toString();
}

reduce.addEventListener("click",function(){
	c--;
	count();
});
add.addEventListener("click",function(){
	c++;
	count();
});
zero.addEventListener("click",function(){
	c = 0;
	count();
});