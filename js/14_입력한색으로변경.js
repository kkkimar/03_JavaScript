const bg_box = document.querySelectorAll(".bg-box");
const input = document.querySelectorAll("#input-box");
const btn = document.querySelector("#btn");


btn.addEventListener("click",function(){
  
  for(i=0; i<bg_box.length; i++){
    bg_box[i].style.backgroundColor = input[i].value;
  }

});