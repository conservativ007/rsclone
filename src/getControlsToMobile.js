// import { player } from "./start_game";
// let arrowUp = document.querySelector(".arrow-up");
// let timerId = null;

// export function getControlsToMobile() {
//   arrowUp.addEventListener("mousedown", () => startJump(timerId));
//   arrowUp.addEventListener("mouseup", () => stopJump(timerId));
// }

// function startJump() {
//   timerId = setInterval(() => {
//     player.y = player.y - 6;
//   }, 1);
// }

// function stopJump(timerId) {
//   clearInterval(timerId);
//   console.log(player)
// }

// -------------------------------





export function getControlsToMobile(player) {
  let bodyWidth = document.body.getBoundingClientRect().width;
  if (bodyWidth >= 700) return;

  let timerId = null;
  let startMove = false;

  let controls = document.querySelector(".controls");
  let item = document.querySelector(".circle");

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);
  document.addEventListener("touchend", handleTouchEnd, false);

  let x1 = null;
  let y1 = null;

  document.querySelector(".controls").style.display = "block";




  function handleTouchStart(e) {
    let firstTouch = e.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
  }

  function handleTouchMove(e) {
    if (!x1 || !y1) return false;

    let firstTouch = e.touches[0];

    let x2 = firstTouch.clientX;
    let y2 = firstTouch.clientY;

    let containerX = controls.getBoundingClientRect().x;
    let containerY = controls.getBoundingClientRect().y;

    let diffX = x2 - containerX;
    let diffY = y2 - containerY;

    moveCircle(diffX, diffY);
    funcDiff(x2 - x1, y2 - y1);
  }

  function moveCircle(x, y) {
    item.style.left = x + "px";
    item.style.top = y + "px";
  }

  function funcDiff(xDiff, yDiff) {
    console.log("x: ", Math.round(xDiff), "y: ", Math.round(yDiff));

    // console.log("y: ", yDiff < -14 && xDiff < -14)

    if (xDiff < 0 && (yDiff === 0 || yDiff <= -10) && startMove === false) {
      startMove = true;
      moveToHero("move left");
      // console.log("move left");
    }

    else if (xDiff < -14 && yDiff < -14 && startMove === false) {
      startMove = true;
      moveToHero("move left and up");
      // console.log("move left and up");
    }

    else if ((xDiff >= -15 && xDiff <= 0) && yDiff < -28 && startMove === false) {
      startMove = true;
      // console.log("move up");
      moveToHero("move up");
    }

    else if (xDiff > 0 && (yDiff === 0 && yDiff >= - 10 && startMove === false)) {
      console.log("move right");
      startMove = true;
      moveToHero("move right");
    }

    else if (xDiff > 0 && yDiff <= -30 && startMove === false) {
      // console.log("move up and right");
      startMove = true;
      moveToHero("move up and right");
    }
  }

  function moveToHero(move) {

    if (move === "move up") {
      timerId = setInterval(() => {
        // console.log("Timer ID: ", timerId);
        player.y = player.y - 6;
      }, 1);
    }

    if (move === "move right") {
      timerId = setInterval(() => {
        player.dx = player.dx += 4;
      }, 10);
    }

    if (move === "move left") {
      timerId = setInterval(() => {
        player.dx = player.dx -= 4;
      }, 10);
    }

    if (move === "move up and right") {
      timerId = setInterval(() => {
        player.dx = player.dx += 2;
        player.y = player.y - 6;
      }, 1);
    }

    if (move === "move left and up") {
      timerId = setInterval(() => {
        player.dx = player.dx -= 2;
        player.y = player.y - 6;
      }, 1);
    }

    // console.log(player.jump())

  }

  function handleTouchEnd() {
    item.style = "transition: 0.2s";

    let styleId = setTimeout(() => {
      item.style = ""
      clearInterval(styleId);
    }, 200);

    console.log("clearTimerID: ", timerId);
    clearInterval(timerId);
    startMove = false;
  }
}



