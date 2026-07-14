import type { HttpContext } from '@adonisjs/core/http'
import FormReplyService from '#services/form_reply_service'
import FormReplyTransformer from '#transformers/form_reply_transformer'
import { createFormReplyValidator } from '#validators/form_reply'
import { inject } from '@adonisjs/core'
import FormReply from '#models/form_reply'

@inject()
export default class FormRepliesController {
  public constructor(private formReplyService: FormReplyService) {}

  async index({ params, request, bouncer, serialize }: HttpContext) {
    const pageNumber: number = Number(request.input('page', 1))
    const quantityPerPage: number = Number(request.input('perPage', 20))
    const replies = await this.formReplyService.listByForm(
      bouncer,
      params.formId,
      pageNumber,
      quantityPerPage
    )

    return serialize(FormReplyTransformer.paginate(replies.all(), replies.getMeta()))
  }

  async store({ params, request, response, serialize }: HttpContext) {
    const payload = await request.validateUsing(createFormReplyValidator)
    const formReply: FormReply = await this.formReplyService.create(
      payload,
      params.formId,
      request.ip()
    )

    return response.created(await serialize(FormReplyTransformer.transform(formReply)))
  }
}
