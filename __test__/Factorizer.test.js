import { Factorizer } from '../match/Factorizer';

test('test factores', () => {
  let factorizer = new Factorizer(7);

  expect(factorizer.calculateFactors().getFactors()).toEqual({
    '7':7
  });

  expect(factorizer.setTargetNumber(42).calculateFactors().getFactors()).toEqual({
    '2':2,
    '3':3,
    '7':7
  });

  expect(factorizer.setTargetNumber(84).calculateFactors().getFactors()).toEqual({
    '2':2,
    '3':3,
    '7':7
  });

  expect(factorizer.setTargetNumber(210).calculateFactors().getFactors()).toEqual({
    '2':2,
    '3':3,
    '5':5,
    '7':7
  });
});

test('test primes', () => {
  let factorizer = new Factorizer(7);

  expect(factorizer.calculateFactors().getPrimeNumbers()).toEqual({
    "2"  : 2,
    "3"  : 3,
    "5"  : 5,
    "7"  : 7,
  });

  expect(factorizer.setTargetNumber(29).calculateFactors().getPrimeNumbers()).toEqual({
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


  expect(factorizer.setTargetNumber(7).calculateFactors().getPrimeNumbers()).toEqual({
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

  expect(factorizer.setTargetNumber(37).calculateFactors().getPrimeNumbers()).toEqual({
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

