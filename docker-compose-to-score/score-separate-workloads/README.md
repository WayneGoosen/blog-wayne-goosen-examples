# Overview

Using separate score files to represent frontend and backend.


# Getting Started

```bash
score-compose generate scorefrontend.yaml --build=frontend=./aspnetcore --publish 5348:frontend:5348 
score-compose generate scorebackend.yaml --build=backend=./backend --publish 8002:backend:8002

score-compose generate score*.yaml --build=frontend=./aspnetcore --build=backend=./backend  --publish 8002:backend:8002 --publish 5348:frontend:5348
```

# This works - 1

```bash
score-compose init --no-sample
score-compose generate scorefrontend.yaml --build=frontend=./aspnetcore 
score-compose generate scorebackend.yaml --build=backend=./backend

score-compose generate scorefrontend.yaml --publish 8002:backend:8002 --publish 5348:frontend:5348
```

# Doesnt work...

This might because --build only takes a container name and there are multiple workloads?

```bash
score-compose init --no-sample
score-compose generate scorefrontend.yaml --build=frontend=./aspnetcore scorebackend.yaml --build=backend=./backend --publish 8002:backend:8002 --publish 5348:frontend:5348

score-compose generate score*.yaml --publish 8002:backend:8002 --publish 5348:frontend:5348
```