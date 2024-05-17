let heart = document.getElementsByClassName('productLike');
let isClicked=false;
heart.addEventListener('click', function () {
  // isClicked = !isClicked;
  if (isClicked) {
    heart.style.color = 'red';
  } else {
    heart.style.color = 'transparent';
  }
});






