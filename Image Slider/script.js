// images = 4(0,1,2,3)

let flag = 0;//to match with array[0]


function controller(x) {
  flag = flag + x;
  slideShow(flag);
  //left click
  // flag = 2 + (-1) = 1
  //right click
  // flag = 2 + (+1) = 3
}

slideShow(flag);

function slideShow(num) {
  let slides = document.getElementsByClassName("slide");

  if (num == slides.length){
    flag = 0;
    num = 0;
  }

  if(num < 0){
    flag = slides.length-1;
    num = slides.length-1;
  }

  for (let y of slides) {
    y.style.display = "none";
  }

  slides[num].style.display = "block";//display image at array[0] 

}