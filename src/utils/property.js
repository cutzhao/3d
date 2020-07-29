export function defc(obj, key) {
    Object.defineProperty(obj, key, {
        configurable: false
    })
}