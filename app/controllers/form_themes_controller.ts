import type { HttpContext } from '@adonisjs/core/http'
import FormThemeService from '#services/form_theme_service'
import FormThemeTransformer from '#transformers/form_theme_transformer'
import { createFormThemeValidator, updateFormThemeValidator } from '#validators/form_theme'
import { inject } from '@adonisjs/core'
import FormTheme from '#models/form_theme'

@inject()
export default class FormThemesController {
  public constructor(private formThemeService: FormThemeService) {}

  async index({ request, serialize }: HttpContext) {
    const pageNumber: number = Number(request.input('page', 1))
    const quantityPerPage: number = Number(request.input('perPage', 20))
    const formThemes = await this.formThemeService.list(pageNumber, quantityPerPage)

    return serialize(FormThemeTransformer.paginate(formThemes.all(), formThemes.getMeta()))
  }

  async indexByUser({ params, request, serialize }: HttpContext) {
    const pageNumber: number = Number(request.input('page', 1))
    const quantityPerPage: number = Number(request.input('perPage', 20))
    const formThemes = await this.formThemeService.listByUser(
      params.userId,
      pageNumber,
      quantityPerPage
    )

    return serialize(FormThemeTransformer.paginate(formThemes.all(), formThemes.getMeta()))
  }

  async store({ request, auth, response, serialize }: HttpContext) {
    const payload = await request.validateUsing(createFormThemeValidator)
    const formTheme: FormTheme = await this.formThemeService.create(payload, auth.getUserOrFail())

    return response.created(await serialize(FormThemeTransformer.transform(formTheme)))
  }

  async update({ params, request, bouncer, serialize }: HttpContext) {
    const payload = await request.validateUsing(updateFormThemeValidator)
    const formTheme: FormTheme = await this.formThemeService.update(payload, params.id, bouncer)

    return serialize(FormThemeTransformer.transform(formTheme))
  }

  async destroy({ params, bouncer, response }: HttpContext) {
    await this.formThemeService.destroy(params.id, bouncer)
    return response.noContent()
  }
}
