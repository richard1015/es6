/* Set中 不允许重复  ，自动去重 */
{
    let list = new Set();
    list.add(5);
    list.add(6);
    list.add(6);

    console.log('size', list.size, list);

}

{
    let array = [1, 2, 3, 4, 4, 4, 5, 5];
    let list = new Set(array);

    console.log('size', list.size, list);
}

{
    let array = ['add', 'delete', 'clear', 'has']

    let list = new Set(array);

    console.log('has', list.has('add'));
    console.log('delete', list.delete('add'));
    list.clear();
    console.log('size', list.size, list);

}

{
    let array = ['add', 'delete', 'clear', 'has']

    let list = new Set(array);
    for (let [k, v] of list.entries()) {
        console.log('entries', k, v);
    }

    list.forEach(item => console.log('foreach', item))
}

/* WeakSet 值 必须为对象  */
{
    let weakList = new WeakSet();
    weakList.add({});
    console.log("weakList", weakList);
}
/* Map  任何数据类型可以做为key */
{
    let map = new Map();
    let array = ['123'];
    map.set(array, '3333')
    console.log('map', map, map.get(array));
}

{
    let map = new Map([['a', 123], ['b', 456]]);
    console.log('size', map.size, map);
    console.log('delete', map.delete('a'));
    console.log('size', map.size, map);
    map.clear();
    console.log('size', map.size, map);
}
/* weakMap 值 必须为对象  */
{
    let weakMap = new WeakMap();
    let o = {}
    weakMap.set(o, 123);
    console.log(weakMap);
}

/*  Map Array 增删改查 横向对比 */
{
    let map = new Map();
    let array = new Array();

    // 增
    map.set('t', 1);
    array.push({ t: 1 });
    console.info('map array add', map, array);


    // 查
    let map_exist = map.has('t');
    let array_exist = array.find(item => item = 't');

    console.info('map array find', map_exist, array_exist);

    // 改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : '');
    console.info('map array modify', map, array);

    // 删
    map.delete('t');
    array.splice(array.findIndex(item => item.t), 1);
    console.info('map array delete', map, array);
}
/* Set Array 增删改查 横向对比 */
{
    let set = new Set();
    let array = new Array();

    // 增
    let obj = { 't': 1 };
    set.add(obj);
    array.push({ t: 1 });
    console.info('set array add', set, array);


    // 查
    let set_exist = set.has(obj);
    let array_exist = array.find(item => item = 't');

    console.info('set array find', set_exist, array_exist);

    // 改
    set.forEach(item => item.t ? item.t = 2 : '');
    array.forEach(item => item.t ? item.t = 2 : '');
    console.info('set array modify', set, array);

    // 删
    set.forEach(item => item.t ? set.delete(item) : '');
    array.splice(array.findIndex(item => item.t), 1);
    console.info('set array delete', set, array);
}
/* Map Set Object 对比 */
{
    let item = {
        t: 1
    }
    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;
    console.info('add', map, set, obj);
    // 查
    console.info({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    });
    // 改
    map.set('t', 2);
    item.t = 2;
    obj['t'] = 2;
    console.info('modify', map, set, obj);
    // 删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('delete', map, set, obj);
}


// 总结  建议    优先Map 不使用 数组  存储唯一性 优先Set 放弃obj 、array