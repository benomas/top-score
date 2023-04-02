## Challenge to demostrate skills to solve complex problems using algorthms and structures.

The solution tries to get the best pairs of combination based on a point system using strings length for a gcd problem and even / odd vs vowels / consontans.

The language used to get a solution is javascript, it was made using node.js 18.15.0, to be able to run, you will need to install external dependencies using npm as
`npm install`

once you have the dependencies installed, you can generate the recomendations by runing a command like this `node index <path to your shipments file> <path to your drivers file>`
the repositore include some sample files with fake data, for instance if you 
launch `node index ./sample-files/shipments.txt ./sample-files/drivers.txt` you will see something like this 
```
[
    {
      'For the shipment': 'gggdsfdfhhaaaafdfhhaaa',
      'The driver should be': 'asdfgh'
    },
    {
      'For the shipment': 'asadsaggfg',
      'The driver should be': 'asdfgdsas'
    }
]
```

Some test were also included, you can run those with `npm test`
