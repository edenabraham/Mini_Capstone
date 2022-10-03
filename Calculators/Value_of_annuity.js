// To fund an annuity that pays $3,000 monthly for 20 years
// and earns an expected 2.5% interest, you would need to invest
//$566,141.46 today.

 var interestRate=2.5; 
 
 var years=20; 
var paymentMonthly=3000;
var interestDecimalForm=interestRate/100;
var periodInterestRate=interestDecimalForm / 12;
var numberOfPayments=12*years;

var presentValue=paymentMonthly*[(1-(1+periodInterestRate)^numberOfPayments)/periodInterestRate];
console.log(presentValue)