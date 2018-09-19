//  类   基本定义生成实例
{
    class Parent {

        constructor(name = 'parent') {
            this.name = name;
        }
    }
    let p = new Parent('tt');
    console.log('Parent', p);


    // 继承
    class Child extends Parent {
        constructor(name = 'child') {
            //super 第一行
            super(name);

            this.type = 'type';
        }
        // getter,setter 使用

        get longName() {
            return this.name + 'longname'
        }
        set longName(v) {
            this.name = v;
        }

        // 静态方法
        static tell() {
            console.log('静态方法 tell');
        }


    }
    //静态属性
    Child.StaticAttr = '123';


    let c = new Child('asd');
    c.longName = 213123;
    console.log('Child', c);
    //静态方法
    Child.tell()
    console.log('静态属性', Child.StaticAttr)
}
