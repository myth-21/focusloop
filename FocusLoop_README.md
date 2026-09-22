# FocusLoop 🚀

> **An AI companion that helps students and young professionals overcome procrastination through conversational check-ins and personalized micro-interventions.**

## Overview

FocusLoop is a minimal web application prototype designed to help users understand why they are procrastinating and take a small, actionable step toward starting their task.

Unlike traditional productivity tools that mainly organize tasks, FocusLoop focuses on the emotional and behavioral barriers behind procrastination, such as:

- Distraction
- Overwhelm
- Anxiety
- Difficulty getting started

The current hackathon prototype uses keyword-based mock logic to simulate AI responses. No backend, API key, or external AI service is required.

---

## Current Implementation

This version is intentionally split into separate static files and does **not** need Vite, `npm install`, a backend, or an API key.

```text
focusloop/
├── index.html
├── app.jsx
├── styles.css
├── tailwind.config.js
├── FocusLoop_README.md
└── FocusLoop_Project_Documentation.md
```

To run locally:

```powershell
cd C:\projects\focusloop
node -e "const http=require('http'),fs=require('fs'),path=require('path');const root=process.cwd();http.createServer((req,res)=>{const u=new URL(req.url,'http://localhost');let file=path.join(root,u.pathname==='/'?'index.html':u.pathname);fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found')}res.writeHead(200,{'Content-Type':file.endsWith('.html')?'text/html; charset=utf-8':file.endsWith('.css')?'text/css; charset=utf-8':'text/javascript; charset=utf-8'});res.end(data)})}).listen(5173,()=>console.log('http://localhost:5173'))"
```

For Netlify, drag and drop the full `focusloop` folder. For Vercel, deploy it as a static project with no build command and output directory `.`.

---

## Problem Statement

Many students and young professionals know what they need to do but struggle to begin. Traditional productivity apps generally focus on task management, reminders, and scheduling. They may not address the reason a user is avoiding a task.

FocusLoop aims to support the starting process through short conversational check-ins and simple micro-interventions.

---

## Proposed Solution

FocusLoop follows a simple workflow:

1. The user explains what they are avoiding or why they are procrastinating.
2. The prototype identifies keywords in the user's input.
3. FocusLoop provides a relevant response.
4. The user can view a progress and streak screen.

### Example Interventions

| User Input Pattern | Prototype Response |
|---|---|
| Social media or distraction | Suggest a 5-minute focus session |
| Overwhelm or task is too big | Break the task into three smaller steps |
| Anxiety | Provide a short reframing message |
| Other input | Provide a general encouraging starter action |

---

## Features

- Chat-style check-in interface
- Keyword-based response logic
- Micro-intervention suggestions
- 5-minute focus-session concept
- Task breakdown suggestions
- Anxiety reframing message
- Streak and progress display
- Responsive and modern user interface
- Frontend-only implementation
- Static deployment support

---

## Technology Stack

- **Frontend:** React
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Logic:** JavaScript keyword-based mock responses
- **Backend:** Not required for the prototype
- **Database:** Not required for the prototype
- **Deployment:** Vercel or Netlify

---

## Application Flow

```text
User opens FocusLoop
        |
        v
Check-in Screen
        |
        v
User enters procrastination reason
        |
        v
Keyword-based response logic
        |
        v
AI Response Screen
        |
        v
Micro-intervention suggestion
        |
        v
Streak / Progress Screen
```

---

## Project Structure

A typical React + Vite structure may look like this:

```text
focusloop/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

The exact structure may vary depending on the implementation.

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd focusloop
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## Deployment

### Deploy using Vercel

1. Push the project to GitHub.
2. Open [https://vercel.com](https://vercel.com).
3. Import the GitHub repository.
4. Set the framework to **Vite** if it is not detected automatically.
5. Use the following settings:

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

6. Click **Deploy**.

### Deploy using Netlify

1. Push the project to GitHub.
2. Open [https://www.netlify.com](https://www.netlify.com).
3. Import the repository.
4. Configure:

```text
Build Command: npm run build
Publish Directory: dist
```

5. Deploy the application.

---

## Prototype Limitations

The current version is intended for a hackathon demonstration.

- Responses are simulated using keyword matching.
- There is no real LLM integration.
- User data is not persisted in a database.
- The streak value is a demonstration value unless connected to real tracking logic.
- Procrastination patterns are not actually learned or predicted.
- The prototype does not provide medical or mental-health treatment.

---

## Future Enhancements

### 1. Real AI Integration

Integrate an LLM API to generate more flexible and context-aware responses.

### 2. User Accounts

Add authentication and individual user profiles.

### 3. Personalized Pattern Detection

Track check-ins over time to identify recurring procrastination triggers.

### 4. Adaptive Interventions

Recommend different interventions based on the user's history and feedback.

### 5. Focus Timer

Add a working timer with session completion tracking.

### 6. Progress Analytics

Display focus sessions, streaks, completed tasks, and recurring distraction patterns.

### 7. Notifications

Send optional reminders and check-in notifications.

---

## Hackathon Value Proposition

FocusLoop focuses on a practical gap in productivity: users often need help starting a task rather than simply recording it.

The prototype demonstrates how conversational interfaces can deliver small, context-specific interventions in a simple workflow.

The future vision is to develop FocusLoop into a personalized, privacy-conscious behavioral support tool for students and young professionals.

---

## Team

**Team Name:** JatayuX

**Project:** FocusLoop

**Category:** AI / Productivity / Student Well-being

---

## License

This project is created as a hackathon prototype. Add an appropriate open-source license if you plan to publish and distribute the project.
