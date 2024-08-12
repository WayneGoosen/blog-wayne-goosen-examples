# Overview

Using separate score files to represent frontend and backend.


# Getting Started

```bash
score-compose generate scorefrontend.yaml --build=frontend=./aspnetcore --publish 5348:frontend:5348
score-compose generate scorebackend.yaml --build=backend=./backend --publish 8002:backend:8002
```