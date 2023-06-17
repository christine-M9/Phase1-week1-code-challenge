//Calculating PAYE
function calculatePAYE(annualSalary) {
    if (annualSalary <= 288000) {
      return (10 / 100) * annualSalary / 12;
    } 
    else if (annualSalary <= 388000) {
      return ((25 / 100) * (annualSalary - 288000) + (10 / 100) * 288000) / 12;
    }
     else {
      return ((30 / 100) * (annualSalary - 388000) + (25 / 100) * 100000 + (10 / 100) * 288000) / 12;
    }
  }

  //Calculating NSSF 
function calculateNSSF(grossPay) {
    if (grossPay <= 6000) {
      return 0.06 * grossPay;
    } else if (grossPay <= 18000) {
      return  0.06 * (grossPay - 6000);
    } else {
      return  0.06 * 12000;
    }
  }