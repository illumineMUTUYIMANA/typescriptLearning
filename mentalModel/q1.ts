interface Sorted {
  string : string[],
  number : number[]
}

function separateTypes(arr:(string | number)[]):Sorted{
 let numbers : Array<number> = [];
 let strings :Array<string> = [];

 for (let element of arr){
  typeof(element)==='string'? strings.push(element): numbers.push(element);
 }
 return {
  number: numbers,
  string: strings
 }
}

console.log(separateTypes([1, "hello", 2, "world", 3]));