import { PairableOption } from './PairableOption.js';
import { FactorizerS } from './Factorizer.js';

export class Shipment extends PairableOption {
  constructor (data) {
    super(data);
    this.presentation = 'For the shipment';
  }

  loadAssessmentRules (data) {
    super.loadAssessmentRules(data);
    this.street  = data;
    this.type    = data.length % 2 === 0 ? 'even' : 'odd';

    return this;
  }

  cPairStrength (pairableOption) {
    let strength = pairableOption.ssValues[this.type];

    if(FactorizerS.getFactorizer().duplicateFactor(pairableOption,this))
      strength = strength * 1.5;

    return strength;
  }
};

export class ShipmentFactory{
  newInstance (data) {
    return new Shipment(data);
  }
};
