function multiplicationTable (size: number): number[][] {
  let table: number[][] = [];
  for (let i = 1;i<=size;i++){
    let singleTable: number[] = [];
    for (let j=1;j<=size;j++){
      singleTable.push(i*j);
    }
    table.push(singleTable);

  }
  return table;
}
console.log(multiplicationTable(3))

