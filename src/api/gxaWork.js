import { post, get } from "@/requests/request.js";
function UploadCodeZip(data) {
  return post("/api/gxa_application/upload", data);
}

function UploadOther(data) {
  return post("/api/gxa_application/submit", data);
}

function GetOther() {
  return get("/api/gxa_application");
}

function getTeamIsApprove() {
  return get("/api/gxa_application/getTeamIsApprove");
}

function getTeamScore() {
  return get("/api/gxa_application/getTeamScore");
}

function getTeamInfo() {
  return get("/api/gxa_application/getTeamInfo");
}

function getFormulaGxaList() {
  return get("/api/gxa_application/getFormulaGxaList");
}

function getFinallyList() {
  return get("/api/gxa_application/getFinallyList");
}

export {
  UploadCodeZip,
  UploadOther,
  GetOther,
  getTeamIsApprove,
  getTeamScore,
  getTeamInfo,
  getFormulaGxaList,
  getFinallyList,
};
