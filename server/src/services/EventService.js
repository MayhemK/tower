import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class EventService {
  async cancelEvent(eventId, userInfo) {
    const event = await this.getEventById(eventId)
    if (event.creatorId != userInfo.id) {
      throw new BadRequest
    }
    event.isCanceled = !event.isCanceled
    await event.save()
    return event
  }
  async updateEvent(eventId, eventData, userInfo) {
    const eventToUpdate = await this.getEventById(eventId)
    if (eventData.isCanceled != true) {
      throw new BadRequest
    }

    if (eventToUpdate.creatorId != userInfo.id) {
      throw new BadRequest
    }
    eventToUpdate.name = eventData.name
    eventToUpdate.description = eventData.description
    await eventToUpdate.save()
    return eventToUpdate
  }
  async getEventById(eventId) {
    const event = await dbContext.Events.findById(eventId).populate('creator ticketCount ', 'name picture')
    return event
  }
  async getAllEvents() {
    const events = await dbContext.Events.find().populate('creator ticketCount ', ' name picture').populate('ticketCount').sort('-createdAt')
    return events
  }
  async createEvent(eventData) {
    const event = await dbContext.Events.create(eventData)
    await event.populate('creator ticketCount', 'name picture')
    return event
  }

}
export const eventService = new EventService()