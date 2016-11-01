#!/bin/bash

# Turn power on
curl http://admin:kake123@10.0.1.14:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/on
sleep 1
curl http://admin:kake123@10.0.1.14:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/off
sleep 0.4
