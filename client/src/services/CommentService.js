import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Reply } from "@/models/Comments.js"

class CommentService {
  async getCommentsByEventId(eventId) {
    const response = await api.get(`api/events/${eventId}/comments`)
    const comments = response.data.map(pojo => new Reply(pojo))
    AppState.comments = comments
    logger.log('comments', comments)
  }
}
export const commentService = new CommentService