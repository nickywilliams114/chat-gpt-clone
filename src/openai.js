import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "OPENAI_API_KEY",
});

export async function sendMsgToOpenAI(message) {
  const res = await openai.responses.create({
    messages: [{ role: "developer", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
    store: true,
  });

  return res.data.choices[0];
}
