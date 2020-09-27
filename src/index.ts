import { GroupBy } from './libs/group-by'

/* 方法导出 */
export { GroupBy }

/**
 * @description 将 扩展方法注入到 Array 原型链
 *
 * @author Libin
 * @date 2020-09-27 16:44
 */
export const addArrayExtends = () => {
    Array.prototype.groupBy = function <T>(compute: (a: T, b: T) => boolean, isSorted?: boolean): Array<Array<T>> {
        return GroupBy(this, compute, isSorted)
    }
}
