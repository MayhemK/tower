import { AppState } from "@/AppState.js";
import { api } from "./AxiosService.js";
import { Ticket } from "@/models/Ticket.js";
import { logger } from "@/utils/Logger.js";

class TicketService {
  async deleteTicket(ticketId) {
    const response = await api.delete(`/api/tickets/${ticketId}`)
    const ticketEvent = AppState.ticketEvents
    const index = ticketEvent.findIndex(ticket => ticket.id == ticketId)
    ticketEvent.splice(index, 1)
  }
  async getMyTickets() {
  
    const response = await api.get('account/tickets')
    const ticketEvents = response.data.map(pojo => new Ticket(pojo))
    AppState.ticketEvents = ticketEvents
    logger.log(response)
  }
  async createTicket(ticketData) {
    const response = await api.post('api/tickets', ticketData)    
    const ticket = new Ticket(response.data)
    AppState.ticketHolders.push(ticket)
    AppState.activeEvent.ticketCount++
  }
  async getTicketsByEventId(eventId) {
    const response = await api.get(`/api/events/${eventId}/tickets`)
    logger.log(response.data)
    const ticketHolders = response.data.map(pojo => new Ticket(pojo))
    AppState.ticketHolders = ticketHolders
  }
}

export const ticketService = new TicketService