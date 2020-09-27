# array-extends

> 数组扩展

## install

> 1. `yarn add array-extend2` or `npm install array-extend2 --save`
> 2. 在入口文件引入 `import { addArrayExtends } from 'array-extend2'` 并调用
> 3. 如果是 ts 项目, 那么需要在 `tsconfig.json` 中, 增加 `types` 指向

## 扩展方法

-   groupBy (分组函数)

    1. use

    ```
    [].groupBy((a:T,b:T)= { // execute your differ, and return result for Boolean })
    ```

    2. example

    ```
      // origin
      let arr = [1, 2, 3, 4, 4, 5]
      // exec
      let res = arr.groupBy((a,b) => { return a == b; // diff func. })
      // result
      console.log(res) // => [[1], [2], [3], [4, 4], [5]]
    ```

## 新增扩展方法流程

```
1. 向 ./src/libs 中添加原始扩展方法,并导出方法调用
如: 增加 ./src/libs/group-by.ts

2. 向 ./src/array-extends.d.ts, 添加原型方法描述
如: groupBy: <T>(compute: (a: T, b: T) => boolean, isSorted?: boolean) => Array<Array<T>>

3. 在 ./src/index.ts 的 addArrayExtends() 增加方法调用,及方法导出

```
