var movingBtn = document.querySelectorAll('.movingBtn');
movingBtn[0].style.backgroundColor = "darkGreen";
console.log(movingBtn)
var listOfPanels = document.querySelectorAll('.achivPanel');

let firstClick = false;
for (let i = 0; i < movingBtn.length; i++) { //initial click, the first panel gets hidden
  firstClick = true;
  movingBtn[i].addEventListener('click', function() {
    listOfPanels[i].removeAttribute("hidden");

    movingBtn[i].style.backgroundColor = 'darkGreen';
    // movingBtn[i].setAttribute('style', 'backgroundColor: darkGreen !important');
    for (let j = 0; j < movingBtn.length; j++) {
      if (j != i) {
        listOfPanels[j].setAttribute("hidden", "true");
        movingBtn[j].style.backgroundColor = 'transparent';

      } 
    }
  })
}

