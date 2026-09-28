export function fizzbuzzPlusPlus(numbers: number[], words: string[]): (string|number)[] {
  let results:(number|string)[] = []
  let end =1;
  for(let el of numbers){
    end*=el;
  }
  for(let i=1;i<=end;i++){
    let result: string ='';
    for(let j=0;j<numbers.length;j++){
        if(i%numbers[j]===0){
            result+=words[j];
        }
    }
    if(result ===''){
      results.push(i);
    }else{
      
    results.push(result);
    }

 }
 return results;

}

console.log(fizzbuzzPlusPlus([2,3,5],['fizz','buzz']));