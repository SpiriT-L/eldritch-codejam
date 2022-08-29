// import defaults from 'playing-field';

const ansients = document.querySelector('.ansients');
const ancientsCardsBlock = document.querySelector('.ancients__cards_block');
const ancientsCardsItem = document.querySelectorAll('.ancients__cards_item');
const ancientsCardsTitle = document.querySelector('.ancients__cards_title');
const ancientsCardsImg = document.querySelector('.ancients__cards_img');
const playingField = document.querySelector('.playing-field');
const images = document.querySelector('.images');

console.log(ancientsCardsImg);

const addItemActive = (event) => {
  const targets = event.currentTarget;
  targets.classList.add('active');

  console.log(targets);
};
// console.log(addItemActive(ancientsCardsImg));
// const removeItemActive = (event) => {
//   const targets = event.currentTarget;
//   targets.classList.remove('active');
// };

// document.addEventListener('click', (event) => {
//   const click = event.composedPath().includes(ancientsCardsImg);
// console.log(click);
// if (!click) {
//   addItemActive(event);
// }
// // console.log(event);
// })

const clickOnAancient = (event) => {
  const targets = event.currentTarget;

  // if (targets.classList.contains('active')) {
  //   removeItemActive(event);
  // } else {
  //   addItemActive(event);
  // }
  // console.log(this.className);
  // addItemActive(event);
  // if (targets == targets.classList.contains('active')) {
  //   // removeItemActive(event);
  // } else if(targets !== targets.classList.contains('active')) {

  //   //
  // }
  // removeItemActive(event);

  //   const targets = event.currentTarget;
  //   const isTargets = targets.classList.contains('active');
  //   const srcUrl = event.srcElement.currentSrc;

  //   const addImages = (event) => {
  //     const img = document.createElement('div');
  //     img.className = 'picture';
  //     img.innerHTML = `<img
  //   src="${srcUrl}"
  //   alt=""
  //   class="ancestral-map__img"
  // />`;
  //     images.append(img);
  //     console.log(event);
  //   };

  //   if (targets.innerText == targets.classList.contains('active')) {
  //     targets.classList.add('active');
  //   } else if (targets.classList.contains('active') == true) {
  //     targets.classList.remove('active');
  //   }
  //   console.log(event);
  //   console.log(srcUrl);
  //   // addImages();
  // console.log(addImages());
};

const setAncients = () => {
  const titleAncients = String().padStart(2, '0');
  // console.log(titleAncients);
};

ancientsCardsImg.forEach((ancientsCardsImg) => {
  ancientsCardsImg.addEventListener('click', clickOnAancient);
});
