let score="50abc"
console.log(typeof score);

let valueNumber=Number(score)
console.log(valueNumber);
// NaN not a number because we cant convert abc in number 
console.log(typeof valueNumber);
//number

let temp=null
let numtemp=Number(temp)
console.log(numtemp);
console.log(typeof numtemp);

/*
"33"=33
"33abc"=NaN
null=0
undefined=NaN
true=1
false=0
*/