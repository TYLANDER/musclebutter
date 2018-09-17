#!/bin/bash

push_image () {
  rm -rf ./build
  npm run build
  docker build -t gcr.io/jackzampolin-web/musclebutter:latest .
  gcloud docker gcr.io/jackzampolin-web/musclebutter:latest
}

roll_pods () {
  local pods=$(kubectl get pods --namespace musclebutter -o jsonpath='{ .items[*].metadata.name }')
  local pod
  for pod in $pods; do
    kubectl delete pod --namespace musclebutter $pod
    echo "killed pod $pod"
    echo "Sleeping for 30 seconds to wait for new pod to come up"
    echo "30..."
    sleep 5
    echo "25..."
    sleep 5
    echo "20..."
    sleep 5
    echo "15..."
    sleep 5
    echo "10..."
    sleep 5
    echo "5..."
    sleep 5
  done
}

echo "Pushing image..."

push_image

echo "Image pushed. Now rolling pods to update site..."

roll_pods
