

var rightNow = new Date();
var date = rightNow.getDate()
var momth = rightNow.getMonth()
var year = rightNow.getFullYear();
var hour = rightNow.getHours()
var minute = rightNow.getMinutes()
var second = rightNow.getSeconds()
document.getElementById('day').innerText=(date + "/" + momth + "/" + year + " at " + hour + ":" + minute)


var diceNumberBox = document.getElementById("dice");

function init()
{
    var rollButton = document.getElementById("btn");
    rollButton.addEventListener("click", dieRoll());
}
 
function dieRoll(){
    return Math.floor(Math.random() * 6) + 1;
  }


function roll(min, max) {

    var min = Math.ceil(min);
    var max = Math.floor(max);
    var roll = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(roll);
}

document.getElementById("roll").onclick = function() {
    diceRoll(1, 6);
};