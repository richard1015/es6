/* Symbol 独一无二的值 */
{
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2);

    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');

    console.log(a3 === a4);
}

{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        abc: '345',
        c: 456
    }
    console.log(obj);
    // for in  let of 取不到 Symbol
    for (let [k, v] of Object.entries(obj)) {
        console.log(k, v);
    }
    // 使用 getOwnPropertySymbols   获取Symbol值
    Object.getOwnPropertySymbols(obj).forEach(item => {
        console.log('getOwnPropertySymbols', item, obj[item]);
    });
    // 使用 Reflect 包含 Symbol 和 非Symbol
    Reflect.ownKeys(obj).forEach(item => {
        console.log('Reflect', item, obj[item]);
    });
}


