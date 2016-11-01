#! /usr/bin/python3

import requests, time

def on():
    requests.get("http://admin:WelcometoCX01@10.0.1.11:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/on")
    requests.get("http://admin:WelcometoCX01@10.0.1.12:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/on")
    requests.get("http://admin:WelcometoCX01@10.0.1.13:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/on")
    requests.get("http://admin:WelcometoCX01@10.0.1.14:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/on")
    requests.get("http://admin:WelcometoCX01@10.0.1.15:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/on")
    requests.get("http://admin:WelcometoCX01@10.0.1.16:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/on")
    requests.get("http://admin:WelcometoCX01@10.0.1.17:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/on")

def off():
    requests.get("http://admin:WelcometoCX01@10.0.1.11:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/off")
    requests.get("http://admin:WelcometoCX01@10.0.1.12:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/off")
    requests.get("http://admin:WelcometoCX01@10.0.1.13:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/off")
    requests.get("http://admin:WelcometoCX01@10.0.1.14:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/off")
    requests.get("http://admin:WelcometoCX01@10.0.1.15:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/off")
    requests.get("http://admin:WelcometoCX01@10.0.1.16:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/off")
    requests.get("http://admin:WelcometoCX01@10.0.1.17:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/off")

def S():
    for i in range(3):
        on()
        time.sleep(0.5)
        off()
        time.sleep(0.4)

def O():
    for i in range(3):
        on()
        time.sleep(1)
        off()
        time.sleep(0.4)

if __name__ == "__main__":
    while True:
        S()
        O()
        S()
        time.sleep(2)
