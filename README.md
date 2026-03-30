# 📝 To-Do App

A To-Do application built with **Laravel** and **React**..  
It provides user authentication and project-task management with secure access control.

---

## 🚀 Features

- 🔐 Token-based authentication using Laravel Sanctum
- 👤 User registration and login
- 📁 Create projects
- 📋 Create tasks inside a project
- 🔒 Ownership-based access control (users only see their own data)

---

## 🛠 Tech Stack

- **Backend:** Laravel
- **Authentication:** Laravel Sanctum
- **Database:** PostgreSQL (serverless from Neon)

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/sujitmohanty/todo-app.git
```

### 2. Install dependencies

```bash
composer install
```

### 3. Setup environment

```bash
cp .env.example .env
php artisan key:generate
```

Update `.env` with database credentials.

---

### 4. Run migrations

```bash
php artisan migrate
```

---

### 5. Start the server

```bash
php artisan serve
```

API will be available at:

```
http://127.0.0.1:8000/api
```

---

## 📡 API Endpoints

### 🧑‍💻 Auth

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| POST   | `/api/register` | Register new user |
| POST   | `/api/login`    | Login user        |
| GET    | `/api/me`       | Get current user  |
| POST   | `/api/logout`   | Logout user       |

---

### 📁 Projects

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | `/api/projects` | Get all projects |
| POST   | `/api/projects` | Create project   |

#### Create Project

```json
{
    "title": "My First Project"
}
```

---

### ✅ Tasks

| Method | Endpoint                           | Description             |
| ------ | ---------------------------------- | ----------------------- |
| GET    | `/api/projects/{project_id}/tasks` | Get tasks for a project |
| POST   | `/api/projects/{project_id}/tasks` | Create task in project  |

#### Create Task

```json
{
    "title": "Do XYZ"
}
```

---

## 📸 Screenshots

![Register](https://i.postimg.cc/fLr73PRh/Screenshot-2026-03-30-at-1-54-12-AM.png)
![Login](https://i.postimg.cc/W3HmDy1s/Screenshot-2026-03-30-at-1-57-09-AM.png)
![Create Project](https://i.postimg.cc/cHb7KzLZ/Screenshot-2026-03-30-at-2-27-30-AM.png)
![Create Task](https://i.postimg.cc/XJzKZPYN/Screenshot-2026-03-30-at-2-49-42-AM.png)

![Register](https://i.postimg.cc/fbtY5zLq/Screenshot-2026-03-30-at-11-36-23-AM.png)
![Login](https://i.postimg.cc/vcvtsXJt/Screenshot-2026-03-30-at-11-33-17-AM.png)
![Dashboard](https://i.postimg.cc/6q0WCZNJ/Screenshot-2026-03-30-at-11-30-40-AM.png)
