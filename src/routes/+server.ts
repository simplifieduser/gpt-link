import { error, json } from '@sveltejs/kit'
import { Configuration, OpenAIApi } from "openai"

export async function POST({ request }) {
  
  let data

  try {
    data = await request.json()
  }
  catch (exe) {
    throw error(400)
  }

  if (data.question === undefined) throw error(400)
  if (data.auth === undefined) throw error(401)
  
  const config = new Configuration({ apiKey: data.auth })
  const openai = new OpenAIApi(config)

  let answer

  try {
    answer = await openai.createChatCompletion({
      model: data.model || "gpt-4",
      messages: [{ role: "user", content: data.question }]
    })
  }
  catch (exe: any) {
    if (exe.response === undefined || exe.response.status === undefined) throw error(500)
    throw error(exe.response.status)
  }

  if (answer.data.choices[0].message === undefined) throw error(500)

  return json({ answer: answer.data.choices[0].message.content })
}
