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

  tag.enableIrTemperature(log);
  tag.notifyIrTemperature(log);

  tag.enableHumidity(log);
  tag.notifyHumidity(log);

  tag.enableGyroscope(log);
  tag.notifyGyroscope(log);
  return tag;
});

sensor.then(function(tag) {
  tag.on("irTemperatureChange", function(objectTemp, ambientTemp) {
	  log("Temp" + objectTemp);
  })
});
