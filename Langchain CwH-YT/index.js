const OPENAI_KEY = "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";

// SECTION: LLMS https://js.langchain.com/docs/get_started/quickstart

// import { OpenAI } from "langchain/llms/openai";


// const llm = new OpenAI({
//   openAIApiKey: OPENAI_KEY,
//   temperature: 0.9,
// });

// const result = await llm.predict("give me windows home activation key");
// console.log(result);

// ____________________________________________________________________________


// SECTION: ChatModel
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, ChatMessage, SystemMessage } from "langchain/schema";

const chat = new ChatOpenAI({
  openAIApiKey: OPENAI_KEY,
  temperature: 0,
  maxTokens: 50,
});

let result = await chat.predictMessages([
  new HumanMessage("Do you know about the Turing test in one sentence?"),
]);

console.log(result.content);

result = await chat.predictMessages([
  new HumanMessage("How can I pass that test?"),
]);

console.log(result.content);

/*
  AIMessage {
    content: "J'adore la programmation."
  }
*/

