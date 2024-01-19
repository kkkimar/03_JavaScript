const createBox = document.querySelector("#createBox");
const container = document.querySelector(".container");

/* createBox 버튼 클릭시 div.box 생성하여 
   container에 마지막 자식으로 추가하기
*/

createBox.addEventListener("click",() => {
  
  /* 1. div 요소 생성 */
  const box = document.createElement("div");
  console.log(box); //만들어졌으나 화면에는 안 보임

  /* 2. 만들어진 div요소에 "box"클래스 추가 */
  box.classList.add("box");

  /* 3. container의 마지막 자식으로 div 요소 추가 */
  container.append(box);

  /* 4. input 요소 생성*/ 
  const input = document.createElement("input");
  input.type = "text" //input의 type 지정
  console.log(input); //아직 화면에는 안보임

  /* 5. 생성된 input을 box의 마지막 자식으로 추가 */
  box.append(input);
});


/* 
  요소.classList : 요소의 클래스 목록
  -> 클래스 존재여부, 추가, 제거 등이 가능

  * 요소.classList -> 요소 목록이 배열 형식으로 반환

  * 요소.classList.contains("클래스명")
  -> 클래스가 있으면 true, 없으면 false 반환

  * 요소.classList.add("클래스명")
  -> 클래스 추가

 * 요소.classList.remove("클래스명")
  -> 클래스 제거

*/


//====================================================
/* innerHTML로 요소 추가하기 */
const innerHTMLBox = document.querySelector("#innerHTMLBox");

innerHTMLBox.addEventListener("click",() => {
  /* container의 이전 내용에 
    "<div class="box"></div>" 을 누적 + HTML 해석
  */

  container.innerHTML += '<div class="box"><input type="text"></div>';
  //input에 쓴 이전 내용들이 지워지게됨
  /* 
        * innerHTML 요소 생성 원리
      
      ex) A.innerHTML = "...";     (...에는 태그 포함)

      1) 특정 요소(A) 내부의 모든 내용(코드) 삭제

      2) 새로운 내용(...)을 A에 내용으로 대입

      3) HTMLParser를 이용해서 ...에 포함된 태그를 해석

      (요약. 이전 내용 다 지우고 다시 추가한 후 해석하기)
  */

});