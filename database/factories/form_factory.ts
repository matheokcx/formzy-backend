import Factory from '@adonisjs/lucid/factories'
import Form from '#models/form'
import { FormReplyFactory } from '#database/factories/form_reply_factory'

/**
 * Schéma de champs utilisé par les formulaires générés. Les clés servent de
 * référence aux réponses générées dans `FormReplyFactory`.
 */
export const FORM_FIELDS = {
  fullName: { type: 'text', label: 'Votre nom', required: true },
  email: { type: 'email', label: 'Votre email', required: true },
  rating: { type: 'number', label: 'Note sur 10', required: false },
  message: { type: 'textarea', label: 'Votre message', required: false },
}

export const FormFactory = Factory.define(Form, ({ faker }) => {
  return {
    name: faker.helpers.arrayElement([
      'Formulaire de contact',
      'Enquête de satisfaction',
      'Inscription newsletter',
      'Demande de démo',
      'Retour utilisateur',
    ]),
    description: faker.lorem.sentence(),
    fields: FORM_FIELDS,
    isPrivate: faker.datatype.boolean(),
    isClosed: faker.datatype.boolean({ probability: 0.2 }),
  }
})
  .state('open', (form) => {
    form.isClosed = false
  })
  .state('public', (form) => {
    form.isPrivate = false
  })
  .relation('formReplies', () => FormReplyFactory)
  .build()
