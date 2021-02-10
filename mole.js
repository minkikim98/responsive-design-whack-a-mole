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
  let moleHeads = document.querySelectorAll(".wgs_mole-head:not(.wgs_mole-head--whacked)");
  if (moleHeads.length === 0) return;
  let randomMole = getRandomIntInclusive(0, moleHeads.length - 1);
  moleHeads[randomMole].classList.remove("wgs_mole-head--hidden");
  setTimeout(hideMole, 3000, moleHeads[randomMole]);
}

function hideMole(mole) {
  mole.classList.add("wgs_mole-head--hidden");
  setTimeout(popUpRandomMole, 1000);
}

window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(popUpRandomMole, 0);
  let moleHeads = document.querySelectorAll(".wgs_mole-head");
  moleHeads.forEach(head => {
    head.addEventListener("click", event => {
      head.classList.add("wgs_mole-head--hidden");
      head.classList.add("wgs_mole-head--whacked");
    });
  });
});