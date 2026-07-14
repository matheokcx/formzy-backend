import { FormThemeSchema } from '#database/schema'
import { hasMany, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Form from '#models/form'
import User from '#models/user'

export default class FormTheme extends FormThemeSchema {
  @hasMany(() => Form)
  declare forms: HasMany<typeof Form>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
