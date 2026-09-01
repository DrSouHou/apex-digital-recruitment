# ⚡ APEX DIGITAL — Official Recruitment & Tech Portal

[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Google Apps Script](https://img.shields.io/badge/Google_Apps_Script-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/apps-script)

> High-performance static recruitment and onboarding portal for **APEX DIGITAL**, the premier student tech & innovation community at **Université Internationale Bleue (UIB)**.

---

## 🚀 Overview

This platform streamlines recruitment across all sister institutions (**SupTech Santé**, **SupTech Environnement**, and **SupTech Sciences Informatiques**). It features dynamic cascading academic selection, serverless candidate registration with real-time duplicate prevention, and automated confirmation dispatch.

### Key Features

* **Dynamic Program Cascade:** 4-tier dependent selection (**Établissement → Niveau d'accès → Filière → Année d'étude**) matching official UIB admissions data.
* **Serverless Backend Integration:** Direct webhook communication with Google Apps Script & Google Sheets.
* **Anti-Duplicate Protection:** Real-time email and phone verification against existing database entries.
* **Branded Email Dispatch:** Automated HTML confirmation emails sent via official club endpoints (`apexdigital.uib@gmail.com`).
* **Modern UI & Responsive Theming:** Built with Tailwind CSS, default light mode with full dark mode support.
* **Edge Static Deployment:** Optimized static export (`out/`) tailored for global edge delivery on **Cloudflare Pages**.

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (Static Export), React, TypeScript
* **Styling:** Tailwind CSS, React Icons / SVG
* **Backend / Database:** Google Apps Script Web App, Google Sheets API
* **Deployment:** Cloudflare Pages (Custom DNS / Edge CDN)

---

## 📦 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/DrSouHou/apex-digital-recruitment.git
cd apex-digital-recruitment
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build Static Export
```bash
npm run build
```
The compiled, production-ready static assets will be generated in the `/out` directory.

---

## 👨‍💻 Author & Leadership

* **Lead Developer & Head of Tech:** **Souhail HAFIDI** — *Cellule Tech & Innovation*
* **Organization:** APEX DIGITAL — Université Internationale Bleue (UIB)
* **Contact:** [apexdigital.uib@gmail.com](mailto:apexdigital.uib@gmail.com)

---

## 📄 License
This project is proprietary and maintained by APEX DIGITAL. All rights reserved © 2026.
