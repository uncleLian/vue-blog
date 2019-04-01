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
    let currentRole = (store.state.user && store.state.user.role) || 'visitor'
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
