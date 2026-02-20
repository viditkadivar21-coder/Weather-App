# 🌦️ Weather App

A clean and modern **Weather App** built with **HTML, CSS, and Vanilla JavaScript**. It fetches real-time weather data and a multi-day forecast using the **WeatherAPI** and presents it in a sleek, glassmorphism-style UI.

---

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Current temperature (°C)
* ☁️ Weather condition with dynamic icons
* 💧 Humidity and 🌬️ wind speed
* 📅 6-day weather forecast
* 💾 Remembers last searched city (LocalStorage)
* 🎨 Modern UI with blur & gradient effects

---

## 🛠️ Tech Stack

* **HTML5** – structure
* **CSS3** – styling (glassmorphism, responsive layout)
* **JavaScript (ES6)** – logic & API handling
* **WeatherAPI** – weather data source

---

## 📂 Project Structure

```
weather-app/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── bg.jpg
│   ├── clouds.svg
│   ├── rain.svg
│   ├── clear.svg
│   ├── snow.svg
│   ├── thunderstorm.svg
│   ├── atmosphere.svg
│   ├── search-city.png
│   └── not-found.png
└── README.md
```

---

## ⚙️ Setup & Usage

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Open the project**

   ```bash
   cd weather-app
   ```

3. **Add your WeatherAPI key**
   Open `js/script.js` and replace:

   ```js
   const apiKey = "YOUR_API_KEY";
   ```

4. **Run the app**
   Simply open `index.html` in your browser.

---

## 🌐 API Used

* **WeatherAPI**

  * Current Weather endpoint
  * Forecast endpoint (7 days)

---

## 🧠 How It Works (Quick Overview)

* User searches for a city
* App fetches data from WeatherAPI
* UI updates dynamically
* Forecast is generated day-by-day
* Last searched city is saved and auto-loaded on refresh

---

## 📸 Screenshots

> Add screenshots or a demo GIF here to showcase the UI ✨

---

## 🔒 Notes

* This project uses **client-side API calls**, so do **not expose real API keys** in production.
* For production, use environment variables or a backend proxy.

---

## 🙌 Credits

* Weather data: **WeatherAPI**
* Icons & fonts: Google Fonts & custom SVGs

---

## 📜 License

This project is open-source and free to use for learning and personal projects.

---
