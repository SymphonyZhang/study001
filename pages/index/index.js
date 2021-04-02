Page({
  //电影院 点击
  movieClick(){
    console.log("电影院开始播放电影")
  },

  //海底捞 点击
  restaurantClick(){
    console.log("海底捞开始饭市")
    wx.showToast({
      title: '海底捞喊你吃饭',
    })
  },

  ktvClick(){
    console.log("KTV开始夜场了")
  },

  shop1Click(){
    wx.showToast({
      title: '居然之家 9 折',
    })
  },

  xiClick(){
    wx.showToast({
      title: '喜临门买一送一',
    })
  },

  ikeaClick(){
    wx.showToast({
      title: '宜家家居8折',
    })
  },

  fruitClick(){
    console.log("新鲜刚到的水果")
  },

  houseClick(){
    wx.showToast({
      title: '新楼盘开业',
    })
  },

  saloClick(){
    console.log("理发送美甲")
  }
})