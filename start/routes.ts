/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'
import { throttle } from '#start/limiter'

router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')
      .use(throttle)

    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())

    router
      .group(() => {
        router.get('forms', [controllers.Forms, 'index'])
        router.get('forms/user/:userId', [controllers.Forms, 'indexByUser'])
        router.post('forms', [controllers.Forms, 'store'])
        router.patch('forms/:id', [controllers.Forms, 'update'])
        router.delete('forms/:id', [controllers.Forms, 'destroy'])
      })
      .as('forms')
      .use(middleware.auth())

    router
      .group(() => {
        router.get('form-themes', [controllers.FormThemes, 'index'])
        router.get('form-themes/:userId', [controllers.FormThemes, 'indexByUser'])
        router.post('form-themes', [controllers.FormThemes, 'store'])
        router.patch('form-themes/:id', [controllers.FormThemes, 'update'])
        router.delete('form-themes/:id', [controllers.FormThemes, 'destroy'])
      })
      .as('form-themes')
      .use(middleware.auth())

    router
      .group(() => {
        router.get('form-replies/:formId', [controllers.FormReplies, 'index'])
      })
      .as('form-replies')
      .use(middleware.auth())

    router.post('form-replies/:formId', [controllers.FormReplies, 'store'])
    router.get('forms/:id', [controllers.Forms, 'show'])
  })
  .prefix('/api')
