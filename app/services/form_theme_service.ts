import FormTheme from '#models/form_theme'
import type User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import FormThemePolicy from '#policies/form_theme_policy'

type CreateFormThemePayload = {
  name: string
  primaryColor: string
  secondaryColor?: string | null
  font?: string | null
  ctaText?: string | null
}

export default class FormThemeService {
  list(page: number, perPage: number) {
    return FormTheme.query().preload('user').orderBy('id', 'desc').paginate(page, perPage)
  }

  listByUser(userId: number, page: number, perPage: number) {
    return FormTheme.query()
      .where('userId', userId)
      .preload('user')
      .orderBy('id', 'desc')
      .paginate(page, perPage)
  }

  create(payload: CreateFormThemePayload, user: User): Promise<FormTheme> {
    return FormTheme.create({ ...payload, userId: user.id })
  }

  async update(
    payload: Partial<CreateFormThemePayload>,
    id: number,
    bouncer: HttpContext['bouncer']
  ): Promise<FormTheme> {
    const formTheme: FormTheme = await FormTheme.findOrFail(id)
    await bouncer.with(FormThemePolicy).authorize('update', formTheme)
    await formTheme.merge(payload).save()

    return formTheme
  }

  async destroy(id: number, bouncer: HttpContext['bouncer']): Promise<void> {
    const formTheme: FormTheme = await FormTheme.findOrFail(id)
    await bouncer.with(FormThemePolicy).authorize('destroy', formTheme)
    await formTheme.delete()
  }
}
