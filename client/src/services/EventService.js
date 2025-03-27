import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import {EventModel } from "@/models/Event.js"

class EventService{
  async getEvents() {
const response = await api.get('api/events')
logger.log('events', response)
const events = response.data.map(pojo => new EventModel(pojo))
AppState.events = events
logger.log('event pojo', events)
  }

}

export const eventService = new EventService()