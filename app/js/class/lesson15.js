// Generator
{
    // 基本使用
    let tell = function* () {
        yield 'a';
        yield 'b';
        yield 'c';
        yield 'd';
        return 'e'
    }

    let k = tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());

    for (const iterator of tell()) {
        console.log(iterator)
    }
}
// Generator object 自定义
{
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 'a';
        yield 'b';
        yield 'c';
        yield 'd';
        return 'e'
    }
    for (const iterator of obj) {
        console.log(iterator)
    }
}
// State  状态机制  Generator 使用场景
{
    let state = function* () {
        while (1) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}


{
    let draw = function (count) {
        // 次数 业务逻辑

        console.log('剩余次数', count);
    }

    let residuce = function* (count) {
        while (count > 0) {
            count--;
            yield draw(count);
        }
    }
    // 使用Generator 将全局次数隔离
    let start = residuce(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click', function () {
        start.next();
    }, false);
}

{
    // 长轮询 获取服务器 状态

    let ajax = function* () {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ code: Number.trunc(Math.random() * 10), time: new Date().getTime() })
            }, 500);
        })
    }

    let pull = function () {
        let genertaor = ajax();
        let step = genertaor.next();
        step.value.then(res => {
            console.log(res)
            if (res.code != 0) {
                setTimeout(() => {
                    console.info('wait')
                    pull();
                }, 1000);
            }
        })
    }

    pull();
}
