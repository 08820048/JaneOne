// pages/night/night.js
var food='';
var num='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    food:'',
    number:'',
    FArray:[]
  },
  
  /**
   * 菜谱
   * @param {} e 
   */
  food:function(e){
    console.log(e)
    /*接收食材名称*/
    var food = e.detail.value.food;
    /*接收菜谱数量*/
    var number = e.detail.value.number;
    console.log("food:",food,"number:",number)
    /*数据校验并提交*/
    if(food.length<0||number.length<0){
      wx.showModal({
        title:'提示',
        content:'输入不合法,请检查^-^!',
        showCancel:false
      })
    }else{
      wx.showModal({
        title:'上菜中...',
      })
      wx.request({
        url: 'https://api.tianapi.com/txapi/caipu/index?key=4ee21d2553bef8ce2ea87f2a174e36d0&word='+food+'&num='+number,
        method:'POST',
        complete:function(){
          wx.hideLoading()
        },
        /*请求失败回调*/
        success:function(result){
          if(result.data.msg=="返回数据为空"){
            wx.showModal({
              title:'上菜失败',
              content: '哎呀，上菜小哥摔倒啦,等下再试试吧^_^',
              showCancel:false
            })
            /*请求成功回调*/
          }else if(result.data.msg=="success"){
            // console.log(result)
            var list = result.data.newslist
            // console.log("LIST=",list)
            wx.navigateTo({
              url: '/pages/menudata/menudata?list='+JSON.stringify(list),
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