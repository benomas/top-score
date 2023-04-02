import nReadlines from 'n-readlines';
import { access, constants } from 'node:fs/promises';
import { Matcher } from './match/Matcher.js';

export class Fleets {
  shipmentsFile;
  driversFile;
  drivers   = {};
  shipments = {};
  matcher;

  constructor (shipmentsFile,driversFile) {
    this.shipmentsFile = shipmentsFile;
    this.driversFile   = driversFile;
  }

  async prepareData () {
    await this.validateFiles()

    this.loadShipments()
      .loadDrivers()
      .startMatcher(this.drivers.length <= this.shipments.length ? 'drivers':'shipments');

    this.matcher
      .prepareShipments(this.shipments)
      .prepareDrivers(this.drivers)
      .fixPreferences();
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

    while (line = nReadlinesWalker.next())
      fileContentLines.push(line.toString('ascii'));

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
    this.matcher = new Matcher();

    return this;
  }
}
