export function getControlsToMobile(player) {
  let bodyWidth = document.body.getBoundingClientRect().width;
  const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

  // if (bodyWidth >= 700) return;
  if (isMobile !== true) return;


  let timerId = null;
  let startMove = false;

  let controls = document.querySelector(".controls");
  let item = document.querySelector(".circle");

  item.addEventListener("touchstart", handleTouchStart, false);
  item.addEventListener("touchmove", handleTouchMove, false);
  item.addEventListener("touchend", handleTouchEnd, false);

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
    prepareForTheMove(x2 - x1, y2 - y1);
  }

  function prepareForTheMove(x, y) {
    if (x < -20 && (y <= 10 && y >= -20) && startMove === false) {
      startMove = true;
      moveToHero("move left");
    }

    else if (x < -20 && y <= -21 && startMove === false) {
      startMove = true;
      moveToHero("move left and up");
    }

    else if ((x >= -19 && x <= 19) && y < -29 && startMove === false) {
      startMove = true;
      moveToHero("move up");
    }

    else if ((x >= 20 && x <= 49) && y < -29 && startMove === false) {
      startMove = true;
      moveToHero("move up and right");
    }

    else if (x >= 30 && (y >= -20 && y <= 20) && startMove === false) {
      startMove = true;
      moveToHero("move right");
    }
  }

  function moveCircle(x, y) {
    item.style.left = x + "px";
    item.style.top = y + "px";
  }

  function moveToHero(move) {

    if (move === "move up") {
      timerId = setInterval(() => {
        player.y = player.y - 7;
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
        player.sx = 100;
      }, 10);
    }

    if (move === "move up and right") {
      timerId = setInterval(() => {
        player.dx = player.dx += 2;
        player.y = player.y - 7;
      }, 1);
    }

    if (move === "move left and up") {
      timerId = setInterval(() => {
        player.dx = player.dx -= 2;
        player.y = player.y - 7;
      }, 1);
    }
  }

  function handleTouchEnd() {
    item.style = "transition: 0.2s";

    let styleId = setTimeout(() => {
      item.style = ""
      clearInterval(styleId);
    }, 200);

    clearInterval(timerId);
    startMove = false;
  }
}



