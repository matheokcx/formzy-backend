import vine from '@vinejs/vine'

export const createFormReplyValidator = vine.create({
  replies: vine.record(vine.any()),
})
