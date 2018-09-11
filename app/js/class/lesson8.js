/* 对象扩展 */
{
    // 简洁表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o: o, k: k
    }
    let es6 = {
        o, k
    }

    let es5_method = {
        hello: function () {
            console.log('hello')
        }
    }
    let es6_method = {
        hello() {
            console.log('hello')
        }
    }
}
{
    //属性表达式
    let a = "b";
    let es5_obj = {
        a: 'c'
    }
    let ccc = 'a'
    let es6_obj = {
        [ccc]: 'c'
    }
    console.log(es5_obj, es6_obj);
}

{
    // 新增api

    // string 值类型
    console.log('string', Object.is('ab', 'ab'), 'ab' === 'ab');
    // 数组为引用类型  内存地址不同
    console.log('array', Object.is([], []), [] === []);
    //浅拷贝 log  copy {a: "a", b: "b"}
    console.log('copy', Object.assign({ a: 'a' }, { b: 'b' }));


    let test = { k: 1221, o: 333 };
    for (let [k, v] of Object.entries(test)) {
        console.log([k, v]);
    }
}

{
    // 扩展运算符
    let { a, b, ...c } = { a: 'test', b: 'kill', c: 'ccc', d: 'ddd' };
    console.log(c);
    //   {c: "ccc", d: "ddd"}
}

