# 🛡️ DeepShield — Deepfake Detection

DeepShield is a deepfake detection web application that uses a custom-trained Convolutional Neural Network to analyze facial features for signs of manipulation.

<br/>

---

## 🖥️ Tech Stack

### Frontend
- **React.js** — Modern component-based UI
- **Tailwind CSS** — Utility-first styling with responsive design
- **shadcn/ui** — Pre-styled, accessible components
- **Glassmorphism UI** — Sleek visual design with subtle blurs and shadows
- **React Router DOM** — Client-side routing for seamless navigation

---


### Key Backend Features
- **Python** with **FastAPI** — Fast and lightweight request handling
- **Custom-Trained Convolutional Neural Network (CNN)** — Detects signs of manipulation in facial features
- **AWS EC2** — Robust model hosting for scalable deployment
- Optimized model inference pipeline for real-time performance
- Backend is handled seperately

The frontend sends `.mp4` video files to the backend API, which returns:
- A **verdict** (Real or Fake)
- The **average fake confidence** score

---

## 📸 Features

- Upload and analyze `.mp4` videos
- Real-time deepfake detection powered by a custom ML model
- Glassy UI with animated transitions
- Friendly error handling and loading states
- Responsive layout across devices

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/deepshield-frontend.git
cd deepshield-frontend

```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

---
## 📹 Live Demo

Click below and watch live demo -

[![Watch the demo](https://img.youtube.com/vi/CIwoXkKb1Ds/0.jpg)](https://www.youtube.com/watch?v=CIwoXkKb1Ds)

---

## 👨‍💻 Contributors

- **Kushagra Gupta**  
- **Rishab Aggrawal**
- **Rashi Gupta**

---

Feel free to reach out for feedback.

*Thank You*

