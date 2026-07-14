import { FormSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import FormReply from '#models/form_reply'
import FormTheme from '#models/form_theme'

export default class Form extends FormSchema {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => FormTheme)
  declare formTheme: BelongsTo<typeof FormTheme>

  @hasMany(() => FormReply)
  declare formReplies: HasMany<typeof FormReply>
}
