import Factory from '@adonisjs/lucid/factories'
import FormTheme from '#models/form_theme'

const FONTS = ['Inter', 'Roboto', 'Poppins', 'Lato', 'Montserrat', 'Open Sans']
const CTA_TEXTS = ['Envoyer', 'Valider', 'Soumettre', 'Continuer', 'Terminer']

export const FormThemeFactory = Factory.define(FormTheme, ({ faker }) => {
  return {
    name: `${faker.color.human()} theme`,
    primaryColor: faker.color.rgb({ format: 'hex' }),
    secondaryColor: faker.color.rgb({ format: 'hex' }),
    font: faker.helpers.arrayElement(FONTS),
    ctaText: faker.helpers.arrayElement(CTA_TEXTS),
  }
}).build()
