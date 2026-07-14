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
    formThemes: {
      index: typeof routes['forms.form_themes.index']
      indexByUser: typeof routes['forms.form_themes.index_by_user']
      store: typeof routes['forms.form_themes.store']
      update: typeof routes['forms.form_themes.update']
      destroy: typeof routes['forms.form_themes.destroy']
    }
    formReplies: {
      index: typeof routes['forms.form_replies.index']
      store: typeof routes['forms.form_replies.store']
    }
  }
}
