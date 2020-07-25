import img1 from "../img/1.PNG";
import img2 from "../img/2.PNG";
import img3 from "../img/3.PNG";
import img4 from "../img/4.PNG";
import img5 from "../img/5.PNG";
import img6 from "../img/6.PNG";
import img7 from "../img/7.PNG";

const images = [img1, img2, img3, img4, img5, img6, img7];
const names = ["BETCONSTRUCT", "NetEnt", "Playtech", "DragonFish", "Novomatic"];
const titles = [
  "Fashon Show",
  "Fashion Club DAPP",
  "Fashion Boutique",
  "Bikini Angels",
  "Live Blackjack",
];
const categories = [
  "classic",
  "video Slot",
  "Table Games",
  "Virtual Poker",
  "Virtual Games",
];
const statuses = [
  "enabled",
  "disabled",
  "disabled",
  "enabled",
  "disabled",
  "disabled",
  "disabled",
  "enabled",
  "disabled",
  "enabled",
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateProviders(start, end) {
  const providers = [];
  for (let i = start; i < start + end; i++) {
    const name = names[getRandom(0, 5)].toUpperCase() + i + getRandom(start, start + end);
    const title = titles[getRandom(0, 5)] + i + getRandom(start, start + end);
    const category =
      categories[getRandom(0, 5)] + i + getRandom(start, start + end);
    const status = statuses[getRandom(0, 10)];
    const image = images[getRandom(0, 7)];
    const id = i + Date.now();
    providers.push({
      id,
      name,
      title,
      status,
      category,
      image
    });
  }
  return providers;
}
class CasinoService {
  getProviders(start, count) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(generateProviders(start, count));
      }, 1000);
    });
  }
}

export default CasinoService;