{
    let arr = Array.of(3, 2, 4, 53, 33);
    console.log(arr)

    let empty = Array.of();
    console.log(empty)
}
// Array.from 数组转换   类似于 map 
{
    let p = document.querySelectorAll("p");
    let pArr = Array.from(p);
    pArr.forEach(element => {
        console.log(element.textContent);
    });


    console.log(Array.from([1, 3, 5], (item) => { return item * 2 }))
}
// Array.fill 替换 （p1,p2,p3） p1=数组  p2=起始下标 p3=结束下标
{
    console.log('fill-7', [1, 'a', undefined].fill(7));
    console.log('fill,pos', ['a', 'b', 'c'].fill(3, 1, 3));
}
// Array . keys values entries
{
    for (let index of ['1', '2', 'd'].keys()) {
        console.log('keys', index);
    }
    //默认浏览器不支持 需兼容包
    for (let index of ['1', '2', 'd'].values()) {
        console.log('values', index);
    }
    for (let [index, value] of ['1', '2', 'd'].entries()) {
        console.log(index, value);
    }
}
//Array.copyWithin (起始下标 , 读取数据下标 , 截止数据下标)) 
{
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
}
//Array.find 返回 符合条件的 第一个item
//Array.findIndex 返回 符合条件的 第一个item的下标
//Array.includes (严格包含===) 返回 符合条件的 true false
{
    console.log([1, 2, 3, 4, 5].find(item => { return item > 3 }));
    console.log([1, 2, 3, 4, 5].findIndex(item => { return item > 3 }));
    console.log([1, 2, 3, 4, 5].includes('3'));
    console.log([1, 2, 3, 4, 5, NaN].includes(NaN));
}


