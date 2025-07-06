const { getChatCompletion } = require('../utils/gptHelper');

exports.chatWithAI = async (req, res) => {
  const { message } = req.body;

  const prompt = [
    { role: 'system', content: 'You are a supportive AI mental health assistant.' },
    { role: 'user', content: message }
  ];

  try {
    const reply = await getChatCompletion(prompt);
    res.json({ reply });
  } catch {
    res.status(500).json({ error: 'AI failed' });
  }
};

exports.classifyEmotion = async (req, res) => {
  const { message } = req.body;

  const prompt = [
    { role: 'system', content: 'Classify the emotion: happy, sad, anxious, angry, neutral, or overwhelmed. Reply with one word only.' },
    { role: 'user', content: message }
  ];

  try {
    const emotion = await getChatCompletion(prompt);
    res.json({ emotion: emotion.trim().toLowerCase() });
  } catch {
    res.status(500).json({ error: 'Emotion detection failed' });
  }
};

exports.summarizeJournal = async (req, res) => {
  const { entry } = req.body;

  const prompt = [
    { role: 'system', content: 'Summarize the journal kindly. Offer 1 tip based on emotional tone.' },
    { role: 'user', content: entry }
  ];

  try {
    const summary = await getChatCompletion(prompt);
    res.json({ summary });
  } catch {
    res.status(500).json({ error: 'Journal summarization failed' });
  }
};


exports.analyzeQuiz = async (req, res) => {
  const { answers } = req.body;

  const prompt = [
    { role: 'system', content: 'Based on the quiz, give a short reflection and 1 helpful tip.' },
    { role: 'user', content: answers }
  ];

  try {
    const reflection = await getChatCompletion(prompt);
    res.json({ reflection });
  } catch {
    res.status(500).json({ error: 'Quiz analysis failed' });
  }
};

exports.generatePlanner = async (req, res) => {
  const { moodHistory } = req.body;

  const prompt = [
    { role: 'system', content: 'Create a 7-day mental self-care plan based on mood trends. Use friendly tone.' },
    { role: 'user', content: `Last 7 moods: ${moodHistory.join(', ')}` }
  ];

  try {
    const plan = await getChatCompletion(prompt);
    res.json({ plan });
  } catch {
    res.status(500).json({ error: 'Planner failed' });
  }
}