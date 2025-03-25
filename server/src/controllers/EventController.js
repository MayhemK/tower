import { eventService } from "../services/EventService.js";
import BaseController from "../utils/BaseController.js";

export class EventController extends BaseController {
  constructor() {
    super('api/events')
    this.router
      .post('', this.createEvent)
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async createEvent(request, response, next) {
    try {
      const eventData = request.body
      const event = await eventService.createEvent(eventData)
      response.send(event)
    }
    catch (error) {
      next(error);
    }
  }
}