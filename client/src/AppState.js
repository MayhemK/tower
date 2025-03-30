import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /**@type {import('./models/Event.js').EventModel[]} */
  events: [],
  /**@type {import('./models/Event.js').EventModel} */
  activeEvent: null,
  /**@type {import('./models/Ticket.js').Ticket[]} */
  ticketHolders: [],
  /**@type {import('./models/Ticket.js').Ticket[]} */
  ticketEvents: [],
  /**@type {import('./models/Replies.js').Reply[]} */
  replies: []
})

