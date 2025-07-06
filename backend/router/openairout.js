const express = require('express');
const router = express.Router();

// Controllers
const chatcontroller = require('../controllers/chat.controller');

// Routes
router.post('/chat/message',chatcontroller.chatWithAI);
router.post('/emotion/classify', classifyEmotion);
router.post('/journal', summarizeJournal);
router.post('/quiz', analyzeQuiz);
router.post('/planner/generate', generatePlanner);

module.exports = router;
