Page({

  onLoad:function(){
    console.log("function onLoad")
    this.func1()
    this.func2()
  },

  func1(){
    console.log("函数的第一种定义方式, 简写版")
  },

  func2:function(){
    console.log("函数的第二种定义方式")
  },

  // onLoad(){
  //   console.log("onLoad")
  // }
})