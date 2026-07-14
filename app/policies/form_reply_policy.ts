import type User from '#models/user'
import type Form from '#models/form'
import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'
import { Roles } from '#enums/roles_enum'

export default class FormReplyPolicy extends BasePolicy {
  before(user: User | null): AuthorizerResponse | void {
    if (user?.role === Roles.ADMIN) {
      return true
    }
  }

  view(user: User, form: Form): AuthorizerResponse {
    return user.id === form.userId
  }
}
