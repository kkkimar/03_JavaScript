
function createTable(){
  const start = Number(document.getElementById("start").value);
  const end = Number(document.getElementById("end").value);
  const tr = document.getElementById("thead-row");
  const tbody = document.getElementById("tbody");
  
  /* 테이블 제목 */
  tr.innerHTML = "";
  for(let dan = start; dan <= end ; dan++ ){
    tr.innerHTML += `<th>${dan} 단</th>`;   
  }


   tbody.innerHTML = "";
  /* 테이블 내용 */
  for(let num = 1; num<=9 ; num++){
    
    //곱해지는 수 (또는 n번째 줄)
    let str = "<tr>";

    for(let dan = start; dan<=end; dan++){
      str += `<td>${dan} X ${num} = ${dan* num}</td>`;

    }

    str += "</tr>"
    
    tbody.innerHTML += str;
  }
}