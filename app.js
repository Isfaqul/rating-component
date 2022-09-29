const requestPage = document.querySelector(".rating-request-page");
const thanksPage = document.querySelector(".rating-thanks-page");
const ratingBtns = document.querySelectorAll(".rating-circle");
const submitBtn = document.querySelector(".btn-submit");
const thanksMessage = document.querySelector("#selected-rating");
let selectedRatingVal;

// Event Listeners

for (let rating of ratingBtns) {
  rating.addEventListener("click", selectRating);
}

submitBtn.addEventListener("click", redirectToThanks);

// Functions

function selectRating(e) {
  selectedRatingVal = e.target.innerText;
  removeActiveClass();
  e.target.classList.add("active-rating");
  console.log(selectedRatingVal);
}

function removeActiveClass() {
  for (let rating of ratingBtns) {
    rating.classList.remove("active-rating");
  }
}

function redirectToThanks() {
  if (selectedRatingVal) {
    requestPage.classList.remove("active-page");
    thanksMessage.innerText = `You selected ${selectedRatingVal} out of 5`;
    thanksPage.classList.add("active-page");
  }
}
