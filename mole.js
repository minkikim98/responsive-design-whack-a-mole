// window.addEventListener('DOMContentLoaded', () => {

//   setInterval(() => {
//     const moleHeads = document.querySelectorAll('.wgs_mole-head');
//     for (let moleHead of moleHeads) {
//       moleHead.classList.toggle('wgs_mole-head--hidden');
//     }
//   }, 1000);

// });

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function popUpRandomMole() {
  let moleHeads = document.querySelectorAll(".wgs_mole-head");
  // console.log(moleHeads);
  let randomMole = getRandomIntInclusive(0, 7);
  // console.log(randomMole);
  console.log(moleHeads[randomMole]);
  moleHeads[randomMole].classList.remove("wgs_mole-head--hidden");
  setTimeout(hideMole, 1000, moleHeads[randomMole]);
}

function hideMole(mole) {
  mole.classList.add("wgs_mole-head--hidden");
  setTimeout(popUpRandomMole, 1000);
}

window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(popUpRandomMole, 0);
});