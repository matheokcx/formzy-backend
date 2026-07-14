import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'
import User from '#models/user'
import { Roles } from '#enums/roles_enum'
import { UserFactory } from '#database/factories/user_factory'
import { FormThemeFactory } from '#database/factories/form_theme_factory'
import { FormFactory } from '#database/factories/form_factory'

export default class extends BaseSeeder {
  /**
   * On limite le seeder aux environnements de développement et de test afin
   * d'éviter toute injection de données factices en production.
   */
  static environment = ['development', 'testing']

  async run() {
    // Compte administrateur avec des identifiants connus pour se connecter en dev.
    const admin = await User.updateOrCreate(
      { email: 'admin@formzy.dev' },
      {
        fullName: 'Admin Formzy',
        password: 'Password123!',
        role: Roles.ADMIN,
      }
    )

    // Compte utilisateur standard avec des identifiants connus.
    const demoUser = await User.updateOrCreate(
      { email: 'user@formzy.dev' },
      {
        fullName: 'Demo User',
        password: 'Password123!',
        role: Roles.USER,
      }
    )

    // Quelques utilisateurs supplémentaires générés aléatoirement.
    const randomUsers = await UserFactory.createMany(5)

    const owners = [admin, demoUser, ...randomUsers]

    for (const owner of owners) {
      // Chaque utilisateur possède 1 à 3 thèmes.
      const themes = await FormThemeFactory.merge({ userId: owner.id }).createMany(
        faker.number.int({ min: 1, max: 3 })
      )

      // Chaque utilisateur possède 2 à 5 formulaires, avec des réponses associées.
      const formsCount = faker.number.int({ min: 2, max: 5 })
      for (let i = 0; i < formsCount; i++) {
        const theme = faker.helpers.arrayElement([...themes, null])

        await FormFactory.merge({
          userId: owner.id,
          formThemeId: theme?.id ?? null,
        })
          .with('formReplies', faker.number.int({ min: 0, max: 15 }))
          .create()
      }
    }
  }
}
