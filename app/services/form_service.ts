import Form from '#models/form'
import type User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import FormPolicy from '#policies/form_policy'

type CreateFormPayload = {
  name: string
  description?: string | null
  fields: Record<string, unknown>
  isPrivate?: boolean
  isClosed?: boolean
  formThemeId?: number | null
}

export default class FormService {
  list(page: number, perPage: number) {
    return Form.query().orderBy('id', 'desc').paginate(page, perPage)
  }

  listByUser(userId: number, page: number, perPage: number) {
    return Form.query().where('userId', userId).orderBy('id', 'desc').paginate(page, perPage)
  }

  show(id: number): Promise<Form> {
    return Form.query().where('id', id).where('isPrivate', false).preload('formTheme').firstOrFail()
  }

  create(payload: CreateFormPayload, user: User): Promise<Form> {
    return Form.create({ ...payload, userId: user.id })
  }

  async update(
    payload: Partial<CreateFormPayload>,
    id: number,
    bouncer: HttpContext['bouncer']
  ): Promise<Form> {
    const form: Form = await Form.findOrFail(id)
    await bouncer.with(FormPolicy).authorize('update', form)
    await form.merge(payload).save()

    return form
  }

  async destroy(id: number, bouncer: HttpContext['bouncer']): Promise<void> {
    const form: Form = await Form.findOrFail(id)
    await bouncer.with(FormPolicy).authorize('destroy', form)
    await form.delete()
  }
}
