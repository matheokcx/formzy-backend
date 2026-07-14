import FormTheme from '#models/form_theme'
import type User from '#models/user'
import { assertOwnership } from '#exceptions/forbidden_exception'

type CreateFormThemePayload = {
  name: string
  primaryColor: string
  secondaryColor?: string | null
  font?: string | null
  ctaText?: string | null
}

export default class FormThemeService {
  list(page: number, perPage: number) {
    return FormTheme.query().orderBy('id', 'desc').paginate(page, perPage)
  }

  listByUser(userId: number, page: number, perPage: number) {
    return FormTheme.query().where('userId', userId).orderBy('id', 'desc').paginate(page, perPage)
  }

  create(payload: CreateFormThemePayload, user: User): Promise<FormTheme> {
    return FormTheme.create({ ...payload, userId: user.id })
  }

  async update(
    payload: Partial<CreateFormThemePayload>,
    id: number,
    user: User
  ): Promise<FormTheme> {
    const formTheme: FormTheme = await FormTheme.findOrFail(id)
    assertOwnership(user, formTheme.userId)
    await formTheme.merge(payload).save()

    return formTheme
  }

  async destroy(id: number, user: User): Promise<void> {
    const formTheme: FormTheme = await FormTheme.findOrFail(id)
    assertOwnership(user, formTheme.userId)
    await formTheme.delete()
  }
}
