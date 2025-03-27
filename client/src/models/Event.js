export class EventModel {
  constructor(data) {
    this.id = data._id
    this.creatorId = data.creatorId
    this.name = data.name
    this.description = data.description
    this.coverImg = data.coverImg
    this.location = data.location
    this.capacity = data.capacity
    this.startDate = data.startDate
    this.isCanceled = data.isCanceled
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }
}



// {"_id":{"$oid":"67e4550eb07cadaf16a681be"},
// "creatorId":{"$oid":"67e32349d1583cd79fcfd0a4"},
// "name":"Code-a-hack-athalon-a-con",
// "description":"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
// "coverImg":"https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
// "location":"At The Social Expo Center",
// "capacity":{"$numberInt":"56"},"startDate":{"$date":{"$numberLong":"1743832800000"}},
// "isCanceled":false,"type":"convention",
// "createdAt":{"$date":{"$numberLong":"1743017230343"}},
// "updatedAt":{"$date":{"$numberLong":"1743017230343"}},
// "__v":{"$numberInt":"0"}}