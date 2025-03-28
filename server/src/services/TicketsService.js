import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js"

class TicketsService {
  async createTicket(ticketData) {
    const ticket = await dbContext.Tickets.create(ticketData)
    await ticket.populate('profile', 'name picture')
    await ticket.populate('event')
    return ticket
  }
  async getTicketsByEventId(eventId) {
    const tickets = await dbContext.Tickets.find({ eventId: eventId }).populate('profile', 'name picture')
    return tickets
  }
  async getTicketsByAccountId(userId) {
    const tickets = await dbContext.Tickets.find({ accountId: userId }).populate('event')
    return tickets
  }
  async deleteTicket(ticketId, userInfo) {
    const ticket = await dbContext.Tickets.findById(ticketId)
    if (ticket == null) {
      throw new BadRequest(`Invalid id: ${ticketId}`)
    }
    if (ticket.accountId != userInfo.id) {
      throw new Forbidden(`Can't Delete Someone Elses Ticket `)
    }
    await ticket.deleteOne()
    return 'Cancelled Ticket!'
  }
}

export const ticketsService = new TicketsService()