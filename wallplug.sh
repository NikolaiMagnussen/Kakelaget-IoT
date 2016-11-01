#!/bin/bash

# Get devices
#curl http://admin:WelcometoCX01@10.0.1.14:8083/ZAutomation/api/v1/devices

# Turn power on
while true; do
curl http://admin:WelcometoCX01@10.0.1.14:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-3/command/on
sleep 1
curl http://admin:WelcometoCX01@10.0.1.14:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-3/command/off
sleep 1
done
