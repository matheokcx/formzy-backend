/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'drive.fs.serve': {
    methods: ["GET","HEAD"],
    pattern: '/uploads/*',
    tokens: [{"old":"/uploads/*","type":0,"val":"uploads","end":""},{"old":"/uploads/*","type":2,"val":"*","end":""}],
    types: placeholder as Registry['drive.fs.serve']['types'],
  },
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/auth/signup',
    tokens: [{"old":"/api/auth/signup","type":0,"val":"api","end":""},{"old":"/api/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/auth/login',
    tokens: [{"old":"/api/auth/login","type":0,"val":"api","end":""},{"old":"/api/auth/login","type":0,"val":"auth","end":""},{"old":"/api/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/account/profile',
    tokens: [{"old":"/api/account/profile","type":0,"val":"api","end":""},{"old":"/api/account/profile","type":0,"val":"account","end":""},{"old":"/api/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/account/logout',
    tokens: [{"old":"/api/account/logout","type":0,"val":"api","end":""},{"old":"/api/account/logout","type":0,"val":"account","end":""},{"old":"/api/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['profile.access_tokens.destroy']['types'],
  },
  'forms.forms.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/forms',
    tokens: [{"old":"/api/forms","type":0,"val":"api","end":""},{"old":"/api/forms","type":0,"val":"forms","end":""}],
    types: placeholder as Registry['forms.forms.index']['types'],
  },
  'forms.forms.index_by_user': {
    methods: ["GET","HEAD"],
    pattern: '/api/forms/user/:userId',
    tokens: [{"old":"/api/forms/user/:userId","type":0,"val":"api","end":""},{"old":"/api/forms/user/:userId","type":0,"val":"forms","end":""},{"old":"/api/forms/user/:userId","type":0,"val":"user","end":""},{"old":"/api/forms/user/:userId","type":1,"val":"userId","end":""}],
    types: placeholder as Registry['forms.forms.index_by_user']['types'],
  },
  'forms.forms.store': {
    methods: ["POST"],
    pattern: '/api/forms',
    tokens: [{"old":"/api/forms","type":0,"val":"api","end":""},{"old":"/api/forms","type":0,"val":"forms","end":""}],
    types: placeholder as Registry['forms.forms.store']['types'],
  },
  'forms.forms.update': {
    methods: ["PATCH"],
    pattern: '/api/forms/:id',
    tokens: [{"old":"/api/forms/:id","type":0,"val":"api","end":""},{"old":"/api/forms/:id","type":0,"val":"forms","end":""},{"old":"/api/forms/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['forms.forms.update']['types'],
  },
  'forms.forms.destroy': {
    methods: ["DELETE"],
    pattern: '/api/forms/:id',
    tokens: [{"old":"/api/forms/:id","type":0,"val":"api","end":""},{"old":"/api/forms/:id","type":0,"val":"forms","end":""},{"old":"/api/forms/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['forms.forms.destroy']['types'],
  },
  'form-themes.form_themes.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/form-themes',
    tokens: [{"old":"/api/form-themes","type":0,"val":"api","end":""},{"old":"/api/form-themes","type":0,"val":"form-themes","end":""}],
    types: placeholder as Registry['form-themes.form_themes.index']['types'],
  },
  'form-themes.form_themes.index_by_user': {
    methods: ["GET","HEAD"],
    pattern: '/api/form-themes/:userId',
    tokens: [{"old":"/api/form-themes/:userId","type":0,"val":"api","end":""},{"old":"/api/form-themes/:userId","type":0,"val":"form-themes","end":""},{"old":"/api/form-themes/:userId","type":1,"val":"userId","end":""}],
    types: placeholder as Registry['form-themes.form_themes.index_by_user']['types'],
  },
  'form-themes.form_themes.store': {
    methods: ["POST"],
    pattern: '/api/form-themes',
    tokens: [{"old":"/api/form-themes","type":0,"val":"api","end":""},{"old":"/api/form-themes","type":0,"val":"form-themes","end":""}],
    types: placeholder as Registry['form-themes.form_themes.store']['types'],
  },
  'form-themes.form_themes.update': {
    methods: ["PATCH"],
    pattern: '/api/form-themes/:id',
    tokens: [{"old":"/api/form-themes/:id","type":0,"val":"api","end":""},{"old":"/api/form-themes/:id","type":0,"val":"form-themes","end":""},{"old":"/api/form-themes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['form-themes.form_themes.update']['types'],
  },
  'form-themes.form_themes.destroy': {
    methods: ["DELETE"],
    pattern: '/api/form-themes/:id',
    tokens: [{"old":"/api/form-themes/:id","type":0,"val":"api","end":""},{"old":"/api/form-themes/:id","type":0,"val":"form-themes","end":""},{"old":"/api/form-themes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['form-themes.form_themes.destroy']['types'],
  },
  'form-replies.form_replies.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/form-replies/:formId',
    tokens: [{"old":"/api/form-replies/:formId","type":0,"val":"api","end":""},{"old":"/api/form-replies/:formId","type":0,"val":"form-replies","end":""},{"old":"/api/form-replies/:formId","type":1,"val":"formId","end":""}],
    types: placeholder as Registry['form-replies.form_replies.index']['types'],
  },
  'form_replies.store': {
    methods: ["POST"],
    pattern: '/api/form-replies/:formId',
    tokens: [{"old":"/api/form-replies/:formId","type":0,"val":"api","end":""},{"old":"/api/form-replies/:formId","type":0,"val":"form-replies","end":""},{"old":"/api/form-replies/:formId","type":1,"val":"formId","end":""}],
    types: placeholder as Registry['form_replies.store']['types'],
  },
  'forms.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/forms/:id',
    tokens: [{"old":"/api/forms/:id","type":0,"val":"api","end":""},{"old":"/api/forms/:id","type":0,"val":"forms","end":""},{"old":"/api/forms/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['forms.show']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
