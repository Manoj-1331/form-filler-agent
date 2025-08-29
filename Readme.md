Great work putting all that together! Here's a clean, professional `README.md` file tailored for your **Auto Form Filling Agent** project using OpenAI + Playwright:

---
# 🤖 Auto Form Filler Agent

[![Watch the Demo](https://img.youtube.com/vi/CjTMsG0hiFQ/0.jpg)](https://youtu.be/CjTMsG0hiFQ)

This project is an AI-powered automation agent that fills out online forms...

````markdown
# 🤖 Auto Form Filler Agent

This project is an **AI-powered automation agent** that fills out online forms based on natural language input. It uses:

- 🧠 OpenAI's `@openai/agents` to create a smart agent
- 🧰 A custom tool built with **Playwright** to interact with real websites
- 💬 Command-line interface (CLI) for user input

---

## 📦 Features

- Accepts a user query from the command line (e.g., "Fill the form at XYZ with email, name, password...")
- Parses the natural language input
- Uses a headful Playwright browser to:
  - Navigate to the given URL
  - Locate input fields
  - Type in provided data
  - Submit the form

---

## 🛠 Tech Stack

| Tool         | Purpose                                  |
|--------------|------------------------------------------|
| OpenAI Agent | Natural language understanding + planning|
| Playwright   | Browser automation (like Selenium, but modern) |
| Node.js      | Runtime                                 |
| dotenv       | To manage API keys securely             |

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Manoj-1331/form-filler-agent.git
cd auto-form-filler-agent
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add your OpenAI API key

Create a `.env` file in the root directory:

```env
OPENAI_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> You can get your key from [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

### 4. Run the agent

```bash
node main.js
```

You’ll be prompted with:

```
Your query:
```

### 5. Example Queries

Try any of the following:

```bash
Fill the form at https://ui.chaicode.com/auth/signup with first name test, last name coder, email test@abc.com, password Pass1234
```
---

## 🧠 How It Works

### 🔧 The Tool: `formFillerTool`

This is a custom agent **tool** that launches a browser using Playwright and fills the form using selectors like:

```js
await page.type('#firstName', firstName)
await page.type('#lastName', lastName)
await page.type('#email', email)
```

It’s registered to the agent with input parameters like:

```js
{
  url: 'https://example.com',
  firstName: 'tesr',
  lastName: 'coder',
  email: 'tester@example.com',
  password: 'secret123'
}
```

### 🤖 The Agent

The agent uses OpenAI's capabilities to:

* Parse your natural language query
* Extract structured parameters
* Call `formFillerTool` with those parameters

---

## ✅ Prerequisites

* Node.js ≥ 18
* A valid [OpenAI API key](https://platform.openai.com/account/api-keys)
* Internet connection (the agent loads live websites)

---

## 📂 Project Structure

```
.
├── main.js             # Entry point
├── .env                # Your OpenAI API key
├── package.json
└── README.md
```

---

## 🧪 Debugging Tips

* If Playwright can’t find a selector, update the form field IDs/classes in the tool logic
* Check browser console for errors (since it opens in `headless: false`)
* Add `console.log` inside the tool function to debug steps

---

## 🔒 Security Warning

Do **not** use real passwords or sensitive data while testing.
This agent fills forms with browser automation, and anything can go wrong on third-party websites.

---

## 👨‍💻 Author

Made with 💻 by [Your Name or GitHub Profile](https://github.com/Manoj-1331)

---

```

Let me know if you'd like:

- A version in **Hindi or Hinglish**
- Instructions on packaging it as a CLI tool (like `npx formfill`)
- Adding support for saving filled data logs

Happy coding! 🧠
```
