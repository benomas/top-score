import { PairableOption } from './PairableOption.js';

export class Driver extends PairableOption {
  loadAssessmentRules (data) {
    super.loadAssessmentRules(data);
    this.driverName       = data;
    this.ssValues         = {
      'even':1.5 * data.match(/[aeiou]/gi).length,
      'odd,':data.match(/[bcdfghjklmnpqrstvwxys]/gi).length,
    }

    return this;
  }

  cPairStrength (pairableOption) {
    let strength = this[pairableOption.type];

    if(this.factorizer.duplicateFactor(this,pairableOption))
      strength * 1.5;

    return strength;
  }
}
