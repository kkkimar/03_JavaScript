
const numberContainer = document.querySelector("#number-container")
const btn = document.querySelector("#btn")


//로또판 생성 버튼 클릭시
btn.addEventListener("click",()=>{

  if(numberContainer.children.length == 0 ){
    
    for(let i = 1 ; i<46; i++){
      const div = document.createElement("div");
      div.classList.add("number");
      div.textContent =i;
      numberContainer.append(div);

      //6개까지 클릭 + 다시 클릭시 취소
      div.addEventListener("click",(e)=>{
        removeSelection(e.target);
        toggleSelection(e.target);
      })
    }
  }else{numberContainer.innerHTML=""}
  
});


/**6개까지만 선택 */
function toggleSelection(count){

  let selectedCount = document.querySelectorAll(".selected").length
  if(count.classList.contains("selected")){
    selectedCount++;
  }
  if(selectedCount>7){
    count.classList.remove("selected");
    alert("6개까지만 선택 가능")
  }

};

/** 해당태그 클릭하면 클래스 제거 */

function removeSelection(elm){
  
  /* 요소.classList.toggle(클래스명) */
  elm.classList.toggle("selected");
  
  // const hasClass = elm.classList.contains("selected");
  // if(hasClass){
  //   elm.classList.remove("selected");
  // }else{
  //   elm.classList.add("selected");
  // }
}

/* 요소.classList.toggle(클래스명)
   : 요소의 (클래스명)이 있으면 제거 , 없으면 추가
*/


