// pages/drug/drug.js
var drugName='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:''//药品名称
  },

    /**
   * 监听输入
   */
  listener(e) {
    var name = e.detail.value
    drugName = name
  },
  /**
   * 提交单号
   */
  submits() {
    //console.log(exNum)
    if (drugName.length < 2) {
      wx.showModal({
        title: '提示',
        content: '请检查药品名称是否正确',
        showCancel: false
      })
    } else {
      wx.showLoading({
        title: '查询中...',
      })
      wx.request({
        url: 'https://api.tianapi.com/txapi/yaopin/index?key=4ee21d2553bef8ce2ea87f2a174e36d0&word=' + drugName,
        method:'POST',
        header: {
          'Content-type': 'application/json;',
          
        },  
        complete: function() {
          wx.hideLoading()
        },
        success: function(result) {

          if (result.data.msg == "数据返回为空") {
            wx.showModal({
              title: '查询失败',
              content: '药品查询信息失败,可以换个药名试试哦',
              showCancel: false
            })
          } else if (result.data.msg == "success") {
            console.log(result)
            var list = result.data.newslist[0]
            list.name = drugName
            wx.navigateTo({
              url: '/pages/drugdata/drugdata?list=' + JSON.stringify(list)
            })
          } else {
            wx.showModal({
              title: '查询失败',
              content: '未知错误',
              showCancel: false
            })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})