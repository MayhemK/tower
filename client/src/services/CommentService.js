import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Reply } from "@/models/Replies.js"

class CommentService {
  async getCommentsByEventId(eventId) {
    const response = await api.get(`api/events/${eventId}/comments`)
    const replies = response.data.map(pojo => new Reply(pojo))
    AppState.replies = replies
    logger.log('comments', replies)
  }
}
export const commentService = new CommentService