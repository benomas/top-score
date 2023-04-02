import { factorizer } from '../factorizer';

test('test factores', () => {
  let factorizerMaker = new factorizer(7);

  expect(factorizerMaker.calculateFactors().getFactors()).toEqual({
    '7':7
  });

  expect(factorizerMaker.setTargetNumber(42).calculateFactors().getFactors()).toEqual({
    '2':2,
    '3':3,
    '7':7
  });

  expect(factorizerMaker.setTargetNumber(84).calculateFactors().getFactors()).toEqual({
    '2':2,
    '3':3,
    '7':7
  });

  expect(factorizerMaker.setTargetNumber(210).calculateFactors().getFactors()).toEqual({
    '2':2,
    '3':3,
    '5':5,
    '7':7
  });
});

test('test primes', () => {
  let factorizerMaker = new factorizer(7);

  expect(factorizerMaker.calculateFactors().getPrimeNumbers()).toEqual({
    "2"  : 2,
    "3"  : 3,
    "5"  : 5,
    "7"  : 7,
  });

  expect(factorizerMaker.setTargetNumber(29).calculateFactors().getPrimeNumbers()).toEqual({
    "11" : 11,
    "13" : 13,
    "17" : 17,
    "19" : 19,
    "2"  : 2,
    "23" : 23,
    "29" : 29,
    "3"  : 3,
    "5"  : 5,
    "7"  : 7,
  });


  expect(factorizerMaker.setTargetNumber(7).calculateFactors().getPrimeNumbers()).toEqual({
    "11" : 11,
    "13" : 13,
    "17" : 17,
    "19" : 19,
    "2"  : 2,
    "23" : 23,
    "29" : 29,
    "3"  : 3,
    "5"  : 5,
    "7"  : 7,
  });

  expect(factorizerMaker.setTargetNumber(37).calculateFactors().getPrimeNumbers()).toEqual({
    "11" : 11,
    "13" : 13,
    "17" : 17,
    "19" : 19,
    "2"  : 2,
    "23" : 23,
    "29" : 29,
    "3"  : 3,
    "31" : 31,
    "37" : 37,
    "5"  : 5,
    "7"  : 7,
  });
});

