import { Fleets } from '../Fleets';

test('test edge cases 1', async () => {
  let fleets = new Fleets('./sample-files/shipments.txt','./sample-files/drivers.txt');
  await fleets.prepareData();

  expect(fleets.generateDistributionPlan().presentDistributionPlan()).toEqual({
    pairs: [
      {
        'For the shipment': 'gggdsfdfhhaaaafdfhhaaa',
        'The driver should be': 'asdfgh',
        SS: 1.5
      },
      {
        'For the shipment': 'asadsaggfg',
        'The driver should be': 'asdfgdsas',
        SS: 2
      }
    ],
    totalSS: 3.5
  });
});

test('test edge cases 2', async () => {
  let fleets = new Fleets('./sample-files/shipments1.txt','./sample-files/drivers1.txt');
  await fleets.prepareData();

  expect(fleets.generateDistributionPlan().presentDistributionPlan()).toEqual({
    pairs: [
      {
        'For the shipment': '11111',
        'The driver should be': 'sssssseeee',
        SS: 9
      },
      {
        'For the shipment': '333',
        'The driver should be': 'zzzzzzzza',
        SS: 12
      },
      {
        'For the shipment': '22222222',
        'The driver should be': 'dddddddiiiii',
        SS: 7.5
      }
    ],
    totalSS: 28.5
  });

});

test('test edge cases 3', async () => {
  let fleets = new Fleets('./sample-files/shipments2.txt','./sample-files/drivers2.txt');
  await fleets.prepareData();

  expect(fleets.generateDistributionPlan().presentDistributionPlan()).toEqual({
    pairs: [
      {
        'The driver should be': 'countryside',
        'For the shipment': 'screw',
        SS: 7
      },
      {
        'The driver should be': 'nominate',
        'For the shipment': 'hammer',
        SS: 6
      },
      {
        'The driver should be': 'strap',
        'For the shipment': 'sensitive',
        SS: 4
      }
    ],
    totalSS: 17
  });
});
