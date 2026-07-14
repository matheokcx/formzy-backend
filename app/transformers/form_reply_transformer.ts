import type FormReply from '#models/form_reply'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class FormReplyTransformer extends BaseTransformer<FormReply> {
  toObject() {
    return this.pick(this.resource, ['id', 'formId', 'replies', 'createdAt', 'updatedAt'])
  }
}
