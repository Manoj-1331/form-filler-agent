import 'dotenv/config'
import { Agent, run, tool } from '@openai/agents'
import readline from 'readline'
import { chromium } from 'playwright'

// Tool : Form Filler Tool he jo ki Playwright ka use karke form fill karega
const formFillerTool = new tool({
  name: "form_filler_tool",
  description: "Opens a browser and fill a signup form using provided information",
  parameters: {
    type: "object",
    properties: {
      url: { type: "string", description: "Form_URL" },
      firstName: { type: "string" },
      lastName: { type: "string" },
      email: { type: "string" },
      password: { type: "string" }
    },
    required: ["url", "firstName", "lastName", "email", "password"],
    additionalProperties: false  
  },
  // yaha se main event start hota hai
  execute: async ({ url, firstName, lastName, email, password }) => {
    // default browser chromium hai if you want open in chrome you use bus path setup dekhna he
    const browser = await chromium.launch({ headless: false }) 
    const context = await browser.newContext()
    const page = await context.newPage()

    // console.log(` Open ${url}`)
    // diye gaye url pe jakar wait karega jab tak page load na ho jaye
    await page.goto(url, { waitUntil: 'load' })
    //page fast load ho jaye to 2 second rukne ke liye
    await page.waitForTimeout(2000); 
    // scroll karunga password field tak
    await page.$eval('#password', el => el.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    await page.$eval('#email', el => el.scrollIntoView());
    // Fill the form

    await page.type('#firstName', firstName, { delay: 250 })
    await page.type('#lastName', lastName, { delay: 250 })
    await page.type('#email', email, { delay: 250 })
    await page.click('input#password + button')
    await page.type('#password', password, { delay: 250 })
    await page.click('input#confirmPassword + button')
    await page.type('#confirmPassword', password, { delay: 250 })

    await page.waitForTimeout(2000)
    await page.click('.main-button')

    console.log("✅ Form submitted successfully!")

    await page.waitForTimeout(2000) 
    await browser.close()

    return `Form filled on ${url} with user: ${firstName} ${lastName}, email: ${email}`
  }
})

//Main Agent
const autoFormFiller = new Agent({
  name: 'Auto Form Filler Agent',
  instructions: `You are an agent that fills forms on websites using the form_filler tool.`,
  tools: [formFillerTool]
})


async function chatWithAgent(query) {
  const result = await run(autoFormFiller, query)
  console.log("\n=== Agent Output ===")
  console.log(result.finalOutput)
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Your query: ", async (query) => {
  await chatWithAgent(query)
  rl.close()
})

