# Bendigo Bank IBL Challenge

## Lachlan T

This is the repo for my IBL challenge

## Setup

### Build

To build the Docker image, all you have to do is:
```
git clone https://github.com/lachlanthomson/bgobank-ibl.git

cd bgobank-ibl
docker build . -t sample-app
```

## Running

To run the app
```
docker run -dp 8086:8086 sample-app
```
