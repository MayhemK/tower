import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"

class CommentService {
  async getCommentsByEventId(eventId) {
    const response = await api.get(`api/events/${eventId}/comments`)
    const comments = response.data.map(pojo => new Comment(pojo))
    AppState.comments = comments
    
  }

}
export const commentService = new CommentService