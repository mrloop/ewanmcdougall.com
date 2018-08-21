const fadeDownText = function() {
  document.getElementsByTagName('body')[0].classList.add('fade-down')
}

const fadeUpText = function() {
  document.getElementsByTagName('body')[0].classList.remove('fade-down')
}

Array.from(document.getElementsByTagName("video")).forEach((video) => {
  video.addEventListener('playing', fadeDownText);
  video.addEventListener('pause', fadeUpText);
});
