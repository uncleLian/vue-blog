import store from '@/store'

export default {
    inserted(el, binding, vnode) {
        const permissionRole = binding.value
        const hasPermission = checkPermission(permissionRole)
        if (!hasPermission) {
            el.parentNode && el.parentNode.removeChild(el)
        }
    }
}

export function checkPermission(permissionRole) {
    // 不能作为通用方案，判断权限的方法需自行实现
    // 当前采用登录角色是否包含被验证的permissionRole
    let currentRole = (store.state.login.user && store.state.login.user.roles) || 'visitor'
    if (typeof currentRole === 'string') {
        currentRole = [currentRole]
    }
    if (permissionRole && Array.isArray(permissionRole)) {
        const hasPermission = currentRole.some(role => {
            return permissionRole.includes(role)
        })
        return hasPermission
    } else {
        throw new Error(`Error! Please Enter Array Type"`)
    }
}
