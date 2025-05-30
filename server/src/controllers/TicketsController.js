import { Auth0Provider } from "@bcwdev/auth0provider"
import { ticketsService } from "../services/TicketsService.js"
import BaseController from "../utils/BaseController.js"

export class TicketsController extends BaseController {
  constructor() {
    super('api/tickets')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTicket)
      .delete('/:ticketId', this.deleteTicket)
  }
  async deleteTicket(request, response, next) {
    try {
      const ticketId = request.params.ticketId
      const userInfo = request.userInfo
      const message = await ticketsService.deleteTicket(ticketId, userInfo)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }

  async createTicket(request, response, next) {
    try {
      const ticketData = request.body
      const userInfo = request.userInfo
      ticketData.accountId = userInfo.id
      const ticket = await ticketsService.createTicket(ticketData)
      response.send(ticket)
    }
    catch (error) {
      next(error);
    }
  }
}