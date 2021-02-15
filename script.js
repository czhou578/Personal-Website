var movingBtn = document.querySelectorAll('.movingBtn');
var listOfPanels = document.querySelectorAll('.achivPanel');
//var firstPanel = document.querySelector('#panel-1');
//var secondPanel = document.querySelector('#panel-2');

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

// movingBtn[1].addEventListener('click', function() { //first panel
//   firstPanel.setAttribute("hidden", "true");
//   secondPanel.removeAttribute("hidden")
// })

// movingBtn[0].addEventListener('click', function() { //first panel
//   // firstPanel.setAttribute("hidden", "false");
//   firstPanel.removeAttribute("hidden");
//   console.log("test")
// })
