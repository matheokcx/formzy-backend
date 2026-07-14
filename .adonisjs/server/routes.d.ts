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
    'form-themes.form_themes.index': { paramsTuple?: []; params?: {} }
    'form-themes.form_themes.index_by_user': { paramsTuple: [ParamValue]; params: {'userId': ParamValue} }
    'form-themes.form_themes.store': { paramsTuple?: []; params?: {} }
    'form-themes.form_themes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'form-themes.form_themes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'form-replies.form_replies.index': { paramsTuple: [ParamValue]; params: {'formId': ParamValue} }
    'form_replies.store': { paramsTuple: [ParamValue]; params: {'formId': ParamValue} }
    'forms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'forms.forms.index': { paramsTuple?: []; params?: {} }
    'forms.forms.index_by_user': { paramsTuple: [ParamValue]; params: {'userId': ParamValue} }
    'form-themes.form_themes.index': { paramsTuple?: []; params?: {} }
    'form-themes.form_themes.index_by_user': { paramsTuple: [ParamValue]; params: {'userId': ParamValue} }
    'form-replies.form_replies.index': { paramsTuple: [ParamValue]; params: {'formId': ParamValue} }
    'forms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'forms.forms.index': { paramsTuple?: []; params?: {} }
    'forms.forms.index_by_user': { paramsTuple: [ParamValue]; params: {'userId': ParamValue} }
    'form-themes.form_themes.index': { paramsTuple?: []; params?: {} }
    'form-themes.form_themes.index_by_user': { paramsTuple: [ParamValue]; params: {'userId': ParamValue} }
    'form-replies.form_replies.index': { paramsTuple: [ParamValue]; params: {'formId': ParamValue} }
    'forms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'forms.forms.store': { paramsTuple?: []; params?: {} }
    'form-themes.form_themes.store': { paramsTuple?: []; params?: {} }
    'form_replies.store': { paramsTuple: [ParamValue]; params: {'formId': ParamValue} }
  }
  PATCH: {
    'forms.forms.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'form-themes.form_themes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'forms.forms.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'form-themes.form_themes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}