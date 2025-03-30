import { Account } from "./Account.js"

export class Comment {
  constructor(data) {
this.id = data.id
this.creatorId = data.creatorId
this.eventId = data.eventId
this.body = data.body
this.createdAt = data.createdAt
this.creator = data.creator
  }
}


// {
//   "_id": "67e857ca3e0984e27c2d8ed1",
//   "creatorId": "67e32a5f4cfae589448830ff",
//   "eventId": "67e857ca3e0984e27c2d8eca",
//   "body": "This was such a good event.  I can’t wait to attend the next.",
//   "createdAt": "2025-03-29T20:27:54.415Z",
//   "updatedAt": "2025-03-29T20:27:54.415Z",
//   "creator": {
//       "_id": "67e32a5f4cfae589448830ff",
//       "name": "baked",
//       "picture": "https://s.gravatar.com/avatar/650944627ea74e719e7d24602c24a483?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fba.png",
//       "id": "67e32a5f4cfae589448830ff"
//   },
//   "id": "67e857ca3e0984e27c2d8ed1"
// }