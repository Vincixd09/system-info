# System Info (Node.js)

A small Node.js CLI tool that displays basic system and network information in real time.

## What it shows

- Username
- User shell
- Platform
- Machine type (`os.machine()`)
- System architecture
- Network information:
  - IP address
  - Netmask
  - IP family (IPv4)
  - MAC address
  - CIDR
- System uptime
- Total RAM memory
- Free RAM memory

The information is refreshed automatically at a fixed interval.

## Requirements

- Node.js (v18 or newer recommended)
- npm

## Installation

```bash

npm install

```
## Run

```bash

npm start

```

### Notes

- Network information updates automatically when the network connection changes.

- If no network interface is available, the program will continue running without crashing.

- Designed as a simple learning project focused on async control and error handling in Node.js.


## 👤 Vinci

[@Vincixd09](https://github.com/Vincixd09)
