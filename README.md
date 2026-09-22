# FocusLoop

## AI-Assisted Procrastination Support for Students and Young Professionals

FocusLoop is a web application prototype designed to help students and young professionals overcome procrastination through conversational check-ins and personalized micro-interventions.

Unlike conventional productivity applications that primarily focus on task organization, reminders, and scheduling, FocusLoop focuses on understanding the user's immediate barrier to starting a task. Based on the user's input, the prototype provides a relevant and actionable suggestion.

The current version is a frontend-only prototype that uses keyword-based logic to simulate AI responses. It does not require a backend, database, API key, or external AI service.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Problem Statement](#problem-statement)
- [Proposed Solution](#proposed-solution)
- [Objectives](#objectives)
- [Key Features](#key-features)
- [Application Workflow](#application-workflow)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Response Logic](#response-logic)
- [Installation and Setup](#installation-and-setup)
- [Deployment](#deployment)
- [Testing](#testing)
- [Limitations](#limitations)
- [Future Enhancements](#future-enhancements)
- [Team](#team)
- [License](#license)

---

## Project Overview

Procrastination is not always caused by a lack of awareness or planning. Users may know what they need to do but still struggle to begin because of distraction, anxiety, task complexity, or mental resistance.

FocusLoop addresses this challenge through a simple interaction:

1. The user describes why they are avoiding a task.
2. The application identifies a relevant category using predefined keywords.
3. The application provides a contextual micro-intervention.
4. The user can view a progress and streak interface.

The prototype demonstrates the concept of conversational productivity support and provides a foundation for future AI integration.

---

## Problem Statement

Many productivity tools help users create task lists, schedule activities, and set reminders. However, these tools may not address the underlying reasons users delay starting a task.

FocusLoop explores the following problem:

> How can a digital companion help users identify a procrastination trigger and take a manageable first step toward completing a task?

---

## Proposed Solution

FocusLoop provides a conversational check-in interface where users can describe their current difficulty. The application processes the input locally and returns a predefined intervention based on the detected keywords.

Examples include:

| Detected Pattern | Suggested Intervention |
|---|---|
| Social media or distraction | Start a five-minute focus session |
| Overwhelm or a task that feels too large | Divide the task into three smaller steps |
| Anxiety or fear of starting | Provide a short reframing message |
| Unrecognized input | Recommend one manageable starting action |

---

## Objectives

- Provide an accessible conversational check-in interface.
- Help users recognize common procrastination triggers.
- Recommend small and practical actions.
- Demonstrate a simple AI-assisted productivity workflow.
- Provide a progress and streak visualization.
- Create a scalable foundation for future personalization.
- Deliver a lightweight prototype suitable for hackathon demonstration.

---

## Key Features

- Chat-style check-in interface
- Keyword-based input classification
- Tailored mock responses
- Five-minute focus-session suggestion
- Task decomposition suggestion
- Anxiety reframing message
- Streak and progress display
- Responsive user interface
- Frontend-only execution
- Static deployment compatibility

---

## Application Workflow

```text
User
  |
  v
Check-in Screen
  |
  v
User enters procrastination reason
  |
  v
Local keyword-based response logic
  |
  v
AI Response Screen
  |
  v
Micro-intervention suggestion
  |
  v
Streak and Progress Screen
```

---

## Technology Stack

| Technology | Purpose |
|---|---|
| React | User interface development |
| Vite | Development server and build tooling |
| Tailwind CSS | Styling and responsive design |
| JavaScript | Input processing and response logic |
| Vercel / Netlify | Static deployment |

No backend, database, or external API is required for the current prototype.

---

## Project Structure

A typical React and Vite implementation may use the following structure:

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

The exact structure may vary based on the implementation.

---

## Response Logic

The prototype uses predefined keyword conditions to simulate contextual responses.

Example implementation:

```javascript
function getResponse(message) {
  const text = message.toLowerCase();

  if (
    text.includes("instagram") ||
    text.includes("social media") ||
    text.includes("distraction")
  ) {
    return "Try a 5-minute focus session. Put your phone aside and begin with one small action.";
  }

  if (
    text.includes("too big") ||
    text.includes("overwhelmed") ||
    text.includes("overwhelm")
  ) {
    return "Break the task into three small steps and begin with the first one.";
  }

  if (
    text.includes("anxiety") ||
    text.includes("anxious") ||
    text.includes("scared")
  ) {
    return "You do not need to complete everything immediately. Focus on one manageable first step.";
  }

  return "Choose one small action you can complete in the next five minutes and begin there.";
}
```

This implementation is a simulation mechanism. It is not a real language model and does not perform machine learning or behavioral prediction.

---

## Installation and Setup

### Prerequisites

- Node.js and npm
- Git
- A modern web browser

### Step 1: Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd focusloop
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal. The default Vite URL is generally:

```text
http://localhost:5173
```

### Step 4: Build the Application

```bash
npm run build
```

### Step 5: Preview the Production Build

```bash
npm run preview
```

---

## Deployment

### Vercel

1. Push the project to a GitHub repository.
2. Sign in to Vercel.
3. Import the repository.
4. Select Vite if the framework is not detected automatically.
5. Configure the build settings:

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

6. Deploy the application.

Official website: https://vercel.com

### Netlify

1. Push the project to GitHub.
2. Sign in to Netlify.
3. Import the repository.
4. Configure the build settings:

```text
Build Command: npm run build
Publish Directory: dist
```

5. Deploy the application.

Official website: https://www.netlify.com

---

## Testing

The following scenarios should be tested before the hackathon demonstration:

| Test Case | Input | Expected Result |
|---|---|---|
| TC01 | I keep opening Instagram | Distraction intervention |
| TC02 | My project is too big | Task breakdown intervention |
| TC03 | I feel anxious about studying | Reframing intervention |
| TC04 | Empty input | Validation or submission prevention |
| TC05 | Unrecognized input | Default intervention |
| TC06 | Navigation button click | Correct screen displayed |

Testing should include desktop and mobile screen sizes.

---

## Limitations

- Responses are generated through predefined keyword matching.
- The prototype does not use a real language model.
- User data is not stored in a database.
- The displayed streak may be static or locally simulated.
- Procrastination patterns are not actually learned or predicted.
- The prototype does not provide clinical, medical, or psychological treatment.
- Keyword matching may fail to recognize nuanced user expressions.

---

## Future Enhancements

### Real AI Integration

Integrate a language model to generate more flexible and context-aware responses.

### User Authentication

Add secure registration, login, and individual user profiles.

### Personalization

Adapt recommendations based on user preferences, previous check-ins, and completed focus sessions.

### Behavioral Analytics

Analyze recurring procrastination triggers using privacy-conscious data practices.

### Predictive Interventions

Explore whether historical patterns can support timely interventions before a procrastination episode. This feature would require sufficient data, testing, and validation.

### Focus Timer

Implement a functional focus timer with session completion and break tracking.

### Progress Analytics

Track focus sessions, streaks, completed tasks, and recurring distraction patterns.

### Notifications

Provide optional reminders and check-ins with explicit user consent.

---

## Project Significance

FocusLoop addresses a practical limitation of conventional productivity tools: organizing tasks does not necessarily help users begin them.

The project demonstrates how conversational interfaces can deliver small, context-specific interventions based on a user's stated difficulty. Its current implementation prioritizes simplicity and rapid demonstration, while its architecture allows future expansion into a more personalized application.

---

## Team

**Team Name:** JatayuX

**Project Name:** FocusLoop

**Project Category:** AI, Productivity, and Student Support

---

## License

This project was developed as a hackathon prototype. An appropriate open-source license should be added if the project is intended for public distribution.
