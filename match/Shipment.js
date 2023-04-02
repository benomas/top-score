import { PairableOption } from './PairableOption.js';

export class Shipment extends PairableOption {
  loadAssessmentRules (data) {
    super.loadAssessmentRules(data);
    this.street  = data;
    this.type    = data.length % 2 === 0 ? 'even' : 'odd';

    return this;
  }

  cPairStrength (pairableOption) {
    let strength = pairableOption[this.type];

    if(this.factorizer.duplicateFactor(pairableOption,this))
      strength * 1.5;

    return strength;
  }
}
