

var movingBtn = document.querySelectorAll('.movingBtn');
movingBtn[0].style.backgroundColor = "darkGreen";
// console.log(movingBtn)
var listOfPanels = document.querySelectorAll('.achivPanel');

let firstClick = false;
for (let i = 0; i < movingBtn.length; i++) { //initial click, the first panel gets hidden
  firstClick = true;
  movingBtn[i].addEventListener('click', function() {
    listOfPanels[i].removeAttribute("hidden");

    movingBtn[i].style.backgroundColor = 'darkGreen';
    for (let j = 0; j < movingBtn.length; j++) {
      if (j != i) {
        listOfPanels[j].setAttribute("hidden", "true");
        movingBtn[j].style.backgroundColor = 'transparent';

      } 
    }
  })
}

const progressLine = document.querySelector('#connect-line')
console.log(progressLine)

window.addEventListener("scroll", function(event) {
  var top = this.scrollY,
      left =this.scrollX;
  if (top >= 533.5 && top <= 800) {
    progressLine.removeAttribute('fill')
    progressLine.setAttribute('fill', "url(#left-to-right)")
  }
});

gsap.registerPlugin(MotionPathPlugin);

MotionPathPlugin.convertToPath('ellipse, line')

gsap.to('#ellipse', {
  motionPath: {
    path: "#path",
    start: 1,
    end: 0,
    align: "#path",
    alignOrigin: [0.5, 0.5],
    fill: "4DAF4C"
  },
  duration: 7,
  ease: "power1.inOut"
})







