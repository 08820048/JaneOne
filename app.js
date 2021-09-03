// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },

    /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    wx.lin.showMessage({
      type:'success',
      duration:'4000',
      icon:'like',
      content:'分享得都是小可爱^_^'
    })
  }
})
