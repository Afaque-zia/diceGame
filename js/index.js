// Maintaining the flag to change value when flag is true or false
var flag = true;
var score1 = 0;
var score2 = 0;
var time = 0;
var images = ["one", "two", "three", "four", "five", "six"];
var playgraounds = document.querySelectorAll(".playgraound");

// Function To Run The Game on Space
function run(e) {
  if (e.key == " ") {
    
    var num = Math.ceil(Math.random() * 6);
    if (flag === false) {

      // console.log("First Section is Active");
      score2 += num;
      playgraounds[1].querySelector(".score").innerHTML = score2;
      for (let i = 0; i < num; i++) {
          playgraounds[1].querySelector("img").src = "./"+ images[i] +".png";
      }

    } else {
      // console.log("Second section is Active");
      score1 += num;
      playgraounds[0].querySelector(".score").innerHTML = score1;
      for (let i = 0; i < num; i++) {
        playgraounds[0].querySelector("img").src = "./"+ images[i] +".png";
      }
    }

    flag = !flag;
    for (let i = 0; i < playgraounds.length; i++) {
      playgraounds[i].classList.toggle("active");
    }
  }
  time++
  if(time == 6){
    whoWin();
  }
}

function whoWin() {
  document.querySelector(".maingamearea").style.display = "none";
  document.querySelector(".scoreare").style.display = "block";
  if(score1 > score2){
    document.querySelector(".result").innerHTML = "First Player Won, Score: "+score1;
  }else{
    document.querySelector(".result").innerHTML = "Second Player Won, Score: "+score2;
  }
}
// Event Listener To Run The Function
document.querySelector("body").addEventListener("keypress", run);
