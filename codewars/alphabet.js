export function alphabetPosition(text) {
    let letters = "abcdefghijklmnopqrstuvwxyz".split('');
    let text1 = text.toLowerCase().split('');
    let result = [];
    for (let char of text1) {
        if (letters.includes(char)) {
            result.push(letters.indexOf(char) + 1);
        }
    }
    return result.join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
