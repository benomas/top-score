import { FactorizerS } from './Factorizer.js';
export class PairableOption {
  pairedWith  = null;
  preferences = [];
  factors;
  factorsLength;
  key;
  preferenceCursor = 0;
  presentation = 'Pairable Option';

  constructor (data) {
    this.key = data;
    this.loadAssessmentRules(data);
  }

  setPreferences (preferences) {
    this.preferences = preferences

    return this;
  }

  cPairStrength (pairableOption) {
    return 1;
  }

  fixPreferences (pairableOptions) {
    return this.setPreferences(
      Object.values(pairableOptions).sort((a, b) => this.cPairStrength(b) - this.cPairStrength(a))
    );
  }

  pair (pairableOption) {
    this.pairedWith = pairableOption;
    pairableOption.pairedWith = this;

    return this;
  }

  clear () {
    this.pairedWith = null;

    return this;
  }

  getPairedWith () {
    return this.pairedWith;
  }

  isPaired () {
    return this.pairedWith !== null;
  }

  loadAssessmentRules (data) {
    this.factors = FactorizerS.getFactorizer().setTargetNumber(data.length).calculateFactors().getFactors();
    this.factorsLength = Object.keys(this.factors).length;

    return this
  }

  getKey () {
    return this.key
  }

  getPresentation () {
    return this.presentation;
  }
}
