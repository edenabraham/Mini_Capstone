// 

 var interestRate=2.5; 
 
 var years=20; 
var paymentMonthly=3000;
var interestDecimalForm=interestRate/100;
var periodInterestRate=interestDecimalForm / 12;
var numberOfPayments=12*years;

var presentValue=paymentMonthly*[(1-(1+periodInterestRate)^numberOfPayments)/periodInterestRate];
console.log(presentValue)