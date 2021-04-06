Page({

  onLoad:function(){
    // console.log("function onLoad")
    // this.func1()
    // this.func2()
    // this.showName("Sam")
    // this.add(1,2)
  },

  getName(){
    console.log("Name是：hahah")
  },

  // 不带参函数
  func1(){
    console.log("函数的第一种定义方式, 简写版")
  },

  // 不带参函数
  func2:function(){
    console.log("函数的第二种定义方式")
  },

  // 带参函数
  showName(name){
    console.log("传进来的name是：",name)
  },

  add(a,b){
    console.log("a+b的和是：",a+b)
  }

  // onLoad(){
  //   console.log("onLoad")
  // }
})