import type User from '#models/user'
import type FormTheme from '#models/form_theme'
import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'
import { Roles } from '#enums/roles_enum'

export default class FormThemePolicy extends BasePolicy {
  before(user: User | null): AuthorizerResponse | void {
    if (user?.role === Roles.ADMIN) {
      return true
    }
  }

  update(user: User, formTheme: FormTheme): AuthorizerResponse {
    return user.id === formTheme.userId
  }

  destroy(user: User, formTheme: FormTheme): AuthorizerResponse {
    return user.id === formTheme.userId
  }
}
