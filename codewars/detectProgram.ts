export function isPangram(phrase: string): boolean {
  const lowerCased = phrase.toLowerCase();
  
  const uniqueLetters = new Set<string>();
  let patern = /[a-z]/;
  
  for (const char of lowerCased) {
    if (patern.test(char)) {
      uniqueLetters.add(char);
    }
  }
  
  return uniqueLetters.size === 26;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));