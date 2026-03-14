# Task Manager – DevOps Project

![CI/CD](https://github.com/bachirc934/task-manager-devops/actions/workflows/ci.yml/badge.svg)

## Project Overview

Task Manager is a full-stack web application designed to manage tasks efficiently.

This project demonstrates a **complete DevOps workflow**, including containerization, automated testing, CI/CD pipeline, and cloud deployment.

The application allows users to:

* Create tasks
* Update task status
* Cancel tasks
* Delete tasks
* View task list

---

## Architecture

Frontend and backend are containerized and deployed on an EC2 instance using Docker.

```
User
  │
  ▼
Frontend (React + Vite)
  │
  ▼
Backend API (Spring Boot)
  │
  ▼
PostgreSQL Database
```

Deployment pipeline:

```
GitHub
   │
   ▼
GitHub Actions (CI/CD)
   │
   ▼
DockerHub (Images)
   │
   ▼
AWS EC2
   │
   ▼
Docker Compose
```

---

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Spring Boot
* Java 17
* Maven
* JUnit
* Mockito

### Database

* PostgreSQL

### DevOps

* Docker
* Docker Compose
* GitHub Actions
* DockerHub
* AWS EC2

---

## CI/CD Pipeline

The CI/CD pipeline automatically:

1. Runs backend tests
2. Builds the frontend
3. Builds Docker images
4. Pushes images to DockerHub
5. Deploys the application to EC2

Workflow file:

```
.github/workflows/ci.yml
```

---

## Docker Images

Docker images are published on DockerHub:

Backend

```
bachirc934/task-manager-backend
```

Frontend

```
bachirc934/task-manager-frontend
```

---

## Run the Project Locally

### Prerequisites

* Docker
* Docker Compose

### Access the application

Frontend

```
http://localhost:3000
```

Backend API

```
http://localhost:9000/api/tasks
```

---

## Cloud Deployment

The application is deployed on an EC2 instance from
Amazon Web Services.

Deployment is automated through GitHub Actions.

Each push to the `main` branch triggers:

```
Build → Test → Docker → Push → Deploy
```

---

## Project Structure

```
task-manager-devops
│
├── backend
│   ├── Dockerfile
│   ├── pom.xml
│   └── src
│
├── frontend
│   ├── Dockerfile
│   ├── package.json
│   └── src
│
├── docker-compose.yml
│
└── .github
    └── workflows
        └── ci.yml
```

---

## API Example

Get all tasks

```
GET /api/tasks
```

Create task

```
POST /api/tasks
```

Delete task

```
DELETE /api/tasks/{id}
```

---

## Future Improvements

* Reverse proxy with Nginx
* HTTPS with Let's Encrypt
* Monitoring with Prometheus and Grafana
* Kubernetes deployment

---

## Author

DevOps Project by **Bachir**
