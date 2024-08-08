# Overview

This contains the source code for the following blog post [Platform Engineering: Transition from Docker Compose to Score](#)

## Getting Started

```bash
docker-compose up
```

## Score

[Getting Started](https://docs.score.dev/docs/get-started/)
[Install](https://docs.score.dev/docs/score-implementation/score-compose/#installation)
[Example](https://github.com/score-spec/score-compose/blob/main/examples/08-service-port-resource/README.md)

```bash
score-compose init
score-compose generate score.yaml
score-compose generate score.yaml --build=aspnetcore=./aspnetcore --build=backend=./backend --publish 5348:aspnetcore:5348  --publish 8002:backend:8002 

score-compose generate frontend-score.yaml --build=frontend=./aspnetcore --publish 5348:frontend:5348 

score-compose generate backend-score.yaml --build=backend=./backend --publish 8002:backend:8002 

score-compose generate frontend-score.yaml backend-score.yaml --build=backend=./backend --publish 8002:backend:8002 --build=aspnetcore=./aspnetcore --publish 5348:aspnetcore:5348 


score-compose generate score.yaml --build=frontend=./aspnetcore --build=backend=./backend 
```