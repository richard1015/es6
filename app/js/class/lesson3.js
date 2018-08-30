{
    //es5 写法
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'), regex2.test('xyz123'));

    //es6 中后面修饰符会  覆盖掉 第一个参数中的修饰符
    let regex3 = new RegExp(/xyz/ig, 'i');
    console.log(regex3.flags);

}

{
    //都是全局匹配   g 从上次匹配  y 不允许有间隔，匹配下一个点
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;
    console.log('one', a1.exec(s), a2.exec(s));
    console.log('tow', a1.exec(s), a2.exec(s));

    // y修饰符 是否开启
    console.log(a1.sticky, a2.sticky)

}

{
    //u 修饰符 unicode 字符处理
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));


    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));

    console.log(`\u{20BB7}`);

    let s = '𠮷';

    console.log('u', /^.$/.test(s));
    console.log('u', /^.$/u.test(s));

    console.log('test',/𠮷{2}/.test('𠮷𠮷'));
    console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));


    //s 修饰符  解决换行 回车 符  （暂未实现）
}



