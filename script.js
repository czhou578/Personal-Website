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

var hiddenPic = document.querySelector()
