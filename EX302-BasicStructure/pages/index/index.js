// pages/index/index.js
Page({
  onLoad: function(options) { //生命周期函数--监听页面加载
    console.log('--index.js--onLoad--页面加载')
  },

  onShow: function() { //生命周期函数--监听页面显示
    console.log('--index.js--onShow--页面显示')
  },

  onReady: function() { //生命周期函数--监听页面初次渲染完成
    console.log('--index.js--onReady--页面初次渲染完成')
  },

  onHide: function() { //生命周期函数--监听页面隐藏
    console.log('--index.js--onHide--页面隐藏')
  },

  onUnload: function() { //生命周期函数--监听页面卸载
    console.log('--index.js--onUnload--页面卸载')
  },
})

Page({
  data: {
    background: ['bc-red', 'bc-green', 'bc-blue'],
    indicatorDots: true,
    autoplay: false,
    circular: false,
    vertical: false,
    interval: 2000,
    duration: 500,
  },
  data: {
    activeImages:[
      {imagePath:"/images/1.jpg"},
      {imagePath:"/images/2.jpg"},
      {imagePath:"/images/3.jpg"}
    ]

    

  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  changeCircular: function(e) {
    this.setData({
      circular: !this.data.circular
    })
  },
  changeVertical: function(e) {
    this.setData({
      vertical: !this.data.vertical
    })
  }
})