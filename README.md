# README

# 📅 Historical Events App

A simple web app that lets users input a day and month of the year, then displays **historical events**, **birthdays**, or **deaths** that happened on that date.

## 🚀 Features

* Input any date in the format:
  ```
  Day (1-31) | Month (1-12)
  ```

  Example:
  ```
  17 4
  ```

  → Will return events for **April 17**.
* Displays events, famous birthdays, and notable deaths for the selected date.
* Runs locally with **Node.js** and **Express**.

## 📦 Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/RobinVillier/Events-By-Date
   cd historical-events-app
   ```

2. Install dependencies:
   ```bash
   npm i
   ```

3. Start the app in development mode with **nodemon**:
   ```bash
   nodemon index.js
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 🛠 Requirements

* Node.js (v14+ recommended)
* npm (comes with Node.js)
* nodemon (for hot-reloading)

## 📖 Usage

1. Enter a date in the input field following the format:
   17 4

2. The app will display a list of:
   * **Events** that occurred on that date
   * **Births** of notable people
   * **Deaths** of notable people
