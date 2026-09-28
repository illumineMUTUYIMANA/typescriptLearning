type User ={
  id : number
  name: string
}

const users: Array<User> = [
  { id: 1, name: 'Alice' },
 { id: 2, name: 'Bob' },
 { id: 3, name: 'Charlie' },
 ];

// // const transformed = transformToObject(users);
// // console.log(transformed);
//  // Output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }

 function transform (arr:Array<User>){
  let newArr=[];
  for (let el of arr ){
    // for( let k in el){
    //   newArr.push(el[k]);
    // }
    newArr.push(el.id,el.name);

  }
  
  let obj:any = {};
  for(let i = 0;i<newArr.length;i++){
    obj[newArr[i]] = newArr[i+1];
    i++;
  }return obj;
 }
 console.log(transform (users));

// function multiply(a, b) {
//   // Problem: If b is 0, it evaluates to false and becomes 1
//   b = b ?? 2; 
//   return a * b;
// }
// console.log(multiply(4, 12));