import { PairableOption } from './PairableOption.js';
import { FactorizerS } from './Factorizer.js';

export class Driver extends PairableOption {
  constructor (data) {
    super(data);
    this.presentation = 'The driver should be';
  }

  loadAssessmentRules (data) {
    super.loadAssessmentRules(data);
    this.driverName   = data;
    let even          = data.match(/[aeiou]/gi);
    let odd           = data.match(/[bcdfghjklmnpqrstvwxyz]/gi);

    even = even ? even.length : 0;
    odd  = odd ? odd.length : 0;

    this.ssValues     = {even,odd};

    return this;
  }

  cPairStrength (pairableOption) {
    let strength = this.ssValues[pairableOption.type];

    if(FactorizerS.getFactorizer().duplicateFactor(this,pairableOption))
      strength = strength * 1.5;

    return strength;
  }
};

export class DriverFactory {
  newInstance (data) {
    return new Driver(data);
  }
};
