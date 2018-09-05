/* 
  函数扩展
*/
{
    function test(x, y = 'ww', c) {
        console.log('默认值', x, y);
    }
    test('hello');
    test('hello', 'aa');
}
/* 扩展默认值 */
{
    let x = 'test';
    function test2(c, y = x) {
        console.log('作用域', c, y);
    }
    test2('t')
}
/* rest 任意数量参数 类似于es5中= arguments */
{
    function test3(...arg) {
        console.log(arguments)
        for (let v of arg) {
            console.log('rest', v);
        }
    }
    test3(1, 2, 3, 4, 5, 6);
}
/* rest 反 */
{
    console.log("a", ...[1, 2, 4]);
}
/* 箭头函数 */
{
    let arrow = v => v * 2;
    let arrow2 = () => 7;
    console.log(arrow(3));
    console.log(arrow2());
}
/* 尾调用 提示性能 优 缺 */
{
    function tail(x) {
        console.log('tail', x);
    }
    function fx(x) {
        return tail(x)
    }
    fx(333);
}