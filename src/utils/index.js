/**
* @param {Function} func
* @param {number} wait
* @param {Boolean} immediate
* return {*}
*/
export function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result

    const later = function() {
        const last = +new Date() - timestamp

        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last)
        } else  {
            timeout = null
            if (!immediate) {
                result = func.apply(context, args)
                if (!timeout) context = args = null
            }
        }
    }
    return function(...args) {
        context = this
        timestamp = +new Date()
        const callNow = immediate && !timeout
        if (!timeout) timeout = setTimeout(later, wait)
        if (callNow) {
            result = func.apply(context, args)
            context = args = null
        }
        return result
    }
}
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
export function throttle(func, wait ,type) {
    let previous, timeout
    if (type===1){
        previous = 0
    }else if(type===2){
        timeout
    }
    return function() {
        let context = this
        let args = arguments
        if(type === 1){
            let now = Date.now()

            if (now - previous > wait) {
                func.apply(context, args)
                previous = now
            }
        }else if(type===2){
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}
