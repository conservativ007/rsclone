import { score, player, gameSpeed } from './start_game';
import { informForDesktop } from "./functions/functions.js";
import { canvas } from './index';
import Coin from './coin';

import Text from './text';
import { lang } from './lang';
import getRandomInt from './get_random_int';

let coin;
const coins = [];

let coinsText;

export const coinsCounter = {
  counter: 0,
};

let randTime;
const arrCoinRandY = [100, 150, 200, 250];

function getCoin() {
  coinsText = new Text(
    `${lang[localStorage.getItem('langSelected')].coinsTxt} ${coinsCounter.counter}`, informForDesktop.actualCoinsTextLeft, informForDesktop.actualCoinsTextTop, 'left', '#212121', '20',
  );

  coinsText.Draw();

  if (score % 200 === 0) {
    randTime = getRandomInt(20, 100);
    randTime += 200;
  }

  if (score % randTime === 0) {
    coin = new Coin({
      x: canvas.width,
      y: arrCoinRandY[getRandomInt(0, 4)],
      width: 504,
      height: 84,
      numberOfFrames: 6,
      ticksPerFrame: 4,
      gameSpeed,
    });

    coins.push(coin);
  }

  if (coins.length > 0) {
    coins.forEach((coin) => {
      coin.start();

      if (
        player.dx < coin.x + (coin.width / 6)
        && player.dx + (player.width / 10) - 10 > coin.x
        && player.y < coin.y + coin.height
        && player.y + player.height >= coin.y
      ) {
        coin.y = 10000;
        coin.playCoinSound();
        coinsCounter.counter += 1;
      }

      if (coin.x < -50) {
        coin.y = 10000;
      }
    });
  }
}

export { getCoin };
