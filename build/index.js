"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __importDefault(require("@actions/core"));
var requests_1 = require("./requests");
try {
    var webhookUrl = core_1.default.getInput("webhook_url")
        ? core_1.default.getInput("webhook_url")
        : process.env.WEBHOOK_URL
            ? process.env.WEBHOOK_URL
            : "";
    var headers = core_1.default.getInput("headers")
        ? core_1.default.getInput("headers")
        : process.env.HEADERS
            ? process.env.HEADERS
            : "";
    var method = core_1.default.getInput("method")
        ? core_1.default.getInput("method")
        : process.env.METHOD
            ? process.env.METHOD
            : "GET";
    var body = core_1.default.getInput("body")
        ? core_1.default.getInput("body")
        : process.env.BODY
            ? process.env.BODY
            : "";
    requests_1.sendRequest(webhookUrl, method, headers, body).then(function (data) {
        console.log(data);
    });
}
catch (error) {
    core_1.default.setFailed(error.message);
}
