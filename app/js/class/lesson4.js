{
    console.log('a', `\u0061`);
    console.log('s', `\u20BB7`);

    console.log('s', `\u{20BB7}`);


}

{
    let s = '𠮷';
    console.log('s length=', s.length);
    console.log('0', s.charAt(0));
    console.log('1', s.charAt(1));
    console.log('at0', s.charCodeAt(0));
    console.log('at1', s.charCodeAt(1));

    let s1 = '𠮷a';
    console.log('s1 length=', s1.length);
    console.log('code0', s1.codePointAt(0));
    console.log('code0', s1.codePointAt(0).toString(16));
    console.log('code1', s1.codePointAt(1));
    console.log('code2', s1.codePointAt(2));


}

{
    //es5
    console.log(String.fromCharCode('0x20bb7'));
    //es6 用法
    console.log(String.fromCodePoint('0x20bb7'));
}
//字符串遍历器 接口  of
{
    let str = '\u{20bb7}abc';
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        console.log('es5', element);
    }
    for (let code of str) {
        console.log('es6', code);
    }
}
//es6 includes startsWith endsWith
{
    let str = 'string';
    console.log('includes', str.includes('c'));
    console.log('startsWith', str.startsWith('str'));
    console.log('endsWith', str.endsWith('ng'));

}
//重复打印
{
    let str = 'abc';
    console.log(str.repeat(2));
}
//模板字符串 · 作用1
{
    let name = 'list';
    let info = 'hello world';
    let m = `i am ${name},${info}`;
    console.log(m);
}
//日期  补0   padStart padEnd 补白
{
    console.log('1'.padStart(2, '0'));
    console.log('1'.padEnd(2, '0'));
}
//使用场景 多语言模板 
{
    let user = {
        name: 'list',
        info: 'hello world'
    }
    console.log(abc`im ${user.name} , ${user.info}`);
    function abc(s, v1, v2) {
        console.log(s, v1, v2);
        return s + v1 + v2;
    }
}
//raw 换行api  对api 换行特殊处理  避免换行符 换行
{
    console.log(String.raw`Hi\n${1 + 2}`);
    console.log(`Hi\n${1 + 2}`);
}