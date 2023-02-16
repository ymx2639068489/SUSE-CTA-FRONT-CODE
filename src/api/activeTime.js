import { get } from "@/requests/request.js";

function queryGxaStep() {
  return get("/api/active-time/queryGxaProgress");
}

function getALLActiveName() {
  return get("/api/active-time/getALLActiveName");
}

function isRunningActive(activeName) {
  return get("/api/active-time/get/" + activeName);
}

export { queryGxaStep, getALLActiveName, isRunningActive };
