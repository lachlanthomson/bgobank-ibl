# Bendigo Bank IBL Challenge

## Lachlan T

This is the repo for my IBL challenge

## Setup

### Build

To build the Docker image, first clone the repo then run
```
docker build . -t sample-app
```
This compiles the image into a usable form.

## Running

To run the app
```
docker run -dp 8086:8086 sample-app
```
Then navigate to <http://localhost:8086/health> to access the api.
