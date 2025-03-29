import { Schema } from "mongoose";

export const CommentSchema = new Schema(
  {
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    eventId: { type: Schema.ObjectId, required: true, ref: 'Event' },
    body: { type: String, required: true, maxLength: 500 }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false }
  }
)

CommentSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})