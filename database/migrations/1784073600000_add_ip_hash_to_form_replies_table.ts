import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'form_replies'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('ip_hash')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('ip_hash')
    })
  }
}
