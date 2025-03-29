import { AppState } from "@/AppState.js";
import { api } from "./AxiosService.js";

class TicketService {
  async getTicketsByEventId(eventId) {
    const response = await api.get(`/api/events/${eventId}/tickets`)
    const ticketHolders = response.data.map(pojo => new ticketHolders(pojo))
    AppState.ticketHolders = ticketHolders
  }
}

export const ticketService = new TicketService