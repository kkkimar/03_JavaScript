const container = document.querySelector("#container");
const boxs = document.querySelectorAll("div")
const btn = document.querySelector("#resetBtn");
const span = document.querySelector("span");


//클릭하면 클래스 추가 

for(let i=0;i<boxs.length;i++){
  boxs[i].addEventListener("click",(e)=>{

    if(span.textContent.length ==10) {
      alert("10자 까지만 입력 가능")
      return;
    }
    //클릭한 숫자 가져오기 + span에 넣기
    let str = e.target.innerText;
    span.innerText += str;
    
  })
}

btn.addEventListener("click",()=>{
  span.innerText="";
});





