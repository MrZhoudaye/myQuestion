    用ES6的解构来实现不借助参数，交换两个整数
    
    let a = 1
    let b = 2;//必须加分号，否则报错
    [a, b] = [b, a]
    console.log([a, b])//[2,1]
    console.log(typeof (b))//number

    var a = 2
    var b = 3
    [a, b] = [b, a]
    console.log([a, b])//[2,[undefined,2]]
    console.log(typeof (b))//object
    
    
    why?
    1、为什么用let声明必须加；而var却不需要？
    2、为什么两种声明方式，结果相差甚远？
    
