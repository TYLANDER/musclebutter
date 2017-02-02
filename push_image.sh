#!/bin/bash

cd $GOPATH/src/github.com/TYLANDER/musclebutter
docker build -t gcr.io/jackzampolin-web/musclebutter:latest . 
gcloud docker push gcr.io/jackzampolin-web/musclebutter:latest
