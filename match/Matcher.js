
export class Matcher {
  proposerFactoryInstance;
  opponentFactoryInstance;

  proposers    = {};
  opponents    = {};
  proposerKeys = [];
  opponentKeys = [];

  constructor (proposerFactoryInstance,opponentFactoryInstance) {
    this.proposerFactoryInstance = proposerFactoryInstance;
    this.opponentFactoryInstance = opponentFactoryInstance;
  }

  prepareProposers (proposers) {
    proposers.forEach(proposerData => {
      let newProposer = this.proposerFactoryInstance.newInstance(proposerData);
      this.proposers[newProposer.getKey()] = newProposer;
      this.proposerKeys.push(newProposer.getKey());
    });

    return this;
  }

  prepareOpponents (opponents) {
    opponents.forEach(opponentData => {
      let newOpponent = this.opponentFactoryInstance.newInstance(opponentData);
      this.opponents[newOpponent.getKey()] = newOpponent;
      this.opponentKeys.push(newOpponent.getKey());
    });
    return this;
  }

  fixPreferences () {
    Object.values(this.proposers).forEach(proposer => {
      proposer.fixPreferences(this.opponents);
    });

    Object.values(this.opponents).forEach(opponent => {
      opponent.fixPreferences(this.proposers);
    });

    return this;
  }

  isThereAnyUnpairedProposer () {
    return this.proposerKeys.find(proposerKey => !this.proposers[proposerKey].isPaired()) !== undefined;
  }

  nextProposerPos (proposerPos) {
    if (!this.proposers[this.proposerKeys[proposerPos]].isPaired())
      return proposerPos;

    let newPos = (proposerPos + 1) % this.proposerKeys.length;

    while (newPos !== proposerPos){
      if (!this.proposers[this.proposerKeys[newPos]].isPaired())
        return newPos;

      newPos = ++newPos % this.proposerKeys.length;
    }

    return null;
  }

  match () {
    let proposerPos = 0;

    while (this.isThereAnyUnpairedProposer()){
      let proposer = this.proposers[this.proposerKeys[this.nextProposerPos(proposerPos)]];

      while (
        proposer.preferenceCursor < proposer.preferences.length &&
        !this.propose(proposer, proposer.preferences[proposer.preferenceCursor])
      );
    }

    return this;
  }

  propose (proposer, opponent) {
    if (
      opponent.isPaired() &&
      opponent.preferences.indexOf(opponent.getPairedWith()) < opponent.preferences.indexOf(proposer)
    ){
      proposer.preferenceCursor ++;
      return false;
    }

    this.pair(proposer, opponent)
    proposer.preferenceCursor ++;

    return true;
  }

  pair (proposer, opponent) {
    if (proposer.isPaired())
      proposer.getPairedWith().clear();

    if (opponent.isPaired())
      opponent.getPairedWith().clear();

    proposer.pair(opponent);

    return this;
  }

  presentPairs () {
    return this.proposerKeys.map(proposerKey => {
      let proposer = this.proposers[proposerKey];
      let opponent = proposer.getPairedWith();

      return {
        [opponent.getPresentation()]:opponent.getKey(),
        [proposer.getPresentation()]:proposer.getKey(),
        'SS':proposer.cPairStrength(opponent),
      }
    })
  }
}
