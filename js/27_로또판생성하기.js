/* class가 number인 div 생성 */
const div = document.createElement("div");
const numberContiner = document.querySelector("#number-continer")

// div에 클래스 추가
div.classList.add("number");

/* number-continer에 자식 요소로 추가 */
numberContiner.append(div);

//div innerText로 1~45까지 출력
for(let i = 1 ; i<46; i++){
  
}

