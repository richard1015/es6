/* iterator */
{
    // 数组 iterator
    let array = ['hello', 'world'];
    let map = array[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    // start   obj 支持 for of
    let obj = {
        start: [1, 3, 2, 4],
        end: [7, 9, 8],
        [Symbol.iterator]() {
            let index = 0;
            let array = this.start.concat(this.end);
            let length = array.length;
            return {
                next() {
                    if (index < length) {
                        return {
                            value: array[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: array[index++],
                            done: true
                        }
                    }
                }   
            }
        }
    }
    console.log(obj[Symbol.iterator]().next())

    for (let key of obj) {
        console.log(key)
    }
}
{
    let array = ['hello', 'world'];
    for (const iterator of array) {
        console.log(iterator)
    }
}