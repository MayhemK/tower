import { dbContext } from "../db/DbContext.js";

class EventService {
  async createEvent(eventData) {
    const event = await dbContext.Events.create(eventData)
    return event
  }

}
export const eventService = new EventService()