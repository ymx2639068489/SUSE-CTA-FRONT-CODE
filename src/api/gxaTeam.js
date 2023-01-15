import {patch} from '@/requests/request'

export function quitTeam() {
  return patch("/api/gxa_application/quitTeam")
}