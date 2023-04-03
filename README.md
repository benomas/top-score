## Challenge to demostrate skills to solve complex problems using algorthms and structures.

The solution aims to determine the best combinations of pairs based on a point system that uses the length of strings for a GCD problem, as well as the properties of even/odd and vowels/consonants.

The solution was developed in JavaScript, using Node.js version 18.15.0. To run the solution, you need to install external dependencies using npm by running `npm install` in the command line.

Once you have installed the necessary dependencies, you can generate recommendations by running a command like this: `node index <path to your shipments file> <path to your drivers file>`. The repository includes some sample files with fake data. For example, if you run `node index ./sample-files/shipments.txt ./sample-files/drivers.txt`, you will see something like this
```
{
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
}
```

Some test were also included, you can run those with `npm test`
