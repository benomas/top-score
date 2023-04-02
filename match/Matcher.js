import { Shipment } from './Shipment.js';
import { Driver } from './Driver.js';
import { Factorizer } from './Factorizer.js';

export class Matcher {
  shipments = {};
  drivers   = {};
  factorizer;
  whoIsProposer;

  constructor (whoIsProposer) {
    this.whoIsProposer = whoIsProposer;
    this.factorizer = new Factorizer();
  }

  prepareShipments (shipments) {
    let mode = this.whoIsProposer === 'shipments' ? 'proposer' : 'opponent'

    shipments.forEach(street => {
      this.shipments[street] = new Shipment(mode,street,this.factorizer);
    });

    return this;
  }

  prepareDrivers (drivers) {
    let mode = this.whoIsProposer === 'drivers' ? 'proposer' : 'opponent'

    drivers.forEach(driverName => {
      this.drivers[driverName] = new Driver(mode,driverName,this.factorizer);
    });

    return this;
  }

  fixPreferences () {
    Object.values(this.shipments).forEach(shipment => {
      shipment.fixPreferences(this.drivers);
    });

    Object.values(this.drivers).forEach(driver => {
      driver.fixPreferences(this.shipments);
    });

    return this;
  }
}
