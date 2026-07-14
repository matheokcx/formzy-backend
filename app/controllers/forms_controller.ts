import type { HttpContext } from '@adonisjs/core/http'
import type FormService from '#services/form_service'
import FormTransformer from '#transformers/form_transformer'
import { createFormValidator, updateFormValidator } from '#validators/form'
import type Form from '#models/form'
import { inject } from '@adonisjs/core'

@inject()
export default class FormsController {
  constructor(protected formService: FormService) {}

  async index({ request, serialize }: HttpContext) {
    const pageNumber: number = Number(request.input('page', 1))
    const quantityPerPage: number = Number(request.input('perPage', 20))
    const forms = await this.formService.list(pageNumber, quantityPerPage)

    return serialize(FormTransformer.paginate(forms.all(), forms.getMeta()))
  }

  async indexByUser({ params, request, serialize }: HttpContext) {
    const pageNumber: number = Number(request.input('page', 1))
    const quantityPerPage: number = Number(request.input('perPage', 20))
    const forms = await this.formService.listByUser(params.userId, pageNumber, quantityPerPage)

    return serialize(FormTransformer.paginate(forms.all(), forms.getMeta()))
  }

  async show({ params, serialize }: HttpContext) {
    const form: Form = await this.formService.show(params.id)
    return serialize(FormTransformer.transform(form))
  }

  async store({ request, auth, response, serialize }: HttpContext) {
    const payload = await request.validateUsing(createFormValidator)
    const form: Form = await this.formService.create(payload, auth.getUserOrFail())

    return response.created(await serialize(FormTransformer.transform(form)))
  }

  async update({ params, request, bouncer, serialize }: HttpContext) {
    const payload = await request.validateUsing(updateFormValidator)
    const form: Form = await this.formService.update(payload, params.id, bouncer)

    return serialize(FormTransformer.transform(form))
  }

  async destroy({ params, bouncer, response }: HttpContext) {
    await this.formService.destroy(params.id, bouncer)
    return response.noContent()
  }
}
