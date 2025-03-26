import { Auth0Provider } from "@bcwdev/auth0provider";
import { eventService } from "../services/EventService.js";
import BaseController from "../utils/BaseController.js";


export class EventController extends BaseController {
  constructor() {
    super('api/events')
    this.router
      .get('', this.getAllEvents)
      .get('/:eventId', this.getEventById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createEvent)
      .put('/:eventId', this.updateEvent)
      .delete('/:eventId', this.cancelEvent)
  }

  async cancelEvent(request, response, next) {
    try {
      const eventId = request.params.eventId
      const event = await eventService.cancelEvent(eventId)
      response.send(event)
    } catch (error) {
      next(error)
    }
  }
  async updateEvent(request, response, next) {
    try {
      const eventId = request.params.eventId
      const eventData = request.body
      const userInfo = request.userInfo
      const updatedEvent = await eventService.updateEvent(eventId, eventData, userInfo)
      response.send(updatedEvent)
    }
    catch (error) {
      next(error);
    }
  }
  async getEventById(request, response, next) {
    try {
      const eventId = request.params.eventId
      const event = await eventService.getEventById(eventId)
      response.send(event)
    }
    catch (error) {
      next.error(error);
    }
  }
  async getAllEvents(request, response, next) {
    try {
      const events = await eventService.getAllEvents()
      response.send(events)
    }
    catch (error) {
      next(error);
    }
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async createEvent(request, response, next) {
    try {
      const eventData = request.body
      const userInfo = request.userInfo
      eventData.creatorId = userInfo.id
      const event = await eventService.createEvent(eventData)
      response.send(event)
    }
    catch (error) {
      next(error);
    }
  }
}