import { Account } from "./Account.js"

export class Ticket {
  constructor(data) {
    this.id = data.id
    this.accountId = data.accountId
    this.albumId = data.albumId
    this.account = new Account(data.account)
  }
}