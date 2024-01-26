const resName = document.querySelector("#res_name");
const displayRes = document.querySelector("#display_res");
const displaySpan = document.querySelector(".top_right span");
const correctBtn = document.querySelector("#correction_btn");
const menuContainer = document.querySelector(".menu_list");
const container = document.querySelector("#container");


/* 식당명 input에서 나오면 blur */

resName.addEventListener("blur",()=>{
  const value = resName.value;

  resName.style.display ="none";
  displayRes.style.display ="block";
  displaySpan.innerText = value;

  if(value.trim().length == 0){
    displaySpan.innerText = "식당명을 입력하세요";
  }
    
});


displayRes.addEventListener("click",()=>{
  displayRes.style.display = "none";
  resName.style.display ="block";
  resName.innerText= "";
  resName.focus();
});


/* 수정버튼 누리면 버튼 생성 */

correctBtn.addEventListener("click",()=>{
  correctBtn.style.display = "none";


  // 버튼 생성
  const btnBox = newEl("div",{},["btn_container"]);
  const addBtn = newEl("div",{},["add_btn"]);
  const delBtn = newEl("div",{},["del_btn"]);
  const closeBtn = newEl("div",{},["close_btn"]);


  btnBox.append(addBtn,delBtn,closeBtn);

  addBtn.innerText = "추가";
  delBtn.innerText = "삭제";
  closeBtn.innerText = "종료";

  container.append(btnBox)


  //메뉴판 수정 모드 (선생님)

  const menuList = document.querySelectorAll(".menu_item");
  menuList.forEach(menu=>{
    const menuName = menu.children[0].textContent;
    let menuPrice  = menu.children[1].textContent;

    // 가격에서 "원" 글자 제거
    menuPrice = menuPrice.substring(0, menuPrice.length-1);

    //메뉴 내부 요소 생성
    const menuContent = createMenuContent();

    menuContent.menuNameInput.value = menuName =="미입력"? "" : menuName;
    menuContent.menuPriceInput.value = menuPrice == 0 ? "" : menuPrice;

    menu.innerHTML = "";

    for(let key in menuContent){
      menu.append(menuContent[key]);
    }

  }); //foreach문


  /* close 버튼 클릭시 */
  /* 메뉴 입력 최대 15개 */

  closeBtn.addEventListener("click", ()=>{

   correctBtn.style.display = "block";
   btnBox.style.display = "none"

    //메뉴판 모드 변경
    const menuList = document.querySelectorAll(".menu_item");
    
    menuList.forEach(menu => {
      const menuNameInput = menu.children[1].value;
      const menuPriceInput = menu.children[2].value;

      const menuName = newEl("span", {}, ["menu-name"]);
      menuName.textContent = menuNameInput.trim().length == 0 ? "미입력" :  menuNameInput;
      
      const menuPrice = newEl("span",{},["menu-price"]);
      menuPrice.textContent = (menuPriceInput.trim().length == 0 ? "0" :menuPriceInput) + "원";

      menu.innerHTML = "";
      menu.append(menuName,menuPrice);
    });//forEach문


  })//close btn click

  /* 추가 버튼 클릭시 */
  addBtn.addEventListener("click",()=>{

    //최대 15개  추가
    if(document.querySelectorAll(".menu_item").length>=15){
      alert("더 이상 메뉴를 추가 할 수 없습니다");
      return; // 함수 종료 + 아래 실행 X
    }

    //li.menu 생성
    const li = newEl("li",{},["menu_item"]);

    const menuContent = createMenuContent();

    for(let key in menuContent){
      li.append(menuContent[key]);
    }

    menuContainer.append(li);


  });//addBtn click

  delBtn.addEventListener("click",(e)=>{
    const checkMenu =document.querySelectorAll(".menu-check:checked");
    checkMenu.forEach(item=>{
      item.parentElement.remove();
    })
  })
});

/* 사용법 잘 봐두기 ! =========================================================================== */



/* 메뉴 내부 요소 생성 함수 (선생님))*/

const createMenuContent = ()=>{
  //체크박스 생성
  const check = newEl("input", {type:"checkbox"}, ["menu-check"]);
  //메뉴명 input 생성
  const menuNameInput = newEl("input",{type : "text",placeholder:"메뉴명"},["menu-name-input"]);
   // 메뉴 가격 input 생성
  const menuPriceInput = newEl("input", {type:"text", placeholder:"가격"}, ["menu-price-input"]);

  return {"check" : check, "menuNameInput" : menuNameInput, "menuPriceInput" : menuPriceInput};

}


/* 요소 생성 + 속성 추가 + 클래스 추가 함수 (선생님) */

const newEl = (tag, attr, cls) => {
  const el = document.createElement(tag); /* 요소 생성 */

  for(let key in attr){ /* '객체'로 전달 받은 속성을 요소에 추가 */
    el.setAttribute(key, attr[key]);
  }
  for(let className of cls){  /* '배열'로 전달 받은 클래스명을 요소에 추가 */
    el.classList.add(className);
  }
  return el; /* 생성된 요소 반환 */
}



