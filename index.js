import nReadlines from 'n-readlines'
import { access, constants } from 'node:fs/promises';

const loadLinesOfFile = function (fileName) {
  const nReadlinesWalker = new nReadlines(fileName);

  let line;
  let fileContentLines = [];

  while (line = nReadlinesWalker.next())
    fileContentLines.push(line.toString('ascii'));

  return fileContentLines;
}

let streetsFile = process.argv[2];
let driversFile = process.argv[3];

try {
  await access(streetsFile, constants.R_OK);
  await access(driversFile, constants.R_OK);
} catch (e) {
  throw new Error('cannot access file')
}

let streets = loadLinesOfFile(streetsFile);
let drivers = loadLinesOfFile(driversFile);

