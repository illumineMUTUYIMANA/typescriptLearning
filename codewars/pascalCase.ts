export function camelCase(str: string): string {
  if (!str.trim()) return '';
  str =str.trim();
  let arrOfStrings = str.split(/[-_\s]+/);
  let result = arrOfStrings.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
  
  return result.join('');
}


console.log(camelCase('tast case'));