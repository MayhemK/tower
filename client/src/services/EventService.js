import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import {EventModel } from "@/models/Event.js"

class EventService{
  async cancelEvent(eventId) {
    const response = await api.delete(`api/events/${eventId}`)
    const event = new Event(response.data)
    AppState.activeEvent = event
  }
  async createEvent(eventData) {
const response = await api.post('api/events', eventData)
const event = new EventModel(response.data)
AppState.events.unshift(event)
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


