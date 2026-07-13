import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'forms'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description').nullable()
      table.json('fields').notNullable()
      table.boolean('is_private').notNullable().defaultTo(false)
      table.boolean('is_closed').notNullable().defaultTo(false)
      table.integer('user_id').references('users.id').notNullable()
      table.integer('form_theme_id').references('form_themes.id').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
