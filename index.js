var n1 = Math.floor(Math.random()*6+1);
var n2 = Math.floor(Math.random()*6+1);
var i1 = "./images/dice"+n1+".png";
var i2 = "./images/dice"+n2+".png";
document.querySelector(".img1").setAttribute("src",i1);
document.querySelector(".img2").setAttribute("src",i2);
if(n1 > n2) {
    document.querySelector("h1").innerHTML = "Player 1 win 🚩";
}
else if(n2 > n1) {
    document.querySelector("h1").innerHTML = "Player 2 win 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Match draw 😂";
}