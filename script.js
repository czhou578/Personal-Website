var movingBtn = document.querySelectorAll('.movingBtn');
var listOfPanels = document.querySelectorAll('.achivPanel');

let firstClick = false;
for (let i = 0; i < movingBtn.length; i++) { //initial click, the first panel gets hidden
  firstClick = true;

  movingBtn[i].addEventListener('click', function() {
    listOfPanels[i].removeAttribute("hidden");
    for (let j = 0; j < movingBtn.length; j++) {
      if (j != i) {
        listOfPanels[j].setAttribute("hidden", "true");
      } 
    }
  })
}

// $("#hiddenFirst").hide();
// setInterval(function() {
//   $(".project-image-slideshow")
//     .fadeOut(2000)
//     .next()
//     .fadeOut(2000)
//     .next()
//     .end()
//     .appendTo(".project-image-slideshow")
// }, 4000)
