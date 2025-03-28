import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import {EventModel } from "@/models/Event.js"
import { router } from "@/router.js"

class EventService{
  async cancelEvent(eventId) {
    const response = await api.delete(`api/events/${eventId}`)
    const event = new Event(response.data)
    AppState.activeEvent = event
  }
  async createEvent(eventData) {
try {
  const response = await api.post('api/events', eventData)
const event = new EventModel(response.data)
AppState.events.unshift(event)
router.push({ name: 'EventDetails', params: { eventId: event.id}})
} catch (error) {
  logger.log('error', error)
}
  }
  async getEventById(eventId) {
    AppState.activeEvent = null
    const response = await api.get(`api/events/${eventId}`)
    const event = new EventModel(response.data)
    AppState.activeEvent = event
  }
  async getEvents() {
const response = await api.get('api/events')
const events = response.data.map(pojo => new EventModel(pojo))
AppState.events = events
  }

}

export const eventService = new EventService()


