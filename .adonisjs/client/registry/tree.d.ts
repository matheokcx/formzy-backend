/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  drive: {
    fs: {
      serve: typeof routes['drive.fs.serve']
    }
  }
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
  forms: {
    forms: {
      index: typeof routes['forms.forms.index']
      indexByUser: typeof routes['forms.forms.index_by_user']
      store: typeof routes['forms.forms.store']
      update: typeof routes['forms.forms.update']
      destroy: typeof routes['forms.forms.destroy']
    }
    show: typeof routes['forms.show']
  }
  formThemes: {
    formThemes: {
      index: typeof routes['form-themes.form_themes.index']
      indexByUser: typeof routes['form-themes.form_themes.index_by_user']
      store: typeof routes['form-themes.form_themes.store']
      update: typeof routes['form-themes.form_themes.update']
      destroy: typeof routes['form-themes.form_themes.destroy']
    }
  }
  formReplies: {
    formReplies: {
      index: typeof routes['form-replies.form_replies.index']
    }
    store: typeof routes['form_replies.store']
  }
}
