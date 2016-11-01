#!/bin/bash

# Get devices
curl http://admin:WelcometoCX01@10.0.1.14:8083/ZAutomation/api/v1/devices

# Turn power on
curl http://admin:WelcometoCX01@10.0.1.14:8083/ZAutomation/api/devices/ZWayVDev_zway_4-0-37/command/on
