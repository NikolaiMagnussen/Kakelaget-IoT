#! /usr/bin/python3

import requests, time, os

def on():
    requests.get("http://admin:kake123@10.0.1.14:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/on")

def off():
    requests.get("http://admin:kake123@10.0.1.14:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_4-0-37/command/off")

def S():
    for i in range(3):
        on()
        time.sleep(0.5)
        off()
        time.sleep(0.4)

def O():
    for i in range(3):
        os.system("./wallplug.sh")

if __name__ == "__main__":
    S()
    O()
    S()
    time.sleep(2)
