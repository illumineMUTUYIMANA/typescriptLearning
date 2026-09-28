 const encryptThis = (str: string): string => {
  if (str.length===0)return '';
  let arrOfStr: string[] = str.split(' ');
  let result : string[] =[];
  for (let word of arrOfStr){
    let code:number = word.charCodeAt(0);
    let rest: string[] = word.slice(1).split('');
    if (rest.length > 1) {
      const first = rest[0]!;
      const last = rest[rest.length - 1]!;
      rest[0] = last;
      rest[rest.length - 1] = first;
    }
    let strng :string =code+rest.join('');
    result.push(strng);
  }
  return result.join(' ')
}

console.log(encryptThis('A wise old owl lived in an oak'));