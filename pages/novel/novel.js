// pages/novel/novel.js
u_date:'';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    u_date:''
  },
/*获取用户已选择日期并格式化*/
bindDateChange: function(e) {
var u_date = e.detail.value;
  console.log("ddd",u_date)
/*提交请求*/
if(u_date!=null){
    wx.lin.showMessage({
      type:'success',
      duration:'3500',
        content:'提交成功,准备跳转..'
    })
  }
    wx.request({
      url: 'https://api.tianapi.com/txapi/ncov/index?key=4ee21d2553bef8ce2ea87f2a174e36d0&date='+u_date,
      complete:function(){
        wx.hideLoading()
      },
      /*失败回调*/
      success:function(result){
        if(result.data.msg=="返回数据为空"){
          wx.showModal({
            title: '查询失败',
            content:'数据拉取失败，请稍候再试吧^_^',
            showCancel:false
          })
          /*成功回调*/
        }else if(result.data.msg=="success"){
          console.log(result)
          var list = result.data.newslist;
          // var news = result.data.newslist[0].news;
          // var lis = JSON.stringify(result.data.newslist)
          console.log("LIST=",list)
          var test = JSON.stringify(list)
          console.log("test",test)
          // var jsn = JSON.parse(test)
          // console.log("json",jsn)
          // console.log("疫情数据11",desc)
          // console.log("新闻数组",news)
          wx.navigateTo({
            url: '/pages/noveldata/noveldata?list='+JSON.stringify(list),
          })
        }else{
          wx.showModal({
            title: '查询失败',
            content:'未知错误',
            showCancel:false
          })
        }
      }
    })
  
},





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.lin.showMessage({
      type:'error',
      duration:'4000',
      icon:'like',
      content:'请选择要查看的日期^_^'
    })
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
    wx.lin.showMessage({
      type:'error',
      duration:'4000',
      icon:'like',
      content:'请选择要查看的日期^_^'
    })
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

  },


  
  
})