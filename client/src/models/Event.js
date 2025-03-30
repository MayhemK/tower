export class EventModel {
  /**
   * @param {{ _id: any; creatorId: any; name: any; description: any; coverImg: any; location: any; capacity: any; startDate: any; type: any; isCanceled: any; createdAt: any; updatedAt: any; ticketCount: any; creator: Object; }} data
   */
  constructor(data) {
    this.id = data._id
    this.creatorId = data.creatorId
    this.name = data.name
    this.description = data.description
    this.coverImg = data.coverImg
    this.location = data.location
    this.capacity = data.capacity
    this.startDate = data.startDate
    this.type = data.type
    this.isCanceled = data.isCanceled
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.ticketCount = data.ticketCount
    this.creator = data.creator
  }
}



