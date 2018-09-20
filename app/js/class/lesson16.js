// Decorator 修饰器  是函数  用来 修饰类的行为
/* 
   插件安装了  不好用……    cao
*/
{
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
    }

    class Test {
        @readonly
        time() {
            return '2018-8-8'
        }
    }

    let test = new Test();
    // test.time = function () {
    //     console.log('tttt')
    // }
    console.log(test.time())
}

{
    let typename = function (target, name, descriptor) {
        target.myname = "hello";
    }
    @typename
    class Test {

    }

    console.log('类修饰器', Test.myname)
    // 第三方修饰器 core-decorators  npm install core-decorators --save-dev
}

{
    // 埋点场景
    let log = (type) => {
        return function (target, name, descriptor) {
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                src_method.apply(target, name);
                console.log(`log type ${type} ....`, new Date().getTime());
            }
        }
    }

    class AD {
        @log('show')
        show() {
            console.log('ad is show');
        }
        @log('click')
        click() {
            console.log('ad is click');
        }
    }
}

