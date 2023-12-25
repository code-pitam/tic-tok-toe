let gamebox = document.querySelectorAll(".gamediv");
let resetBtn = document.querySelector(".btn")
let restartBtn = document.querySelector(".nbtn");
let winner = document.querySelector(".winner")

let playero = true;

let winpattern=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
]


gamebox.forEach((element) => {

  element.addEventListener("click",()=>{
    console.log("box was clicked");
if(playero){
  element.innerText= "o";
  playero= false
}
else{
  element.innerText = "x";
  playero = true;
}
element.disabled = true;
checkwinner()

})
  
});

function checkwinner(){


  for(val of winpattern){
    console.log(val);
    posi1= gamebox[val[0]].innerText;
    posi2= gamebox[val[1]].innerText;
    posi3= gamebox[val[2]].innerText;
    console.log(posi1, posi2 , posi3);
    if(posi1 != "" && posi2 != "", posi3 != ""){
      if(posi1 == posi2 && posi2 == posi3){

        console.log("winner");

winner.classList.add("w-display");



        
      }
    }
  }
   
    

}
function resetgame() {
    console.log("button clicked");
    playero = true;
    winner.classList.remove("w-display");

    gamebox.forEach((element) => {
      element.innerText = "";
      element.disabled = false;
    });
    
}

resetBtn.addEventListener("click",()=>{
resetgame()
})
restartBtn.addEventListener("click", () => {
 resetgame()
});

