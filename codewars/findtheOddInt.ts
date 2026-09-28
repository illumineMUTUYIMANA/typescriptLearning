export const findOdd = (xs: number[]): number => {
  let obj:any ={}
  for (let num of xs){
    obj[num] = (obj[num]||0)+1;
  }
  let result :number | undefined = undefined;
  for (let n in obj){
    if(obj[n]%2!==0){
       result =Number(n);
    }
  }
  if (result === undefined){
    throw new Error ('unable to complete')
  }
  return result;
};

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
