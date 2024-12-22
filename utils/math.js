export const calculateSip = (monthlyInvestment, annualRate, year) => {
    const totalMonths=year*12;
    const monthlyRate = annualRate / 12 / 100;
    const temp = Math.pow(1 + monthlyRate, totalMonths) - 1;
    const maturityAmount = monthlyInvestment * temp * ((1 + monthlyRate))/monthlyRate;
    const totalInvestedAmount = monthlyInvestment * totalMonths;
    return {
      totalInvestedAmount, 
      maturityAmount:Math.ceil(maturityAmount),    
      totalReturns: Math.ceil(maturityAmount) - totalInvestedAmount,
    };
  };
  
  export const calculateLumpsum = (principal, annualRate, totalYears) => {
    const ratePerPeriod = annualRate / 100;
    const maturityAmount = principal * Math.pow(1 + ratePerPeriod, totalYears);
    const totalReturns = maturityAmount - principal;
    return {
        totalInvestedAmount: principal,   
      maturityAmount:Math.ceil( maturityAmount), 
      totalReturns: Math.ceil(totalReturns) 
    };
  };
  export const calculateFd = (principal, annualRate, tenure) => {
    // Calculate interest using the formula (1 + i/100)^t - 1
    const maturityAmount = (principal * ((Math.pow(1 + (annualRate / 100), tenure))-1)) + principal;
    
    // Calculate total returns (interest earned)
    const totalReturns = maturityAmount - principal;
    
    // Return results
    return {
      totalInvestedAmount: principal,  // The principal amount invested
      maturityAmount: Math.ceil(maturityAmount),  // Maturity amount rounded to nearest integer
      totalReturns: Math.ceil(totalReturns),  // Total returns (interest earned), rounded to nearest integer
    };
  };
  
  export const calculateRd = (monthlyDeposit, annualRate, tenure) => {
    const N = 4; // Quarterly compounding
    
    let maturityAmount = 0;
    
    // Loop through each month, calculating the compound interest for each deposit
    for (let i = 0; i < tenure * 12; i++) {
      const monthsRemaining = (tenure * 12) - i;
      maturityAmount += monthlyDeposit * Math.pow(1 + (annualRate / 100) / N, (N * monthsRemaining) / 12);
    }
  
    // Total invested amount (monthly deposit * 12 months * years)
    const totalInvestedAmount = monthlyDeposit * 12 * tenure;
  
    // Total returns (interest earned)
    const totalReturns = maturityAmount - totalInvestedAmount;
  
    return {
      totalInvestedAmount: totalInvestedAmount, 
      maturityAmount: Math.ceil(maturityAmount),  // Final maturity amount, rounded to nearest integer
      totalReturns: Math.ceil(totalReturns),  // Total returns, rounded
    };
  };
  
  
  