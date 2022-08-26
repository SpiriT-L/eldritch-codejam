const ansients = document.querySelector('.ansients');
const ancientsCardsBlock = document.querySelector('.ancients__cards_block');
const ancientsCardsItem = document.querySelector('.ancients__cards_item');
const ancientsCardsTitle = document.querySelector('.ancients__cards_title');
const ancientsCardsImg = document.querySelector('.ancients__cards_img');



const clickOnAancient = () => {

  // for (let i = 0; i < ancientsCardsImg.length; i++) {
  //   ancientsCardsImg[i].addEventListener("click", function() {
  //     let current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className.replace(" active", "");
  //     this.className += " active";
  //   });
  // }

  ancientsCardsImg.classList.toggle('active')


  // for (let i = 0; i < ancientsCardsImg.length; i++) {
  //   // const element = array[i];
  // if (ancientsCardsImg !== ancientsCardsImg.classList.contains('active')){
  //   ancientsCardsImg.classList.add('active')
  // } else {
  //   ancientsCardsImg.classList.del('active')
  // }
  // }



}

const setAncients = () => {
  const titleAncients = String().padStart(2, '0')
  console.log(titleAncients);

}
setAncients()


ancientsCardsItem.addEventListener('click', clickOnAancient);
