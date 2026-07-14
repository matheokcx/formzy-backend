import type Form from '#models/form'
import { BaseTransformer } from '@adonisjs/core/transformers'
import UserTransformer from '#transformers/user_transformer'
import FormThemeTransformer from '#transformers/form_theme_transformer'

export default class FormTransformer extends BaseTransformer<Form> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'name',
        'description',
        'fields',
        'isPrivate',
        'isClosed',
        'createdAt',
        'updatedAt',
      ]),
      user: UserTransformer.transform(this.resource.user),
      formTheme: FormThemeTransformer.transform(this.resource.formTheme),
    }
  }
}
