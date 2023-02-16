import { patch, post } from '@/requests/request'

export function quitTeam() {
  return patch("/api/gxa_application/quitTeam")
}
export function invite({ fromUsername, fromUserId, qq, teamName }) {
  return post("/api/gxa_application/agreeInvitation", {
    qq,
    teamName,
    fromUserId,
    fromUsername,
  });
}