# 🦊 Fox Voting App

A fullstack web application where users can view random foxes, vote on them, and see statistics.

Built with **Node.js, Express, and EJS**.

---

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/jazzm11/forberedelse-fox-frontend.git
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
npm start
```

4. Open in browser:

```
http://localhost:3000
```

---

## 🚀 Features

* 🦊 Get a random fox
* 👍 Vote for your favorite fox
* 📊 View voting statistics
* 🎨 Simple frontend using EJS templates

---

## 📁 Project Structure

```
project/
│
├── controllers/
│   └── foxController.js      # Handles logic (get fox, vote, stats)
│
├── routes/
│   └── foxRouter.js          # Defines API routes
│
├── utils/
│   ├── getApi.js             # Handles GET requests (external API)
│   └── postApi.js            # Handles POST requests
│
├── public/
│   └── css/                  # Stylesheets
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
│   ├── index.ejs             # Homepage (random fox)
│   └── stats.ejs             # Statistics page
│
├── server.js                 # Main server file
├── package.json
└── README.md
```

---

## 🌐 Routes

### GET `/`

* Displays a random fox on the homepage

### GET `/stats`

* Shows statistics about fox votes

### POST `/vote`

* Sends a vote for a fox

Example:

```json
{
  fox: [
    winner: {
        imageUrl: "url.com"
    },
    loser: {
        imageUrl: "url.com"
    }
}
```

---

## 🧠 How It Works

* **Routes** handle incoming requests
* **Controllers** process logic and data
* **Utils** handle API communication
* **Views (EJS)** render the frontend
* **Public folder** stores CSS

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* EJS (Embedded JavaScript Templates)
* HTML & CSS

---

## 📌 Notes

* Make sure the server is running before accessing the app
* You can test POST routes using Postman or Thunder Client
* Keep your API logic inside the `controllers` and `utils` folders for clean structure

---

## ✅ Future Improvements

* Add user authentication
* Store votes in a database (MongoDB)
* Improve UI/UX
* Add more animal types

---
