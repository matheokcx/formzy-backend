import type FormTheme from '#models/form_theme'
import { BaseTransformer } from '@adonisjs/core/transformers'
import UserTransformer from '#transformers/user_transformer'

export default class FormThemeTransformer extends BaseTransformer<FormTheme> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'name',
        'primaryColor',
        'secondaryColor',
        'font',
        'ctaText',
        'createdAt',
        'updatedAt',
      ]),
      user: UserTransformer.transform(this.whenLoaded(this.resource.user)),
    }
  }
}
