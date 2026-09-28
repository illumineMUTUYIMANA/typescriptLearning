export const digitalRoot = (n:number):number => {
  
  while(n>9){
    let arrOfDigit: number[] = Array.from(String(n),Number);
    let sum: number = arrOfDigit.reduce((acc,curr)=>acc+curr,0);
    n=sum;
  }
  return n;
};

console.log(digitalRoot(456));