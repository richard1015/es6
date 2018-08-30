{
    //二进制 0b开头
    console.log(0b0100111);
    //八进制 0o开头
    console.log(0o767);
}

{
    //Number.isFinite 数字是否有尽头
    console.log('15', Number.isFinite(15));
    console.log('NaN', Number.isFinite(NaN));
    console.log('1/0', Number.isFinite('true' / 0));
    console.log('NaN', Number.isNaN(NaN));
    console.log('0', Number.isNaN(0));
}

{
    //Number.isInteger 是否为整数
    console.log('25', Number.isInteger(25));
    console.log('25.0', Number.isInteger(25.0));
    console.log('25.1', Number.isInteger(25.1));
    console.log('25string', Number.isInteger('25'));
}

{
    //Number.isSafeInteger 是否为 安全值范围内
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);

    console.log(Number.isSafeInteger(0));
    console.log(Number.isSafeInteger(9007199254740992));
}

{
    //Math.trunc 取整 不进行四舍五入
    console.log('4.1', Math.trunc(4.1));
    console.log('4.9', Math.trunc(4.9));
}

{
    //Math.sign 判断是否为 1 正数 -1 负数 0 零 NaN 非数字
    console.log('-5', Math.sign(-5));
    console.log('0', Math.sign(0));
    console.log('1', Math.sign(1));
    console.log('50', Math.sign(50));
    console.log('foo', Math.sign('foo'));
}

{
    //Math.cbrt 立方根方法
    console.log('-1', Math.cbrt(-1));
    console.log('8', Math.cbrt(8));
}

// 三角函数   对数  等……