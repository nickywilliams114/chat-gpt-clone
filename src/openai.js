import OpenAI from "openai";
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: 'REACT_APP_OPENAI_API_KEY', dangerouslyAllowBrowser: true });

export async function sendMsgToOpenAI(message) {
  const res = await openai.responses.create({
    input: [{ role: "developer", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
    store: true,
  });

  return res.data.choices[0];
}
