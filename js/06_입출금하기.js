/* prompt 사용 연습 */

function test(){
  const password = prompt("비밀번호를 입력하세요");

  // 확인-> 입력한 문자열
  // 취소-> null

  if(password == null){
    alert("취소");
  } else{
    //확인
    if(password == '1234'){
      alert("비밀번호 일치");
    }else{
      alert("비밀번호가 일치하지 않습니다");
    }
  }
}


const amount = document.getElementById("input1"); //금액입력 input
let balance = 10000; //초기 잔액
const password = '1234' ; //초기 비번'
const result = document.getElementById("result");

/* 입금 */
function deposit(){
  const val = Number(amount.value);
  balance += val;
  result.innerText = balance;
}

/* 출금 */
function withdrawal(){
  const pw = prompt("비밀번호를 입력하세요");
  const val = Number(amount.value);

  if(pw == null){
    alert("취소");
  } else{
    if(pw == password){
      alert("비밀번호 일치");
      if(val > balance){
        alert("출금 금액이 잔액보다 클 수 없습니다");
      }else{
        balance -= val;
        alert(`${val}원이 출금 되었습니다. 남은 잔액 : ${balance}원`);
        result.innerText = balance;
      }
    }else{
      alert("비밀번호가 일치하지 않습니다");
    }
  }
}