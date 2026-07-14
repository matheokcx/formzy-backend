import vine from '@vinejs/vine'

export const createFormThemeValidator = vine.create({
  name: vine.string().trim().minLength(1).maxLength(150),
  primaryColor: vine.string().hexCode(),
  secondaryColor: vine.string().hexCode().nullable().optional(),
  font: vine.string().trim().maxLength(100).nullable().optional(),
  ctaText: vine.string().trim().maxLength(100).nullable().optional(),
})

export const updateFormThemeValidator = vine.create({
  name: vine.string().trim().minLength(1).maxLength(150).optional(),
  primaryColor: vine.string().hexCode().optional(),
  secondaryColor: vine.string().hexCode().nullable().optional(),
  font: vine.string().trim().maxLength(100).nullable().optional(),
  ctaText: vine.string().trim().maxLength(100).nullable().optional(),
})
