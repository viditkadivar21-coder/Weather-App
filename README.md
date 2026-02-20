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

<img width="1698" height="785" alt="Screenshot 2026-02-20 123929" src="https://github.com/user-attachments/assets/76ec1c9e-7c63-4f01-a911-a797cd2ed20b" />
<img width="1397" height="901" alt="Screenshot 2026-02-20 124027" src="https://github.com/user-attachments/assets/7e319af3-d493-4ad7-9a9e-22e23cfb33c6" />
<img width="1487" height="829" alt="Screenshot 2026-02-20 124059" src="https://github.com/user-attachments/assets/5683dd7f-b684-4511-be78-d6382271d168" />
<img width="1333" height="819" alt="Screenshot 2026-02-20 124130" src="https://github.com/user-attachments/assets/8d300fdc-8c52-4881-97e2-1344c5bb0e5a" />

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
