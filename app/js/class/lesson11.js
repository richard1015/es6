/* Proxy 对象代理 */

{
    let obj = {
        time: '2018年09月12日',
        name: 'net',
        _r: 123
    };

    let monitor = new Proxy(obj, {
        //拦截对象读取属性
        get(target, key) {
            return target[key].replace('2018', '2019')
        },
        //拦截对象设置属性
        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        // 拦截key in obj
        has(target, key) {
            if (key == 'name') {
                return target[key];
            } else {
                return false;
            }
        },
        // 拦截delete
        deleteProperty(target, key) {
            if (key.includes('_')) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },
        // 拦截Object.keys,getOwnPropertySymbols,getOwnPropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time');
        }
    });
    console.log('get', monitor.time);

    monitor.time = '2088';
    monitor.name = 'zzzz';
    console.log('set', monitor);
    console.log('has', 'name' in monitor, 'time' in monitor);


    // delete monitor.time;
    // delete monitor._r;
    // console.log('delete', monitor);

    console.log('ownKeys', Object.keys(monitor));

}

/* Reflect */
{
    let obj = {
        time: '2018年09月12日',
        name: 'net',
        _r: 123
    };

    console.log('Reflect get', Reflect.get(obj, 'time'))
    console.log('Reflect set', Reflect.set(obj, 'time', '2018年09月12日14:11:48'), obj)
    console.log('Reflect has', Reflect.has(obj, 'name'))
}

/* 使用场景   数据校验 */
{
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let v = this._validator[key];

                    if (!v || v(value)) {
                        return Reflect.set(target, key, value, proxy)
                    } else {
                        throw Error(`不能设置${key}到${value}`);
                    }
                } else {
                    throw Error(`key ${key} 不存在`);
                }
            },

        });
    }

    const personValidators = {
        name(val) {
            return typeof val === 'string';
        },
        age(val) {
            return typeof val === 'number' && val >= 18;
        }
    }

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.sex = 1;
            return validator(this, personValidators)
        }
    }

    const person = new Person('tt', 12)
    console.info(person);
    person.name = 'richard';
    person.sex = 3;
    console.info(person);

}