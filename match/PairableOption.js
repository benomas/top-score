export class PairableOption {
  factorizer;
  pairedWith  = null;
  preferences = [];
  factors;
  factorsLength;
  mode; // proposer | opponent

  constructor (mode,data,factorizer) {
    this.mode = mode;
    this.factorizer = factorizer;
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
      Object.values(pairableOptions).sort((a, b) => this.cPairStrength(a) - this.cPairStrength(b))
    );
  }

  match (pairableOption) {
    this.pairedWith = pairableOption;

    return this;
  }

  getPairedWith () {
    return this.pairedWith;
  }

  loadAssessmentRules (data) {
    this.factors = this.factorizer.setTargetNumber(data.length).calculateFactors().getFactors();
    this.factorsLength = Object.keys(this.factors).length;

    return this
  }
}
