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
    if(x < -2 || x > 2) {
      log('\nMovement in x direction: ' + x);
    }
    if(y < -2 || y > 2) {
      log('\nMovement in y direction: ' + y);
    }
    if(z < -2 || z > 2) {
      log('\nMovement in z direction: ' + z);
    }
  });
});
