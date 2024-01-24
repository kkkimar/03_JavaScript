/* 배열.forEach()

  [작성법]
  배열.forEach( (현재 요소 [,index [, 현재 배열]]) => {
      반복 수행할 구문
  });
*/

const numbers1 = [10,20,30,40,50];

// numbers1.forEach((item)=>console.log(item));

numbers1.forEach((item,index)=>{
  console.log(index, item);
})


// -------------------------------------------------



/* 배열.map()

  [작성법]
  배열.map((현재 요소 [,index [,현재 배열]) => {
      return 변경된 요소;
  }
*/

const numbers2 = numbers1.map((item)=>{
  return item *2;
});
console.log("numbers2 : ",numbers2);



// -------------------------------------------------




/* 배열.reduce()
[작성법]
  var result = array.reduce(function(accumulator, 현재 요소[,index [,array]]) {
      return accumulator + value;

  }, initialAccumulator);

  // accumulator: 누산기, 현재까지의 축적된 값 ( == sum)
  // initialAccumulator: 초기 누산기 값
*/

let sum1 = 0;
for(let i=0 ; i<numbers2.length ; i++){
  sum1 += numbers2[i];
}
console.log("sum1", sum1);

// -------------------------------------------------

const sum2 = numbers2.reduce((acc,item)=>{
  return acc + item 
},0)

console.log('sum2 : ', sum2);


// -------------------------------------------------

/* 향상된 for문 

  //iterator = 반복자
  //iterable 속성을 띈다 
  //== 0번부터 순서대로 하나씩 꺼낼 수 있다 

*/

/* for ~ of */

/* 타입이 다 다르지만 iterator(반복자) 속성을 가지고 있음 */
const htmlCollection = document.getElementsByClassName("test");
const nodeList = document.querySelectorAll(".test");
const numbers3 =[30,60,90,120,150];

for(let item of htmlCollection){
  item.textContent = item.textContent + "입니다"
}

for(let item of nodeList){
  item.style.fontSize = "20px"
}

for(let item of numbers3){
  console.log(item);
}




