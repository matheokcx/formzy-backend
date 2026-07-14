import Form from '#models/form'
import FormReply from '#models/form_reply'
import type { HttpContext } from '@adonisjs/core/http'
import { Exception } from '@adonisjs/core/exceptions'
import FormReplyPolicy from '#policies/form_reply_policy'
import { createHmac } from 'node:crypto'
import env from '#start/env'

type CreateFormReplyPayload = {
  replies: Record<string, unknown>
}

export default class FormReplyService {
  async listByForm(bouncer: HttpContext['bouncer'], formId: number, page: number, perPage: number) {
    const form = await Form.findOrFail(formId)
    await bouncer.with(FormReplyPolicy).authorize('view', form)

    return FormReply.query().where('formId', form.id).orderBy('id', 'desc').paginate(page, perPage)
  }

  async create(
    payload: CreateFormReplyPayload,
    formId: number,
    ipAddress: string
  ): Promise<FormReply> {
    const form: Form = await Form.findOrFail(formId)

    if (form.isClosed) {
      throw new Exception('This form no longer accepts replies', {
        status: 403,
        code: 'E_FORM_CLOSED',
      })
    }

    const ipHash: string = createHmac('sha256', env.get('APP_KEY').release())
      .update(ipAddress)
      .digest('hex')

    const existingReply: FormReply | null = await FormReply.query()
      .where('formId', form.id)
      .where('ipHash', ipHash)
      .first()

    if (existingReply) {
      throw new Exception('You have already replied to this form', {
        status: 409,
        code: 'E_ALREADY_REPLIED',
      })
    }

    return FormReply.create({ formId: form.id, replies: payload.replies, ipHash })
  }
}
