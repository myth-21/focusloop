# FocusLoop

FocusLoop is a full-stack hackathon prototype for an AI-style procrastination companion. Users type what they are avoiding, the backend returns a keyword-based mock AI intervention, and the frontend guides them through a friendly 3-screen flow.

No real AI API key is needed for this demo.

## Tech Stack

- Frontend: React + Vite
- Styling: Tailwind CSS
- Icons: Lucide React
- Backend: Node.js + Express
- Data: Mock/hardcoded responses, no database

## Project Structure

```text
focusloop/
├── backend/
│   └── server.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── dist/
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── vite.config.js
├── FocusLoop_README.md
└── FocusLoop_Project_Documentation.md
```

## Features

- Chat-style check-in screen
- Backend `/api/check-in` endpoint for mock AI responses
- Keyword categories for distraction, overwhelm, anxiety, and general procrastination
- Friendly AI response screen with chips, steps, and timer action
- Working 5-minute frontend focus timer
- Backend `/api/progress` endpoint for streak/progress data
- Responsive UI for desktop and mobile
- Production build served by the Express backend

## Run Locally

From the project folder:

```bash
cd C:\projects\focusloop
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

During development:

- Frontend runs on `http://localhost:5173`
- Backend runs on `http://localhost:5000`
- Vite proxies `/api` requests to the backend

## Production Test Locally

```bash
npm run build
npm start
```

Open:

```text
http://localhost:5000
```

In production mode, Express serves both the API and the built React app.

## API Endpoints

```text
GET /api/health
```

Returns backend status.

```text
POST /api/check-in
```

Body:

```json
{
  "message": "I keep opening Instagram instead of studying"
}
```

Returns a tailored mock AI response.

```text
GET /api/progress
```

Returns demo streak/progress data.

## Best Deployment Option

Use **Render** or **Railway** because this project now has both frontend and backend. Deploying it as one Node web service is simpler than splitting frontend and backend across two platforms.

### Deploy on Render

1. Push the `focusloop` folder to a GitHub repository.
2. Go to [https://render.com](https://render.com).
3. Create a new **Web Service**.
4. Connect your GitHub repository.
5. Use these settings:

```text
Environment: Node
Build Command: npm install && npm run build
Start Command: npm start
```

6. Add this environment variable if Render asks for a port:

```text
PORT=10000
```

Render will also provide `PORT` automatically for most Node web services, so you usually do not need to add it manually.

7. Deploy and open the Render URL.

### Deploy on Railway

1. Push the project to GitHub.
2. Go to [https://railway.app](https://railway.app).
3. Create a new project from GitHub.
4. Railway should detect Node automatically.
5. Use:

```text
Build Command: npm install && npm run build
Start Command: npm start
```

6. Generate a public domain from Railway settings.

## Vercel/Netlify Note

Vercel and Netlify are great for frontend-only apps. Since FocusLoop now has an Express backend, the easiest deployment is Render or Railway.

You can still deploy the frontend to Vercel/Netlify and the backend separately, but that requires setting an API base URL and CORS configuration. For a hackathon deadline, deploy the full app together on Render or Railway.

## Demo Script

1. Open FocusLoop.
2. Type: `I keep opening Instagram instead of studying`.
3. Submit the check-in.
4. Show the backend-generated focus timer response.
5. Click `Log progress`.
6. Show the Day 3 streak card.

## Important Limitation

The current AI is mocked with backend keyword logic. It is suitable for a demo, but it is not a real LLM and does not provide medical or mental-health treatment.
