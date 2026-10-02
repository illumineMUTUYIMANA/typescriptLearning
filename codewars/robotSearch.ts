
function searchDisable(log:string|string[]):string {
  let logArr : string[]= []
  if (typeof log === 'string') {
    logArr = log.trim().split(/\s+/); 
  }else{
    logArr = log;
  }
  interface obj{
    [k:string]: number
  }

  let frequencies :obj= {};
  for (let item of logArr) {
    frequencies[item] = (frequencies[item] || 0) + 1;
  }

  let totalMatchingCount:number = 0;

  for (let item in frequencies) {
    let count :number= frequencies[item];

    if (count <= 3) continue;

    if (item.length !== 4) continue;

    let thirdDigit:string= item[2]; 
    if (thirdDigit !== '2' && thirdDigit !== '3') continue;

    let num:number = Number(item);
    if (isNaN(num) || num < 2) continue;
    
    let isPrime:boolean = true;
    let sqrnum:number= Math.sqrt(num);
    for (let i = 2; i <= sqrnum; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (!isPrime) continue;

    totalMatchingCount += count;
  }

  if (totalMatchingCount > 50) {
    return "match disable bot";
  }

  return "no match continue";
}

console.log(searchDisable('8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923'))// match disable


