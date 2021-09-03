// pages/logistics/logistics.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    status: ["适应症", "用量用法", "注意事项", "规格",],
    list: {}
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var list = JSON.parse(options.list)
  
    //var list=options.list
    this.setData({
      list: list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
})