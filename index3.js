//Calculating NHIF deductions;

function calculateDeduction(grossNet) {

  let deduction = 0;

  if (grossNet <=5999 )
   {
         deduction = 150;
  }
   else if (grossNet >= 6000 && grossNet <= 7999) {

          deduction = 300;

  } 
  else if (grossNet >= 8000 && grossNet <= 11999) {

          deduction = 400;

  }
   else if (grossNet >= 12000 && grossNet <= 14999) {

          deduction = 500;

  } 
  else if (grossNet >= 15000 && grossNet <= 19999) {

         deduction = 600;

  } 
  else if (grossNet >= 20000 && grossNet <= 24999) {

          deduction = 750;

  } 
  else if (grossNet >= 25000 && grossNet <= 29999) {

          deduction = 850;

  }
   else if (grossNet >= 30000 && grossNet <= 34999) {

          deduction = 900;

  }
   else if (grossNet >= 35000 && grossNet <= 39999) {

          deduction = 950;

  }
   else if (grossNet >= 40000 && grossNet <= 44999) {

          deduction = 1000;

  }
   else if (grossNet >= 45000 && grossNet <= 49999) {

          deduction = 1100;

  } 
  else if (grossNet >= 50000 && grossNet <= 59999) {

         deduction = 1200;

  } else if (grossNet >= 60000 && grossNet <= 69999) {

         deduction = 1300;

  } 
  else if (grossNet >= 70000 && grossNet <= 79999) {

         deduction = 1400;

  } 
  else if (grossNet >= 80000 && grossNet <= 89999) {

         deduction = 1500;

  } 
  else if (grossNet >= 90000 && grossNet <= 99999) {

         deduction = 1600;

  } 
  else if (grossNet >= 100000) {

        deduction = 1700;

  }

  return deduction;

}

//Calculating NSSF deduction

function calculatePensionPay(pay) {

    return pay * 0.06 

}



//Rates

function calculateRate(monthlyTaxPay) {

     let rate = 0;



  if (monthlyTaxPay <= 24000) {

        rate = 10;

  } else if (monthlyTaxPay >= 24001 && monthlyTaxPay <= 32333) {

        rate = 25;

  } else if (monthlyTaxPay > 32333) {

        rate = 30;

  }
        return rate;

}

//Calculating Net salary

  function calculateNetSalary(salary, benefits){

  let monthlyTaxPay = salary

  let deductTax = calculateRate(monthlyTaxPay)

  let grossNet = salary - ((deductTax / 100) * salary)

  let deductNhif = calculateDeduction(grossNet)

  let pay = salary - ((deductTax / 100) * salary) - deductNhif

  let deductNssf = calculatePensionPay(pay)

  let netSalaryCalculation = () =>{let netSalary = (pay - deductNhif) ; return netSalary}

  let netSalary = netSalaryCalculation()

  console.log(netSalary) //output

  return netSalary

  }

// input the gross salary and benefits below


let salary = parseInt("Gross salary");

let benefits = parseInt("Benefits");

calculateNetSalary(salary, benefits);


// run node index3.js on terminal



