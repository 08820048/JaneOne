// pages/bmi/bmi.js
var h='';
var w='';
var data_bmi='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:null,
    weight:null,
    data_bmi:''
  },
//BMI
bmi:function(e){
console.log(e)
var height=e.detail.value.h;
var weight=e.detail.value.w;
h = height;
w = weight;
 console.log(height.length)
 console.log(weight.length)
//数据提交
if(height.length>4 || weight.length==0){
  wx.showModal({
    title: '提示',
    content: '请输入正确的数据哦',
    showCancel: false
  })
}else{
  wx.showLoading({
    title: '查询中...',
  })
  wx.request({
    url: 'https://api.tianapi.com/txapi/bmi/index?key=4ee21d2553bef8ce2ea87f2a174e36d0&height='+height+'&weight='+weight,
    method:'POST',
    complete: function() {
      wx.hideLoading()
    },
    success:function(result){
      if(result.data.msg=="返回数据为空"){
        wx.showModal({
          title:'查询失败',
          content:'查询失败了，看看是不是数据写错啦^_^',
          showCancel:false
        })
      }else if(result.data.msg == "success"){
        console.log(result)
        var list  = result.data.newslist[0]
         console.log("list=",list)
        wx.navigateTo({
          url: '/pages/bmidata/bmidata?list=' + JSON.stringify(list)
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
/*提交数据*/

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