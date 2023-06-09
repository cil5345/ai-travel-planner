import * as dotenv from "dotenv";

dotenv.config();

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAPI,
});

const openai = new OpenAIApi(configuration);

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/dream", async (req, res) => {
    const prompt = req.body.prompt
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 2048,
            temperature: 0,
            
          })
  
        return res.status(200).json({
          success: true,
          data: response.data.choices[0].text
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "error"
        })
    }
 


});

app.listen(8080, () =>
  console.log("message has been sent to http://localhost:8080/")
);
