import { Fleets } from '../Fleets';

test('test edge cases 1', async () => {
  let fleets = new Fleets('./sample-files/shipments.txt','./sample-files/drivers.txt');
  await fleets.prepareData();

  expect(fleets.generateDistributionPlan().presentDistributionPlan()).toEqual([
    {
      'For the shipment': 'gggdsfdfhhaaaafdfhhaaa',
      'The driver should be': 'asdfgh'
    },
    {
      'For the shipment': 'asadsaggfg',
      'The driver should be': 'asdfgdsas'
    }
  ]);
});

test('test edge cases 2', async () => {
  let fleets = new Fleets('./sample-files/shipments1.txt','./sample-files/drivers1.txt');
  await fleets.prepareData();

  expect(fleets.generateDistributionPlan().presentDistributionPlan()).toEqual([
    {
      'For the shipment': '11111',
      'The driver should be': 'sssssseeee' },
    {
      'For the shipment': '333',
      'The driver should be': 'zzzzzzzza'
    },
    {
      'For the shipment': '22222222',
      'The driver should be': 'dddddddiiiii'
    }
  ]);

});

test('test edge cases 3', async () => {
  let fleets = new Fleets('./sample-files/shipments1.txt','./sample-files/drivers1.txt');
  await fleets.prepareData();

  expect(fleets.generateDistributionPlan().presentDistributionPlan()).toEqual([
    {
      'For the shipment': 'gggdsfdfhhaaaafdfhhaaa',
      'The driver should be': 'asdfgh'
    },
    {
      'For the shipment': 'asadsaggfg',
      'The driver should be': 'asdfgdsas'
    }
  ]);
});
