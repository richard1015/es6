//es6  数组解构赋值

//使用1
{
    let a, b, rest;
    [a, b] = [1, 2];
    console.log(a, b);
}
//使用2
{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, rest);
}
//使用3
{
    let a, b, c, rest;
    [a, b, c = 3] = [1, 2];
    console.log(a, b, c);
}
//使用场景1 变量替换 ,不需要第三个变量
{
    let a = 1;
    let b = 3;
    [a, b] = [b, a];
    console.log(a, b);

}
//使用场景2 不需要单独使用变量 接收 结果  索引处理
{
    function f() {
        return [1, 2]
    }
    let a, b;
    [a, b] = f();
    console.log(a, b)
}
//使用场景3 忽略返回值 ，取所需
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a, , , b] = f();
    console.log(a, b);
}
//使用场景4 忽略返回值 ，取所需
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a, ...b] = f();
    console.log(a, b);
}

//es6  对象解构赋值
{
    let a, b;
    ({ a, b } = { a: 1, b: 2 })
    console.log(a, b);
}
{
    let o = { p: 42, q: false };
    let { p, q } = o;
    console.log(p, q)
}
{
    let { a = 10, b = 5 } = { a: 2 };
    console.log(a, b);
}
//使用场景
{
    let metaData = {
        title: '333',
        test: [{
            title: 'test',
            desc: "description"
        }]
    }
    let { title: esTitle, test: [{ title: cnTitle }] } = metaData;
    console.log(esTitle, cnTitle);
}
