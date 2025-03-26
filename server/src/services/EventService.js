import { dbContext } from "../db/DbContext.js";

class EventService {
  async cancelEvent(eventId) {
    const event = await this.getEventById(eventId)
    event.isCanceled = !event.isCanceled
    await event.save()
    return event
  }
  async updateEvent(eventId, eventData, userInfo) {
    const eventToUpdate = await this.getEventById(eventId)

    if (eventToUpdate.creatorId != userInfo.id) {
      throw new console.error();
      ('NAH FAM')
    }
    eventToUpdate.name = eventData.name
    eventToUpdate.description = eventData.description
    await eventToUpdate.save()
    return eventToUpdate
  }
  async getEventById(eventId) {
    const event = await dbContext.Events.findById(eventId).populate('creator', 'name picture')
    return event
  }
  async getAllEvents() {
    const events = await dbContext.Events.find().populate('creator', ' name picture')
    return events
  }
  async createEvent(eventData) {
    const event = await dbContext.Events.create(eventData)
    await event.populate('creator', 'name picture')
    return event
  }

}
export const eventService = new EventService()