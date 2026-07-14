import Form from '#models/form'
import type User from '#models/user'
import { assertOwnership } from '#exceptions/forbidden_exception'

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

  create(payload: CreateFormPayload, user: User): Promise<Form> {
    return Form.create({ ...payload, userId: user.id })
  }

  async update(payload: Partial<CreateFormPayload>, id: number, user: User): Promise<Form> {
    const form: Form = await Form.findOrFail(id)
    assertOwnership(user, form.userId)
    await form.merge(payload).save()

    return form
  }

  async destroy(id: number, user: User): Promise<void> {
    const form: Form = await Form.findOrFail(id)
    assertOwnership(user, form.userId)
    await form.delete()
  }
}
