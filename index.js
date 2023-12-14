let gamebox = document.querySelectorAll(".gamediv");
let playero = true;

gamebox.forEach((element) => {
  console.log(element.innerHTML);
  if (playero === true) {
    element.addEventListener("click", clickfunction);
    function clickfunction() {
      element.innerHTML = "o";
    }
    playero = false;
  } else {
    element.addEventListener("click", clickxfunction);
    function clickxfunction() {
      element.innerHTML = "x";
      
    }
    playero = true;
  }


  checkwinner()
});

function checkwinner(){
    posi1= gamebox[0].innerHTML
    posi2= gamebox[1].innerHTML
    posi3= gamebox[3].innerHTML
    console.log(posi1, posi2 , posi3);
    if(posi1 === posi2 && posi2 === posi3){
        console.log("winner");
    }

}
