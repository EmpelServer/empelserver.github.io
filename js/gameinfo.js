const gameButton1 = document.getElementById("gameButton1");
const gameButton2 = document.getElementById("gameButton2");
const gameButton3 = document.getElementById("gameButton3");
const game1 = document.getElementById("game1");
const game2 = document.getElementById("game2");
const game3 = document.getElementById("game3");

gameButton1.addEventListener("click", function(e) {
    changeActive(game1, gameButton1);
});
gameButton2.addEventListener("click", function() {
    changeActive(game2, gameButton2);
});
gameButton3.addEventListener("click", function(e) {
    changeActive(game3, gameButton3);
});
function changeActive(game, gameButton) {
    
    var elementInfo = document.querySelectorAll(".gameInfo.active");
    var elementButton = document.querySelectorAll(".gameButton.selected");
    [].forEach.call(elementInfo, function(el){
        el.classList.remove("active");
        el.setAttribute("style", "display: none");
    });
    [].forEach.call(elementButton, function(el){
        el.classList.remove("selected");
    });
    game.classList.add("active");
    game.setAttribute("style", "display: block");
    // gameButton.className = 'gameButton selected';
    gameButton.classList.add("selected");
}