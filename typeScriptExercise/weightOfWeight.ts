export function orderWeight(strng: string): string {
  let result : string[] = strng.split(' ');
  function weights(num:string):number{
    let arrOfDigit: number[] = Array.from(String(num),Number);

    return arrOfDigit.reduce((acc,curr)=>acc+curr,0);
  }

  result.sort((a,b)=>{
    let weight1 = weights(a);
    let weight2 = weights(b);
    if(weight1!== weight2){
      return weight1-weight2;
    }
    return a.localeCompare(b)
    
  })
  

 return result.join(' ');
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));