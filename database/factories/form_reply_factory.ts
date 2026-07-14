import Factory from '@adonisjs/lucid/factories'
import FormReply from '#models/form_reply'
import { createHash } from 'node:crypto'

export const FormReplyFactory = Factory.define(FormReply, ({ faker }) => {
  return {
    // Les clés correspondent au schéma défini dans `FORM_FIELDS`.
    replies: {
      fullName: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      rating: faker.number.int({ min: 1, max: 10 }),
      message: faker.lorem.paragraph(),
    },
    ipHash: createHash('sha256').update(faker.internet.ipv4()).digest('hex'),
  }
}).build()
