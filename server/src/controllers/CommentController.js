import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { commentService } from "../services/CommentService.js";

export class CommentController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPicture)
      .delete('/:commentId', this.deleteComment)
  }
  async createPicture(request, response, next) {
    try {
      const commentData = request.body
      const userInfo = request.userInfo
      commentData.creatorId = userInfo.id
      const comment = await commentService.createComment(commentData)
      response.send(comment)
    } catch (error) {
      next(error)
    }
  }
  async deleteComment(request, response, next) {
    try {
      const commentId = request.params.commentId
      const userInfo = request.userInfo
      const erase = await commentService.deleteComment(commentId, userInfo)
      response.send(erase)
    } catch (error) {
      next(error)
    }
  }
}