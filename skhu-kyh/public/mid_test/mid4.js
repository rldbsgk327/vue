let array = new Array();

for(let i=0; i<100; i++){
    array[i] = Math.floor(Math.random()*100+1);
}  

let even = array.filter((e)=>e%2 === 0);
let count = even.length;

console.log(count);
