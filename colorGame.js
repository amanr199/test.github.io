var squareNumber=6;
var easybutton=document.querySelector("#easy");
var hardbutton=document.querySelector("#hard")
var h1=document.querySelector("h1");
var color=colorGenerator(squareNumber);
var rgb=document.querySelector("#colorDisplay")
var colorHolder=colorpicker();
rgb.textContent=colorHolder;
var square=document.querySelectorAll(".square");
var state=document.querySelector("#status");
easybutton.addEventListener("click",function(){
	//rgb must change at random
	hardbutton.classList.remove("selector");
	easybutton.classList.add("selector");
	squareNumber=3;
	color=colorGenerator(squareNumber);
	colorHolder=colorpicker();
	rgb.textContent=colorHolder;
	//box must be also be change in random color
	for(var i=0;i<square.length;i++){
		if(color[i]){
			square[i].style.backgroundColor=color[i];
		}
		else{
			square[i].style.display="none";
		}
	}
	//no of boxes must be reduced to 3 within which the answer must lie
});
hardbutton.addEventListener("click",function(){
	////rgb heading must change with new color name
	hardbutton.classList.add("selector");
	easybutton.classList.remove("selector");
	squareNumber=6;
	color=colorGenerator(squareNumber);
	colorHolder=colorpicker();
	rgb.textContent=colorHolder;
	//box color must change
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color[i];
		square[i].style.display="block";
	}
	
	//when correct color is chosen heading background color must also change

	//when correct color is chosen newgame button must change into Play Again? button

});
for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=color[i];
	square[i].addEventListener("click",function(){
		if(this.style.backgroundColor===colorHolder){
			for(var i=0;i<square.length;i++){
	    square[i].style.backgroundColor=colorHolder;
	}
	state.textContent="Correct!";
	h1.style.backgroundColor=colorHolder;
	newgame.textContent="Play Again?"
}
		else{
		 this.style.backgroundColor="#232323";
		 state.textContent="Try Again";
		}
	})
}
function colorGenerator(num){
	var arr=[];
for(var i=0;i<num;i++){
	arr.push(randomColor());
}
return arr;
}
function randomColor(){
	//random for r from the range of 0-255
	var r=Math.floor(Math.random()*256);
	//random for g from the range of 0-255
	var g=Math.floor(Math.random()*256);
	//random for b from the range of 0-255
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";

}
function colorpicker(){
	var random=Math.floor(Math.random() * color.length);
	return color[random];
}
var newgame=document.querySelector("#reset");
newgame.addEventListener("click",function(){
	//rgb heading must change with new color name
	color=colorGenerator(squareNumber);
	colorHolder=colorpicker();
	rgb.textContent=colorHolder;
	state.textContent="";
	newgame.textContent="New Game";
	//box color must change
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color[i];
	
	}
	//when correct color is chosen heading background color must also change
	h1.style.backgroundColor="steelblue"
	//when correct color is chosen newgame button must change into Play Again? button

});


