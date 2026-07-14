import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'forms.forms.index': { paramsTuple?: []; params?: {} }
    'forms.forms.index_by_user': { paramsTuple: [ParamValue]; params: {'userId': ParamValue} }
    'forms.forms.store': { paramsTuple?: []; params?: {} }
    'forms.forms.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'forms.forms.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'forms.form_themes.index': { paramsTuple?: []; params?: {} }
    'forms.form_themes.index_by_user': { paramsTuple: [ParamValue]; params: {'userId': ParamValue} }
    'forms.form_themes.store': { paramsTuple?: []; params?: {} }
    'forms.form_themes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'forms.form_themes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'forms.form_replies.index': { paramsTuple: [ParamValue]; params: {'formId': ParamValue} }
    'forms.form_replies.store': { paramsTuple: [ParamValue]; params: {'formId': ParamValue} }
  }
  GET: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'forms.forms.index': { paramsTuple?: []; params?: {} }
    'forms.forms.index_by_user': { paramsTuple: [ParamValue]; params: {'userId': ParamValue} }
    'forms.form_themes.index': { paramsTuple?: []; params?: {} }
    'forms.form_themes.index_by_user': { paramsTuple: [ParamValue]; params: {'userId': ParamValue} }
    'forms.form_replies.index': { paramsTuple: [ParamValue]; params: {'formId': ParamValue} }
  }
  HEAD: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'forms.forms.index': { paramsTuple?: []; params?: {} }
    'forms.forms.index_by_user': { paramsTuple: [ParamValue]; params: {'userId': ParamValue} }
    'forms.form_themes.index': { paramsTuple?: []; params?: {} }
    'forms.form_themes.index_by_user': { paramsTuple: [ParamValue]; params: {'userId': ParamValue} }
    'forms.form_replies.index': { paramsTuple: [ParamValue]; params: {'formId': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'forms.forms.store': { paramsTuple?: []; params?: {} }
    'forms.form_themes.store': { paramsTuple?: []; params?: {} }
    'forms.form_replies.store': { paramsTuple: [ParamValue]; params: {'formId': ParamValue} }
  }
  PATCH: {
    'forms.forms.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'forms.form_themes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'forms.forms.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'forms.form_themes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}