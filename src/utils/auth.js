import Cookies from 'js-cookie'
import {localStore} from '@util/sessionStore'

const TokenKey = 'Token'

export function getUser() {
  if (localStore.get('user')) return localStore.get('user')
  else return {}
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token, params) {
  return Cookies.set(TokenKey, token, params)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

const TenantKey = 'Tenant-Id'
export function getTenantId() {
  return Cookies.get(TenantKey)
}

export function setTenantId(token, params) {
  return Cookies.set(TenantKey, token, params)
}

export function removeTenantId() {
  return Cookies.remove(TenantKey)
}

const TenantPid = 'Tenant-Pid'
export function getTenantPid() {
  return Cookies.get(TenantPid)
}

export function setTenantPid(token, params) {
  return Cookies.set(TenantPid, token, params)
}

export function removeTenantPid() {
  return Cookies.remove(TenantPid)
}

const IsTenantAdmin = 'Is-Tenant-Admin'
export function getIsTenantAdmin() {
  return Cookies.get(IsTenantAdmin)
}

export function setIsTenantAdmin(token, params) {
  return Cookies.set(IsTenantAdmin, token, params)
}

export function removeIsTenantAdmin() {
  return Cookies.remove(IsTenantAdmin)
}

