import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"
import { eventService } from "./EventService.js"

class CommentService {
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
  async
}

export const commentService = new CommentService