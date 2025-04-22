function handleClick(instrumentName){
    var filePath = "";
    switch(instrumentName) {
           case "w":
           filePath = "./sounds/crash.mp3" ;
           break;
           case "a":
           filePath = "./sounds/kick-bass.mp3" ;
           break;
           case "s":
           filePath = "./sounds/snare.mp3" ;
           break;
           case "d":
           filePath = "./sounds/tom-1.mp3" ;
           break;
           case "j":
           filePath = "./sounds/tom-2.mp3" ;
           break;
           case "k":
           filePath = "./sounds/tom-3.mp3" ;
           break;
           case "l":
           filePath = "./sounds/tom-4.mp3" ;
           break;
           default:
            filePath = "./sounds/crash.mp3" ;
            break;
      }
    var audio = new Audio(filePath);
    audio.play();
    buttonAnimation(instrumentName);
}

var instrumentList = document.firstElementChild.querySelectorAll(".drum");
document.addEventListener("keydown", function (event){
    handleClick(event.key);
});

instrumentList.forEach(element => {
    element.addEventListener("click", function (){
        element.classList.toggle("white-text-color");
        handleClick(element.innerHTML);
        // element.classList.toggle("white-text-color");
    });
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
    activeButton.classList.remove("pressed");   
    }, 100);
}