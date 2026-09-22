import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

function buildReply(input) {
  const text = String(input || "").toLowerCase();

  if (
    text.includes("instagram") ||
    text.includes("tiktok") ||
    text.includes("youtube") ||
    text.includes("twitter") ||
    text.includes("social") ||
    text.includes("scroll") ||
    text.includes("phone") ||
    text.includes("distraction")
  ) {
    return {
      type: "timer",
      tone: "distraction",
      title: "Let's make the next move tiny.",
      message:
        "Put the distraction out of reach and give me just 5 minutes. Your only job is to start, not to finish.",
      action: "Start 5-min focus timer",
      chips: ["Move phone away", "Open task", "Work for 5 minutes"],
    };
  }

  if (
    text.includes("too big") ||
    text.includes("overwhelm") ||
    text.includes("overwhelmed") ||
    text.includes("huge") ||
    text.includes("massive") ||
    text.includes("don't know where to start") ||
    text.includes("dont know where to start")
  ) {
    return {
      type: "steps",
      tone: "overwhelm",
      title: "Big tasks need a smaller doorway.",
      message: "Try this 3-step version for the next 15 minutes:",
      steps: [
        "Open the file, tab, book, or workspace.",
        "Write the roughest possible first sentence or checklist.",
        "Do one visible action that future-you can continue from.",
      ],
      chips: ["Open workspace", "Make a rough list", "Finish one tiny piece"],
    };
  }

  if (
    text.includes("anxiety") ||
    text.includes("anxious") ||
    text.includes("panic") ||
    text.includes("scared") ||
    text.includes("afraid") ||
    text.includes("worried") ||
    text.includes("stress")
  ) {
    return {
      type: "reframe",
      tone: "anxiety",
      title: "This feeling is loud, but it is not the boss.",
      message:
        "You do not need to feel ready before beginning. Take one slow breath, name the next tiny action, and let momentum arrive after the first step.",
      chips: ["Breathe once", "Name next action", "Start gently"],
    };
  }

  return {
    type: "default",
    tone: "general",
    title: "Let's shrink the starting line.",
    message:
      "Set a 10-minute promise: touch the task, make one small change, and stop judging the whole project for now.",
    chips: ["10-minute promise", "One small change", "No judging"],
  };
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "FocusLoop API" });
});

app.post("/api/check-in", (req, res) => {
  const message = req.body?.message;

  if (!message || !String(message).trim()) {
    return res.status(400).json({
      error: "Message is required.",
    });
  }

  res.json({
    input: String(message).trim(),
    reply: buildReply(message),
  });
});

app.get("/api/progress", (_req, res) => {
  res.json({
    streakDays: 3,
    weeklyGoal: 5,
    completedDays: 3,
    motivationalLine: "You showed up before the motivation did. That counts.",
    wins: ["Checked in", "Started small", "Protected focus"],
  });
});

const frontendDist = path.join(__dirname, "..", "dist");
app.use(express.static(frontendDist));

app.get("*", (_req, res) => {
  res.sendFile(path.join(frontendDist, "index.html"));
});

app.listen(PORT, () => {
  console.log(`FocusLoop server running on port ${PORT}`);
});
