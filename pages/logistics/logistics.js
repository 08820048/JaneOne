// pages/logistics/logistics.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    status: ["查询异常", "暂无记录", "在途中", "派送中", "已签收", "用户拒签", "疑难件", "无效单", "超时单", "签收失败","退回"],
    list: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = JSON.parse(options.list)
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