// Node.js program to demonstrate the  
// process.hrtime.bigint() Property  
     
// Include process module  
const process = require('process');  
    
// Printing process.hrtime.bigint() property value  
const start = process.hrtime.bigint();
// 191051479007711n
console.log("Start: " + start);

setTimeout(() => {
  const end = process.hrtime.bigint();
  // 191052633396993n
  console.log("End: " + end);

  console.log(`Benchmark took ${end - start} nanoseconds`);
  // Benchmark took 1154389282 nanoseconds
}, 1000);