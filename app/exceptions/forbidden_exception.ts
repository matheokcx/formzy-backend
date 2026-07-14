import { Exception } from '@adonisjs/core/exceptions'
import { Roles } from '#enums/roles_enum'
import type User from '#models/user'

/**
 * Raised when an authenticated user tries to access or mutate a resource
 * they do not own (and are not an administrator of).
 */
export default class ForbiddenException extends Exception {
  static status = 403
  static code = 'E_FORBIDDEN'
  static message = 'You are not allowed to perform this action'
}

/**
 * Ensures the given user owns the resource (or is an administrator),
 * throwing a {@link ForbiddenException} otherwise.
 */
export function assertOwnership(user: User, ownerId: number) {
  if (user.role !== Roles.ADMIN && user.id !== ownerId) {
    throw new ForbiddenException()
  }
}
