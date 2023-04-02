import { Fleets } from './Fleets.js';

let shipmentsFile;
let driversFile;

try{
  shipmentsFile = process.argv[2];
  driversFile = process.argv[3];
}catch{
  new Error('Parameter shipmentsFile (2) and driversFile (3) are required in the form node index path1 path2');
}

const runAlgorithm = async function () {
  let fleets = new Fleets(shipmentsFile,driversFile);
  await fleets.prepareData();

  console.log(fleets.generateDistributionPlan().presentDistributionPlan());

};

runAlgorithm();
