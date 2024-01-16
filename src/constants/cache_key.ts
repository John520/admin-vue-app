const SYSTEM_NAME = 'my-vue-app'
class CacheKey {
    static readonly TOKEN = `${SYSTEM_NAME}-token-key`
    static readonly CONFIG_LAYOUT = `${SYSTEM_NAME}-config-layout-key`
    static readonly SIDEBAR_STATUS = `${SYSTEM_NAME}-sidebar-status-key`
}
export default CacheKey