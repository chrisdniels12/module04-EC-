// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
//  check if the input is not a number, if it is, force the user to keep entering values
while (isNaN(investment)) {
   investment = parseFloat(prompt('Enter investment amount as xxxx.xx'))
}
rate = parseFloat(prompt('Enter interest rate as xx.x'));
//  check if the input is a not a number or its less than 1 or greater than 6.
while (isNaN(rate) || rate < 0 || rate > 6 ) {
    rate = parseFloat(prompt('Enter interest rate as xx.x'))
 }
years = parseInt(prompt('Enter the number of years you want to invest for'));
//  check if the input is not a number or its not between 1 and 30
while (isNaN(years) || years < 1 || years > 30 ) {
    years = parseFloat(prompt('Enter the number of years you want to invest for'))
 }
// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);