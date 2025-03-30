import { AppState } from "@/AppState.js";
import { api } from "./AxiosService.js";
import { Ticket } from "@/models/Ticket.js";
import { logger } from "@/utils/Logger.js";

class TicketService {
  async createTicket(ticketData) {
    const response = await api.post('api/tickets', ticketData)
    console.log(response);
    logger.log(response)
    
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