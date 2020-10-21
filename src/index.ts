import * as core  from "@actions/core";
import { sendRequest } from "./requests";

try {
  const webhookUrl = core.getInput("webhook_url")
    ? core.getInput("webhook_url")
    : process.env.WEBHOOK_URL
    ? process.env.WEBHOOK_URL
    : "";
  const method = core.getInput("method")
    ? core.getInput("method")
    : process.env.METHOD
    ? process.env.METHOD
    : "GET";
  const body = core.getInput("body")
    ? core.getInput("body")
    : process.env.BODY
    ? process.env.BODY
    : undefined;

  sendRequest(webhookUrl, method, headers, body).then((data) => {
    console.log(data);
  }).catch((err)=> {
    console.log(err)
  }) ;
} catch (error) {
  core.setFailed(error.message);
}
