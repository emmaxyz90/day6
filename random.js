var myPix = new Array ("baboon.jpeg", "concert.jpeg", "lion.jpeg", "island.jpg");

function choosePic(){
	var randomNum = Math.floor(Math.random() * myPix.length);
	document.getElementById('myPicture').src = myPix[randomNum];
}
document.getElementById("reset").addEventListener("click", choosePic);