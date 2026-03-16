# Secure Task Management Application

A secure full-stack **Task Management Application** built using **Next.js API Routes and MongoDB**.
The application allows users to register, authenticate, and manage their personal tasks through a protected dashboard.

This project was created as part of a **Full Stack Developer Technical Assessment** to demonstrate knowledge of backend architecture, authentication, database integration, and secure API design.

---

# Repository

GitHub Repository

```
https://github.com/YARAGANIDURGADHANUSH/task-manager-secure
```

---

# Features

## Authentication

* User registration
* User login
* JWT based authentication
* Secure HTTP-only cookies
* Password hashing using bcrypt

## Task Management

* Create tasks
* View tasks
* Delete tasks
* Pagination support
* Search tasks by title
* Filter tasks by status

## Security

* Password hashing with bcrypt
* JWT token authentication
* HTTP-only cookie storage
* AES encryption utility for sensitive fields
* Environment variable configuration

---

# Tech Stack

### Frontend

* Next.js
* React
* CSS

### Backend

* Next.js API Routes
* Node.js

### Database

* MongoDB
* Mongoose

### Security

* JWT authentication
* bcrypt password hashing
* AES encryption

---

# Project Architecture

```
Client Browser
      │
      │ HTTP Requests
      ▼
Next.js Frontend Pages
      │
      │ API Calls
      ▼
Next.js API Routes
      │
      │ Authentication + Validation
      ▼
MongoDB Database
```

---

# Project Structure

```
task-manager-secure
│
├── lib
│   ├── auth.js
│   ├── db.js
│   └── encrypt.js
│
├── models
│   ├── Task.js
│   └── User.js
│
├── pages
│   ├── api
│   │   ├── auth
│   │   │   ├── login.js
│   │   │   └── register.js
│   │   │
│   │   └── tasks
│   │       ├── create.js
│   │       ├── delete.js
│   │       └── list.js
│   │
│   ├── dashboard.js
│   ├── login.js
│   ├── register.js
│   └── index.js
│
├── public
├── styles
│   └── global.css
│
├── README.md
├── package.json
└── next.config.ts
```

---

# Installation & Setup

### Clone the repository

```bash
git clone https://github.com/YARAGANIDURGADHANUSH/task-manager-secure.git
```

### Navigate to the project

```bash
cd task-manager-secure
```

### Install dependencies

```bash
npm install
```

### Create environment variables

Create `.env.local`

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
AES_SECRET=your_encryption_key
```

### Run the development server

```bash
npm run dev
```

Application runs at

```
http://localhost:3000
```

---

# API Endpoints

## Register

```
POST /api/auth/register
```

Request body

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

---

## Login

```
POST /api/auth/login
```

Returns authentication token stored in **HTTP-only cookie**.

---

## Create Task

```
POST /api/tasks/create
```

Example request

```json
{
  "title": "Finish assignment",
  "description": "Complete the full stack task manager",
  "status": "pending"
}
```

---

## List Tasks

```
GET /api/tasks/list
```

Pagination

```
GET /api/tasks/list?page=1&limit=10
```

Search

```
GET /api/tasks/list?search=task
```

Filter

```
GET /api/tasks/list?status=completed
```

---

## Delete Task

```
DELETE /api/tasks/delete?id=TASK_ID
```

---

# Security Implementation

This application implements several security best practices:

* Password hashing using bcrypt
* JWT authentication
* HTTP-only cookies for token storage
* Encryption utility using AES
* Environment variables for sensitive configuration
* Authorization to ensure users access only their own tasks

---

# Deployment

The application can be deployed using platforms such as:

* Vercel
* Render
* Railway

Database hosting can be done using:

* MongoDB Atlas

---

# Author

**Durga Dhanush Yaragani**

Final Year Computer Science Student

GitHub
https://github.com/YARAGANIDURGADHANUSH

---

# License

MIT License
