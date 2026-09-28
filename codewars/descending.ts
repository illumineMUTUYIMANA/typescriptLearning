function descendingOrder(n:number){
  let arrOfDigit:Array<number> = Array.from(String(n), Number);
  let sortedDigit = arrOfDigit.sort((a,b)=>b-a).join('');
  return Number(sortedDigit) ;
}
console.log(descendingOrder(1021))


export{}