const numberPad = document.querySelectorAll("#number div");
const numberDisplay =document.querySelector("#numberDisplay");
const resetBtn = document.querySelector("#resetBtn");
const addBtn = document.querySelector("#addBtn");
const numberList = document.querySelector("#numberList");
const display = document.querySelector("#display")



for(let i=0; i<numberPad.length; i++){
  
  
  numberPad[i].addEventListener("click",(e)=>{
    let str =e.target.innerText;
    numberDisplay.innerText += str;
  });
}


//추가버튼 누르면 전화번호 리스트에 번호 추가
addBtn.addEventListener("click",()=>{
  const div = document.createElement("div");
  div.classList.add("numberList");

  const phonenumber = document.createElement("span");
  phonenumber.classList.add("phonenumber");
  phonenumber.textContent = numberDisplay.innerText


  const star = document.createElement("span");
  star.classList.add("star");
  star.textContent = "☆";


  const del = document.createElement("span");
  del.classList.add("delete");
  del.innerHTML = "&times;";

  div.append(phonenumber);
  div.append(star);
  div.append(del);
  
  display.append(div);

  numberDisplay.innerText ="";

  del.addEventListener("click",(e)=>{
    const parent = e.target.parentElement; 
    parent.remove();
  });

  star.addEventListener("click",()=>{
    div.classList.toggle("red");
    if(star.textContent = "★") star.textContent = "☆"
  });

});



//초기화버튼 누르면 초기화
resetBtn.addEventListener("click",()=>{
  numberDisplay.innerText = "";
  
});