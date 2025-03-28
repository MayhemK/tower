import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import {EventModel } from "@/models/Event.js"

class EventService{
  async createEvent(eventData) {
const response = await api.get('api/events', eventData)
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


