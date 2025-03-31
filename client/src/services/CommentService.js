import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Reply } from "@/models/Replies.js"

class CommentService {
  async deleteReply(replyId) {
    const response = await api.delete(`api/comments/${replyId}`)
    const reply = AppState.replies
    const replyIndex = reply.findIndex(reply => reply.id == replyId)
    reply.splice(replyIndex, 1)
  }
  async createReply(replyData) {
    const response = await api.post('api/comments', replyData)
    const reply = new Reply(response.data)
    AppState.replies.unshift(reply)
  }
  async getCommentsByEventId(eventId) {
    const response = await api.get(`api/events/${eventId}/comments`)
    const replies = response.data.map(pojo => new Reply(pojo))
    AppState.replies = replies
    logger.log('comments', replies)
  }
}
export const commentService = new CommentService