// pages/weather/weather.js
var city='';
var id='';
var data='';
var cc= '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
    id:'',
    in1:false,
    in2:false,
    data:'',
    sign:'first'
  },
// focus:function(e){
// const sign = e.currentTarget.dataset.sign;
// this.setData({
//   sign:sign=='first'?'second':'first'
// })
//},
/*监听输入 */
dis:function(e){
console.log(e)
console.log(e.target.offsetLeft)
//city==>13
//id==>137
var c =e.target.offsetLeft;
this.setData({
  cc:c
})
if(c==13){
  console.log("我是城市名称")
  this.setData({
    in2:true,
  
   // data:e.detail.value.city
  })
}else{
  console.log("我是城市ID")
  this.setData({
  in1:true,
  
  //data:e.detail.value.id
})
}
console.log("data=",data)
},
/*天气查询*/
weather:function(e){
  console.log(e)
var city=e.detail.value.city;
var id = e.detail.value.id;
if(city==''){
data=  id;
}else{
  data=city
}console.log("data:",data)
console.log(city.length)
//提交数据城市
if(city.length<2 && id!=''){
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
      url: 'https://api.tianapi.com/txapi/tianqi/index?key=4ee21d2553bef8ce2ea87f2a174e36d0&city='+data,
      method:'POST',
      complete: function() {
        wx.hideLoading()
      },
      success:function(result){
        if(result.data.msg=="返回数据为空"){
          wx.showModal({
            title:'查询失败',
            content:'查询失败了，请检查城市名称^_^',
            showCancel:false
          })
        }else if(result.data.msg == "success"){
          console.log(result)
          var list  = result.data.newslist
           console.log("list=",list)
          wx.navigateTo({
            url: '/pages/weatherdata/weatherdata?list=' + JSON.stringify(list)
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
    wx.lin.showMessage({
      type:'error',
      duration:'4000',
      icon:'soud',
      content:'请输入要查询的城市名称或者天气ID^_^'
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
    console.log("下拉啦")
    wx.lin.showMessage({
      type:'success',
      duration:'4000',
      icon:'password',
      content:'禁止已解除，请输入'
    })
        this.setData({
        in1:false,
        in2:false
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

  }
})