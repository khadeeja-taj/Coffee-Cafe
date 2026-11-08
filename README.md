# ☕ Fern and Petal Cafe

A responsive, single-page cafe website built with **HTML, CSS, and JavaScript** as part of a front-end web development assignment. It presents a fictional garden cafe — complete with a menu, an interactive order calculator, and a booking form — to demonstrate core DOM-manipulation and responsive-design skills using no frameworks or libraries.

---

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [How to Run the Project](#-how-to-run-the-project)
- [Live Demo](#-live-demo)
- [Screenshots](#-screenshots)

---

## ✨ Features

All features below are implemented in the project's own HTML, CSS, and JavaScript:

- 🌗 **Light / Dark mode toggle** — switches the entire page theme with a single button.
- 🕒 **Dynamic opening-status banner** — automatically shows "We are Open!" or "Closed" based on the visitor's current time of day.
- 🧾 **Interactive order calculator** — tick items in the order table to see a live running total update instantly.
- 🖱️ **Table row highlighting** — order-menu rows highlight on mouse hover.
- 🔎 **Live category filter** — filter the order menu by *All*, *Drinks*, or *Pastries*.
- 📖 **"Read More" toggle** — expands and collapses extra text in the About Us section.
- ✍️ **Live character counter** — counts remaining characters in the special-requests field as you type.
- 📝 **Booking form with validation** — shows a personalized thank-you message only when the name and email are filled in.
- 🎉 **Age-based discount check** — calculates age from the birth year and displays a student or senior discount message.
- 📱 **Fully responsive design** — adapts the layout for mobile and desktop using CSS media queries.
- ⚓ **Smooth-scroll navigation** — a sticky navigation bar scrolls smoothly to each section.

---

## 🛠️ Technologies Used

- **HTML5** — page structure and content.
- **CSS3** — styling, Flexbox layout, dark mode, and responsive media queries.
- **JavaScript (Vanilla)** — all interactivity through DOM manipulation and event listeners (no external libraries or frameworks).

---

## 📁 Project Structure

```
Coffee-Cafe/
├── index.html    # Page structure and content (the main entry point)
├── styles.css    # All styling, including dark mode and responsive rules
├── script.js     # All interactivity (toggles, order total, filters, form logic)
├── cafe.jpeg     # Photo used in the welcome section
└── README.md     # Project documentation (this file)
```

---

## 🚀 How to Run the Project

This is a static website, so no installation or build tools are required.

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/khadeeja-taj/Coffee-Cafe.git
   ```
   (Or click the green **Code** button on GitHub and choose **Download ZIP**, then extract it.)
2. Open the project folder and **double-click the `index.html` file**.
3. The website will open automatically in your default web browser.

> 💡 *For the best experience, use a modern browser such as Google Chrome or Mozilla Firefox.*

---

## 🌐 Live Demo

This project can be published for free using **GitHub Pages**.

> ⚠️ **Note:** GitHub Pages is not enabled yet, so the live link is not active. Once you enable it (steps below), the site will be available at:
>
> **`https://khadeeja-taj.github.io/Coffee-Cafe/`**

### How to enable GitHub Pages

1. Open your repository on GitHub and go to **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Choose the **`main`** branch and the **`/ (root)`** folder, then click **Save**.
5. Wait about a minute, then refresh the page. GitHub will display your live site URL.

📖 Official guide: <https://docs.github.com/en/pages/quickstart>

---

## 📸 Screenshots

Screenshots help visitors preview the project without running it. To add them:

1. Take screenshots of the website (for example, the homepage, the dark-mode view, and the booking form).
2. Create a `screenshots/` folder in the repository and add your image files to it.
3. Reference them in this section using Markdown, for example:

   ```markdown
   ![Homepage](screenshots/homepage.png)
   ![Dark Mode](screenshots/dark-mode.png)
   ```

---

© 2026 Fern and Petal Cafe. Built for an academic front-end web development assignment.
