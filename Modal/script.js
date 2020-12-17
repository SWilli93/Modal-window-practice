const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
//querySelector can only select one element at a time so therefore we add All to the end to select more than one
const btnsOpenModal = document.querySelectorAll(".show-modal");
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  console.log("button clicked");
  //at the event click remove the class called hidden from modal and overlay
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
//console.log(btnsOpenModal[i].textContent);

//key up = event happens as finger is lifted off key
//key press = happens as finger is pressed continuously upon key
//key down = fires as the key is pushed down (usually this one is used)
document.addEventListener("keydown", function (e) {
  // the event listener is at key dow
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    // if the key that was pushed down was the escape key
    //and if the modal does not contain the hidden class
    closeModal();
    //close it
  }
});
