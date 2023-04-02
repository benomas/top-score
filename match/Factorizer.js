export class Factorizer {
  primeNumbers = {'2':2};
  factors      = {};
  targetNumber;

  constructor (targetNumber) {
    this.targetNumber = targetNumber;
  }

  getFactors () {
    return this.factors;
  }

  getPrimeNumbers () {
    return this.primeNumbers;
  }

  calculateFactors () {
    this.factors = {};

    if (this.primeNumbers[this.targetNumber] !== undefined){
      this.factors[this.targetNumber] = this.targetNumber;

      return this;
    }

    let restToFactorize = this.targetNumber;
    let primeNumber = 2;

    do{
      primeNumber = this.divisibleByPrime(restToFactorize);

      if (primeNumber !== undefined) {
        this.factors[primeNumber] = primeNumber;
        restToFactorize = restToFactorize / primeNumber;
      }
    }while(primeNumber !== undefined);

    if (restToFactorize === 1)
      return this;

    if (primeNumber === undefined)
      primeNumber = 2;

    let leftPrimeCursor;
    let newPrimeT;

    while(primeNumber < restToFactorize){
      primeNumber++;
      leftPrimeCursor = primeNumber;
      do{
        newPrimeT = this.divisibleByPrime(leftPrimeCursor);
        if (newPrimeT !== undefined) {
          leftPrimeCursor = leftPrimeCursor / newPrimeT;

          if (leftPrimeCursor === 1)
            break;

          continue;
        }

        this.primeNumbers[leftPrimeCursor]=leftPrimeCursor;
      }while(newPrimeT !== undefined);
    }

    do{
      primeNumber = this.divisibleByPrime(restToFactorize);

      if (primeNumber !== undefined) {
        this.factors[primeNumber] = primeNumber;
        restToFactorize = restToFactorize / primeNumber;
      }
    }while(primeNumber !== undefined);

    if (restToFactorize !== 1){
      this.factors[restToFactorize]       = restToFactorize;
      this.primeNumbers[restToFactorize]  = restToFactorize;
    }

    return this;
  }

  divisibleByPrime (number) {
    let primeNumber = 2;
    let values = Object.values(this.primeNumbers);

    for (let i=0; i<values.length;){
      primeNumber = values[i];

      if (number % primeNumber !== 0){
        i++;
        continue;
      }

      return primeNumber;
    }

    return undefined;
  }

  setTargetNumber (targetNumber) {
    this.targetNumber = targetNumber;

    return this;
  }

  duplicateFactor (factorized1, factorized2) {
    let from = factorized1;
    let to   = factorized2;

    if(factorized1.factorsLength > factorized2.factorsLength){
      from = factorized2;
      to   = factorized1;
    }

    return Object.keys(from).find(fromKey => to[fromKey] !== undefined) !== undefined;
  }
}
