# Score compose

```bash
score-compose init --no-sample
score-compose generate score-frontend.yaml --build=frontend=./frontend -o score-compose.yaml
score-compose generate score-backend.yaml --build=backend=./backend -o score-compose.yaml
score-compose generate score-database.yaml -o score-compose.yaml

score-compose generate score-database.yaml --publish 8002:backend:8002 --publish 5348:frontend:5348 --publish 1433:database:1433 -o score-compose.yaml
```