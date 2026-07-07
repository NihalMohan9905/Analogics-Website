# ChatBot API Setup Guide

## Overview
The chatbot is now integrated with **Groq API** - a free AI service with generous monthly limits and fast inference.

## Why Groq?
- ✅ **Free Tier**: 14,400 requests/day, 7,000 requests/min
- ✅ **Monthly Reset**: Limits reset every month
- ✅ **Fast**: Ultra-fast inference speed
- ✅ **No Credit Card**: Sign up without payment details
- ✅ **Multiple Models**: Llama 3.3 70B, Mixtral, and more

---

## Setup Instructions

### Step 1: Get Your Free Groq API Key

1. Visit **[Groq Console](https://console.groq.com/)**
2. Sign up for a free account (no credit card required)
3. Go to **[API Keys](https://console.groq.com/keys)**
4. Click **"Create API Key"**
5. Copy your API key

### Step 2: Configure the Environment Variable

1. Open the `.env` file in the project root
2. Add your Groq API key:
   ```env
   VITE_GROQ_API_KEY=gsk_your_actual_api_key_here
   ```
3. Save the file

### Step 3: Restart the Development Server

If your dev server is running, restart it to load the new environment variable:

```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

---

## Testing the ChatBot

1. Open your website in the browser
2. Click the chat icon in the bottom-right corner
3. Try asking questions like:
   - "What products do you offer?"
   - "Tell me about your biometric devices"
   - "How can I get a quote?"
   - "What are your contact details?"

---

## System Prompt Customization

The chatbot's behavior is controlled by the system prompt in `src/services/chatbotApi.js`:

```javascript
const SYSTEM_PROMPT = `You are a helpful AI assistant for Analogics Group...`
```

### Modify the System Prompt:

You can customize the chatbot's personality, knowledge, and response style by editing the `SYSTEM_PROMPT` variable. For example:

```javascript
const SYSTEM_PROMPT = `You are an expert sales assistant for Analogics Group.

Your Goals:
- Help customers find the right products
- Generate qualified leads
- Provide technical specifications
- Schedule demos and consultations

Tone: Professional, enthusiastic, solution-oriented

When discussing pricing, always encourage them to contact sales for custom quotes.`;
```

---

## API Configuration

### Current Model
- **Model**: `llama-3.3-70b-versatile`
- **Best for**: Balanced performance and quality
- **Max tokens**: 500 per response

### Switch to Faster Model (Lower Token Usage)

In `src/services/chatbotApi.js`, change the model:

```javascript
model: 'llama-3.1-8b-instant', // Faster, lower cost
```

### Available Models:
1. **llama-3.3-70b-versatile** - Most capable (current)
2. **llama-3.1-8b-instant** - Fastest
3. **mixtral-8x7b-32768** - Good for complex queries

---

## Rate Limits (Free Tier)

| Metric | Limit |
|--------|-------|
| Requests per Day | 14,400 |
| Requests per Minute | 7,000 |
| Tokens per Minute | 30,000 |

**These limits reset monthly!**

---

## Troubleshooting

### Issue: "I'm currently unable to connect"
- **Cause**: API key not configured or invalid
- **Solution**: Check `.env` file and ensure key starts with `gsk_`

### Issue: "I'm receiving a lot of requests"
- **Cause**: Rate limit exceeded (429 error)
- **Solution**: Wait a minute or upgrade to paid tier

### Issue: Chatbot not responding
- **Cause**: Environment variable not loaded
- **Solution**: Restart the dev server after adding the API key

### Issue: "API authentication failed"
- **Cause**: Invalid or expired API key
- **Solution**: Generate a new key from Groq Console

---

## Advanced Features

### Conversation Context
The chatbot remembers the last 10 messages for context. Adjust in `ChatBot.jsx`:

```javascript
// Keep more/less context
const conversationHistory = [...messages.slice(-10), userMessage];
```

### Adjust Response Length
In `src/services/chatbotApi.js`:

```javascript
max_tokens: 500, // Increase for longer responses
```

### Temperature Control
Control creativity vs consistency:

```javascript
temperature: 0.7, // 0 = focused, 1 = creative
```

---

## Cost & Usage Monitoring

- Check usage at: **[Groq Console](https://console.groq.com/)**
- Monitor requests/day and tokens used
- Set up alerts when approaching limits

---

## Alternative Free APIs (If Needed)

If you exceed Groq limits, alternatives include:

1. **Google Gemini** - 60 requests/min free
   - [https://ai.google.dev/](https://ai.google.dev/)
   
2. **OpenAI (New Accounts)** - Free trial credits
   - [https://platform.openai.com/](https://platform.openai.com/)

3. **Hugging Face Inference API** - Free tier available
   - [https://huggingface.co/inference-api](https://huggingface.co/inference-api)

---

## Security Best Practices

⚠️ **Important**: Never commit your `.env` file to Git!

The `.env` file is already in `.gitignore`, but double-check:

```bash
# Check if .env is ignored
git status
```

If `.env` appears, add it to `.gitignore`:

```
# Add to .gitignore
.env
```

---

## Support

For issues or questions:
- Check Groq Documentation: [https://console.groq.com/docs](https://console.groq.com/docs)
- Review the code in `src/services/chatbotApi.js`
- Check console logs for error messages

---

## Summary

✅ Free API with monthly token reset  
✅ Easy integration with system prompts  
✅ Fast inference speed  
✅ No credit card required  
✅ Generous limits for small to medium websites  

**Your chatbot is now powered by AI! 🤖**
