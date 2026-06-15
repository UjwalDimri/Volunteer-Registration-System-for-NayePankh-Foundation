# 🌱 NayePankh Volunteer Management System

A Full Stack Web Application built for **NayePankh Foundation** to digitize and simplify volunteer registration and management. The application allows volunteers to register online while providing administrators with tools to manage volunteer data efficiently.

---

## Live Link --- [volunteer-registration-system](https://volunteer-registration-system-for.onrender.com) 

## 🚀 Features

- 📝 Volunteer Registration Form
- 💾 Store volunteer information in MySQL database
- 📊 Admin Dashboard to view all registered volunteers
- ✏️ Update volunteer details
- 🗑️ Delete volunteer records
- 🔍 Search volunteers by name or email
- 📱 Responsive user interface
- 🔐 Authentication support (Future Enhancement)

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap
- EJS

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Packages Used
- mysql2
- express
- ejs
- method-override
- dotenv
- uuid

---

## 📂 Project Structure

```text
NayePankh-Volunteer-Management-System/
│
├── public/
│   ├── css/
│   │   └── style.css
│
├── views/
│   ├── home.ejs
│   ├── register.ejs
│   ├── dashboard.ejs
│   ├── edit.ejs
│   └── partials/
│
├── routes/
│   └── volunteer.js
│
├── database/
│   └── connection.js
│
├── app.js
├── schema.sql
├── .env
├── package.json
└── README.md
```

---

## 📌 Project Objective

The objective of this project is to replace manual volunteer data collection with a centralized digital platform. This system helps NayePankh Foundation maintain records efficiently and improve volunteer management.

---

## 📊 Database Schema

### Table: volunteers

| Column | Data Type |
|----------|-----------|
| id | INT AUTO_INCREMENT PRIMARY KEY |
| name | VARCHAR(100) |
| email | VARCHAR(100) |
| phone | VARCHAR(15) |
| college | VARCHAR(100) |
| skills | VARCHAR(255) |
| interest | VARCHAR(255) |
| created_at | TIMESTAMP |

---

## 🌐 Routes

| Method | Route | Description |
|----------|------|-------------|
| GET | / | Home Page |
| GET | /register | Registration Form |
| POST | /register | Add Volunteer |
| GET | /dashboard | View All Volunteers |
| GET | /edit/:id | Edit Volunteer Details |
| PUT | /edit/:id | Update Volunteer |
| DELETE | /delete/:id | Delete Volunteer |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/NayePankh-Volunteer-Management-System.git
```

### Move into Project Folder

```bash
cd NayePankh-Volunteer-Management-System
```

### Install Dependencies

```bash
npm install
```

### Install Required Packages

```bash
npm install express ejs mysql2 method-override dotenv uuid
```

### Configure Environment Variables

Create a `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=nayepankh
```

### Start Server

```bash
node app.js
```

or

```bash
nodemon app.js
```

---

## 📈 Future Enhancements

- Admin Authentication
- Email Notifications
- Volunteer Certificates
- Export Data to Excel/PDF
- Dashboard Analytics
- Search and Filter System
- Pagination

---

## 🎯 Learning Outcomes

Through this project, I strengthened my understanding of:

- CRUD Operations
- RESTful Routing
- Express.js
- EJS Templating
- MySQL Database Integration
- SQL Queries
- Backend Development Fundamentals

---

## 👨‍💻 Author

### Ujwal Dimri
B.Tech Computer Science Engineering Student

Passionate about Full Stack Development and continuously learning modern web technologies.

---

## 📜 License

This project is developed for educational and internship purposes.# Volunteer-Registration-System-for-NayePankh-Foundation
