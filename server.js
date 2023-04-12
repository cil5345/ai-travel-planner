import * as dotenv from "dotenv";

dotenv.config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAPI,
});

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(epress.json());

app.post('/dream', async (req, res) => {
    const prompt = req.body.prompt
    const aiResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        max_tokens: 7,
        temperature: 0,
      });

      const response = aiResponse.choices[0].content
      res.send({response})
    
})

const openai = new OpenAIApi(configuration);



