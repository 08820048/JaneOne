// pages/surname/surname.js
var surname='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    surname:''
  },

innit() {
    var tagEle = [
      {
        title: '张',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '王',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '赵',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '钱',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '孙',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '李',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '邹',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '徐',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '陈',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '黄',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '班',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '欧阳',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '杨',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '龙',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '胡',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '诸葛',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '关',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '石',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '周',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      }
    ]
    for (var i = 0; i < tagEle.length; i++) {
      var fallLength = 100 //圆的焦点
      var angleX = Math.PI / 100
      var angleY = Math.PI / 100
      var k = (2 * (i + 1) - 1) / tagEle.length - 1;
      //计算按圆形旋转
      var a = Math.acos(k);
      var b = a * Math.sqrt(tagEle.length * Math.PI);
      //计算元素x，y坐标
      var numx = 120 * Math.sin(a) * Math.cos(b)
      var numy = 120 * Math.sin(a) * Math.sin(b);
      var numz = 220 * Math.cos(a);
 
      // console.log(numo)
      //计算元素缩放大小
      tagEle[i].x = numx * 2
      tagEle[i].y = numy * 2
      tagEle[i].z = numz
      tagEle[i].s = 250 / (400 - tagEle[i].z)
    }
    //动画
    setInterval(() => {
      for (var i = 0; i < tagEle.length; i++) {
        var a = Math.acos(k);
        var numz = 240 * Math.cos(a);
        tagEle[i].s = 250 / (400 - tagEle[i].z)
        var cos = Math.cos(angleX);
        var sin = Math.sin(angleX);
        var y1 = tagEle[i].y * cos - tagEle[i].z * sin;
        var z1 = tagEle[i].z * cos + tagEle[i].y * sin;
        tagEle[i].y = y1;
        tagEle[i].z = z1;
 
        var cos = Math.cos(angleY);
        var sin = Math.sin(angleY);
        var x1 = tagEle[i].x * cos - tagEle[i].z * sin;
        var z1 = tagEle[i].z * cos + tagEle[i].x * sin;
        tagEle[i].x = x1;
        tagEle[i].z = z1;
        this.setData({
          tagEle: tagEle
        })
      }
    }, 100)
  },

  surname:function(e){
    console.log(e)
    var name = e.detail.value.surname;
    surname = name;
    console.log("name",name)
    this.setData({
      surname:name
    })
    console.log("surname=",surname)
    if(name.length==''){
      wx.lin.showMessage({
        type:'error',
        duration:'3500',
        icon:'soud',
        content:'不能为空输入哦'
      })
    }else{
      wx.showLoading({
        title: '查询中...',
      })
      wx.request({
        url: 'https://api.tianapi.com/txapi/surname/index?key=4ee21d2553bef8ce2ea87f2a174e36d0&xing='+surname,
        complete:function(){
          wx.hideLoading()
        },
        success:function(result){
          if(result.data.msg=="返回数据为空"){
            wx.showModal({
              title:'提示',
              content:'查询失败了，待会再试试吧^_^',
              showCancel:false
            })
          }else if(result.data.msg == "success"){
            console.log(result)
            var list  = result.data.newslist[0]
             console.log("list=",list.content)
            wx.navigateTo({
              url: '/pages/surnamedata/surnamedata?list=' + JSON.stringify(list)
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
      type:'success',
      duration:'3500',
      icon:'soud',
      content:'请输入要查询的姓氏^_^'
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
    this.innit();
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