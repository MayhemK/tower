import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { eventService } from "./EventService.js"

class CommentService {
  async deleteComment(commentId, userInfo) {
    const comment = await dbContext.Comments.findById(commentId)
    if (comment == null) {
      throw new BadRequest(`Invalid id: ${commentId}`)
    }
    if (comment.creatorId != userInfo.id) {
      throw new Forbidden(`Can't delete someone elses comment`)
    }
    await comment.deleteOne()
    return 'Comment Deleted'
  }
  async createComment(commentData) {
    const event = await eventService.getEventById(commentData.eventId)
    if (event.isCanceled) {
      throw new Forbidden(`${event.name} is cancelled and no longer able to be commented on`)
    }
    const comment = await dbContext.Comments.create(commentData)
    await comment.populate('creator', 'name picture')
    return comment
  }
  async getCommentsByEventId(eventId) {
    const comments = await dbContext.Comments.find({ eventId: eventId }).populate('creator', ' name picture')
    return comments
  }
}

export const commentService = new CommentService