import Form from '#models/form'
import FormReply from '#models/form_reply'
import type User from '#models/user'
import { Exception } from '@adonisjs/core/exceptions'
import { assertOwnership } from '#exceptions/forbidden_exception'

type CreateFormReplyPayload = {
  replies: Record<string, unknown>
}

export default class FormReplyService {
  async listByForm(user: User, formId: number, page: number, perPage: number) {
    const form = await Form.findOrFail(formId)
    assertOwnership(user, form.userId)

    return FormReply.query().where('formId', form.id).orderBy('id', 'desc').paginate(page, perPage)
  }

  async create(payload: CreateFormReplyPayload, formId: number): Promise<FormReply> {
    const form: Form = await Form.findOrFail(formId)

    if (form.isClosed) {
      throw new Exception('This form no longer accepts replies', {
        status: 403,
        code: 'E_FORM_CLOSED',
      })
    }

    return FormReply.create({ formId: form.id, replies: payload.replies })
  }
}
