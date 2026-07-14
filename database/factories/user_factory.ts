import Factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { Roles } from '#enums/roles_enum'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    fullName: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    // Le hook `beforeSave` du modèle se charge de hasher le mot de passe.
    password: 'Password123!',
    role: Roles.USER,
  }
})
  .state('admin', (user) => {
    user.role = Roles.ADMIN
  })
  .build()
