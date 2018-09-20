/* Promise */
{
    //es5 异步模拟
    let ajax = function (callback) {
        setTimeout(() => {
            callback && callback(true)
        }, 1000);
    }

    ajax((res) => {
        console.log(res)
    })
    console.log('执行es5')
}
{
    async function test() {
        //es6 Promise 异步模拟
        let ajax = function () {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    resolve(true)
                }, 1000);
            });

        }
        ajax().then(res => {
            console.log(res)
        });
        console.log('执行es6 Promise')
        console.log('执行es6 Promise await', await ajax());
    }
    test();
}

{
    // Promise all

    let loadImg = function (src) {
        return new Promise(function (resolve, reject) {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (error) {
                reject(error)
            }
        });
    }

    Promise.all([
        loadImg('https://pic.cnblogs.com/face/600701/20180421142010.png'),
        loadImg('https://pic.cnblogs.com/face/600701/20180421142010.png'),
        loadImg('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3372236020,2772082641&fm=173&app=25&f=JPEG?w=580&h=330&s=B2A04BA11A373E8C0690F5060300E0C1')
    ]).then(imgs => {
        imgs.forEach(element => {
            document.body.appendChild(element);
        });
    }).catch(error => {
        console.log('catch', error);
    });


    Promise.race([
        loadImg('https://pic.cnblogs.com/face/600701/20180421142010.png'),
        loadImg('https://pic.cnblogs.com/face/600701/20180421142010.png'),
        loadImg('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3372236020,2772082641&fm=173&app=25&f=JPEG?w=580&h=330&s=B2A04BA11A373E8C0690F5060300E0C1')
    ]).then(img => {
        document.body.appendChild(img);
    }).catch(error => {
        console.error('catch', error);
    });

    function queue(things) {
        let promise = Promise.resolve();
        things.forEach(element => {
            promise = promise.then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        console.log('forEach', element)
                        resolve('ok');
                    }, 1000);
                });
            })
        });
    }
    queue(['h1', 'h2', 'h3']);

    function queue2(things) {
        let promise = Promise.resolve();
        things.reduce(function (totel, item) {
            return totel.then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        console.log('reduce', item)
                        resolve('ok');
                    }, 1000);
                });
            });
        }, promise)
    }
    queue2(['h1', 'h2', 'h3']);
}
