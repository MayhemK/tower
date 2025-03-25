import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { EventSchema } from '../models/Event.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Events = mongoose.model('Event', EventSchema)
}

export const dbContext = new DbContext()
