var SensorTag = require('sensortag');

var log = function(text) {
  if(text) {
    console.log(text);
  }
}

var Addr = "b0:b4:48:c9:7d:03";
var connected = new Promise((resolve, reject) =>
	SensorTag.discoverByAddress(Addr, (tag) => resolve(tag))
).then((tag) => 
	new Promise((resolve, reject) => tag.connectAndSetup(() => resolve(tag)))
);

var sensor = connected.then(function(tag) {
  log("connected");

  tag.enableAccelerometer(log);
  tag.notifyAccelerometer(log);

  return tag;
});

sensor.then(function(tag) {
  sensorTag.on('accelerometerChange', function(x, y, z) {
    console.log('\tx = %d G', x.toFixed(1));
    console.log('\ty = %d G', y.toFixed(1));
    console.log('\tz = %d G', z.toFixed(1));
  });
});
