/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'drive.fs.serve': {
    methods: ["GET","HEAD"]
    pattern: '/uploads/*'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { '*': ParamValue[] }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'auth.new_account.store': {
    methods: ["POST"]
    pattern: '/api/auth/signup'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'auth.access_tokens.store': {
    methods: ["POST"]
    pattern: '/api/auth/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'profile.profile.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/account/profile'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
    }
  }
  'profile.access_tokens.destroy': {
    methods: ["POST"]
    pattern: '/api/account/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
    }
  }
  'forms.forms.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/forms'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['index']>>>
    }
  }
  'forms.forms.index_by_user': {
    methods: ["GET","HEAD"]
    pattern: '/api/forms/user/:userId'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { userId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['indexByUser']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['indexByUser']>>>
    }
  }
  'forms.forms.store': {
    methods: ["POST"]
    pattern: '/api/forms'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/form').createFormValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/form').createFormValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'forms.forms.update': {
    methods: ["PATCH"]
    pattern: '/api/forms/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/form').updateFormValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/form').updateFormValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'forms.forms.destroy': {
    methods: ["DELETE"]
    pattern: '/api/forms/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['destroy']>>>
    }
  }
  'form-themes.form_themes.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/form-themes'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/form_themes_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/form_themes_controller').default['index']>>>
    }
  }
  'form-themes.form_themes.index_by_user': {
    methods: ["GET","HEAD"]
    pattern: '/api/form-themes/:userId'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { userId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/form_themes_controller').default['indexByUser']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/form_themes_controller').default['indexByUser']>>>
    }
  }
  'form-themes.form_themes.store': {
    methods: ["POST"]
    pattern: '/api/form-themes'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/form_theme').createFormThemeValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/form_theme').createFormThemeValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/form_themes_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/form_themes_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'form-themes.form_themes.update': {
    methods: ["PATCH"]
    pattern: '/api/form-themes/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/form_theme').updateFormThemeValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/form_theme').updateFormThemeValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/form_themes_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/form_themes_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'form-themes.form_themes.destroy': {
    methods: ["DELETE"]
    pattern: '/api/form-themes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/form_themes_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/form_themes_controller').default['destroy']>>>
    }
  }
  'form-replies.form_replies.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/form-replies/:formId'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { formId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/form_replies_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/form_replies_controller').default['index']>>>
    }
  }
  'form_replies.store': {
    methods: ["POST"]
    pattern: '/api/form-replies/:formId'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/form_reply').createFormReplyValidator)>>
      paramsTuple: [ParamValue]
      params: { formId: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/form_reply').createFormReplyValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/form_replies_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/form_replies_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'forms.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/forms/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/forms_controller').default['show']>>>
    }
  }
}
