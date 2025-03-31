import { Account } from "./Account.js"

export class Reply {
  constructor(data) {
this.id = data.id
this.creatorId = data.creatorId
this.eventId = data.eventId
this.body = data.body
this.createdAt = data.createdAt
this.creator = new Account(data.creator)
  }
}

