export function longestConsec(strarr: string[], k: number): string {
   const n = strarr.length;
   if (n === 0 || k > n || k <= 0) return "";
  let longestStr = "";
  let arr:string[] = [];
  for (let i=0;i<strarr.length; i++){
    if (i===strarr.length-1){
      arr.push(strarr[i]);
      break;
    }
    let combined  =''
    for (let j=i;j<=i+(k-1);j++){
      if (strarr[j]===undefined)break;
      combined+=strarr[j];
    }
    arr.push(combined);
  }
  interface Obj {
    [index:string] : number
  }
  let obj:Obj = {};
  for (let el of arr){
    obj[el] = el.length
  }

  let length:number[] = Object.values(obj)
  let high = Math.max(...length);
  for (let word in obj){
    if (obj[word]===high)return word;    
  }return '';
}
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"],3))