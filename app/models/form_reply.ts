import { FormReplySchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Form from '#models/form'

export default class FormReply extends FormReplySchema {
  @belongsTo(() => Form)
  declare form: BelongsTo<typeof Form>
}
