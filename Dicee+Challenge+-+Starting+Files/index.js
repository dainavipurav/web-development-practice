var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;
var result = "";

if(dice1 > dice2){
    result = "🚩 Player 1 wins";
}else if(dice2 > dice1){
    result = "Player 2 wins 🚩";
}else if (dice1 == dice2){
    result ="Draw";
}else{
    result = "Refresh me!";
}

console.log("dice 1 : " + dice1 + " dice 2 : " + dice2);

document.firstElementChild.lastElementChild.querySelector(".img1").setAttribute("src","./images/dice" + dice1 + ".png");
document.firstElementChild.lastElementChild.querySelector(".img2").setAttribute("src","./images/dice" + dice2 + ".png");
document.firstElementChild.lastElementChild.querySelector(".container h1").textContent = result;