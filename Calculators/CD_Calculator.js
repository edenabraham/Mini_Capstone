//  if you deposit $1,000 in a CD that earns 1.75% interest 
//  and matures in 5 years, your CD's ending balance will be 
//  &1,xxx.00 and you would have earned $92.34 in interest
var deposit=1000; var interestRate=1.75; var numberOfYears=5;
var endingBalance; var earned;
endingBalance=deposit*(interestRate/100)*numberOfYears+deposit;
earned=endingBalance-deposit
console.log("if you deposit $"+deposit+" in a CD that earns "+interestRate+"% interest and matures in "+numberOfYears+" years.")
console.log("your CD's ending balancewill be $"+endingBalance+" and you will have earned $"+earned+".")
