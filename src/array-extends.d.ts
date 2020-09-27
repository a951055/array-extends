declare interface Array<T> {
    /**
     * @description 对数组进行 groupBy 操作
     *
     * @author Libin
     * @date 2020-09-27 17:45
     */
    groupBy: <T>(compute: (a: T, b: T) => boolean, isSorted?: boolean) => Array<Array<T>>
}
