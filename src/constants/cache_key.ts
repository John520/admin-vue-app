const SYSTEM_NAME = 'my-vue-app'
class CacheKey {
    static readonly TOKEN = `${SYSTEM_NAME}-token-key`
    static readonly CONFIG_LAYOUT = `${SYSTEM_NAME}-config-layout-key`
}
export default CacheKey