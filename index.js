let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let p = document.querySelector("p");
let btns = ["yellow", "green", "red", "blue"];
document.addEventListener("keypress", function () {
  if (started == false) {
    // console.log("game is started");
    started = true;
  }
  levelUp();
});
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 200);
}
function levelUp() {
  userSeq = [];
  level++;
  p.innerText = `Level ${level}`;
  let rndIdx = Math.floor(Math.random() * 3);
  let randColor = btns[rndIdx];
  let rndBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  // console.log(gameSeq);
  gameFlash(rndBtn);
}
function checkAns(idx) {
  // console.log("level is ", level);
  // let idx = level - 1;
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
    // console.log("same value");
  } else {
    p.innerHTML = `Game Over! <b>Your score is ${level} </b> <br>Press any key to start game`;
    p.style.color = `rgb(99, 15, 15)`;
    p.style.fontSize = `2rem`;
    document.querySelector("body").style.backgroundColor = `rgb(255, 81, 0)
`;
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = `rgb(99, 91, 91)`;
    }, 150);
    reset();
  }
}
function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  // console.log(userSeq);
  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".box");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
