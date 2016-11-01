var exec = require('child_process').exec, child;
var SensorTag = require('sensortag');
var http = require('http');

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

var lightOn = false

sensor.then(function(tag) {
  tag.on('accelerometerChange', function(x, y, z) {
    if (x < -4 || x > 4 || y < -4 || y > 4 || z < -4 || z > 4) {
	    log("sos");
	    var c = exec("./sos.py");
    } else if(x < -2 || x > 2 || y < -2 || y > 2 || z < -2 || z > 2) {
      log("light toggle");
      if (lightOn) {
        http.get("http://admin:kake123@10.0.1.14:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/off");
        lightOn = false;
      } else {
        http.get("http://admin:kake123@10.0.1.14:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/on");
        lightOn = true;
      }
    }
  });
});
