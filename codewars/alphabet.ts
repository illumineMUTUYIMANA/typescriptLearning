export function alphabetPosition(text:string):string {
  let letters:string[] = "abcdefghijklmnopqrstuvwxyz".split('');
  let text1:string[] = text.toLowerCase().split('')
  let result:any = [];
  for(let char of text1){
    if (letters.includes(char)){
      result.push(letters.indexOf(char)+1);
      
    }

  }
  return result.join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));