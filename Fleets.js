import nReadlines from 'n-readlines';
import { access, constants } from 'node:fs/promises';
import { Matcher } from './match/Matcher.js';
import { DriverFactory } from './match/Driver.js';
import { ShipmentFactory } from './match/Shipment.js';

export class Fleets {
  shipmentsFile;
  driversFile;
  drivers   = [];
  shipments = [];
  matcher;

  constructor (shipmentsFile,driversFile) {
    this.shipmentsFile = shipmentsFile;
    this.driversFile   = driversFile;
  }

  async prepareData () {
    await this.validateFiles();

    this.loadShipments()
      .loadDrivers()
      .startMatcher();
  }

  async validateFiles () {
    try {
      await access(this.shipmentsFile, constants.R_OK);
      await access(this.driversFile, constants.R_OK);
      return this;
    } catch (e) {
      throw new Error('there is an error while trying to access the file');
    }
  }

  loadLinesOfFile (fileName) {
    const nReadlinesWalker = new nReadlines(fileName);

    let line;
    let fileContentLines = [];

    while (line = nReadlinesWalker.next()){
      let newLine = line.toString('ascii');

      if (newLine.length === 0)
        continue;

      fileContentLines.push(newLine);
    }

    return fileContentLines;
  }

  loadShipments () {
    this.shipments = this.loadLinesOfFile(this.shipmentsFile);

    return this;
  }

  loadDrivers () {
    this.drivers = this.loadLinesOfFile(this.driversFile);

    return this;
  }

  getDrivers () {
    return this.drivers;
  }

  getShipments () {
    return this.shipments;
  }

  startMatcher () {
    switch (Object.values(this.drivers).length <= Object.values(this.shipments).length) {
      case true:
        this.matcher = new Matcher(new DriverFactory(),new ShipmentFactory());
        this.matcher.prepareProposers(this.drivers);
        this.matcher.prepareOpponents(this.shipments);
        break;

      case false:
        this.matcher = new Matcher(new ShipmentFactory(),new DriverFactory());
        this.matcher.prepareProposers(this.shipments);
        this.matcher.prepareOpponents(this.drivers);
        break;
    }

    this.matcher.fixPreferences();

    return this;
  }

  generateDistributionPlan () {
    this.matcher.match();

    return this;
  }

  presentDistributionPlan () {
    return this.matcher.presentPairs();
  }
}
