// pages/tools/tools.js
const Audio = wx.createInnerAudioContext(); //创建InnerAudioContext
Page({

  /**
   * 页面的初始数据
   */
  data: {


  //   list:[
  //     {
  //         pagePath:"/pages/tools/tools",
  //         text:"首页",
  //         iconPath:"../images/wuliu.png",
  //         selectedIconPath:"/icons/tab-bar/index-selected.png"
  //     },
  //     {
  //       pagePath:"/pages/about/about",
  //       text:"关于",
  //       iconPath:"/icons/tab-bar/index.png",
  //       selectedIconPath:"/icons/tab-bar/index-selected.png"
  //   },
  // ],
  // 音乐开始
  durantion:'',//歌曲长度
  currentTime:'',//当前播放时间
  songTitle:'',//歌曲名
  songPath:'',//歌曲路径
  songImg:'',//封面
  singer:'',//歌手
  songArray:[],//歌曲数组
  rotated:'rotated',//封面旋转flag
  isActive:true,//暂停，上下一首，封面旋转标志
 

    life:[
      {
        text:"快递查询",
        image:"kuaidi"
      },
      {
        text:"药品说明书",
        image:"yaopin"
      },
      {
        text:"BMI标准",
        image:"BMI"
      },
      {
        text:"搜搜菜谱",
        image:"menu"
      },
      {
        text:"抗击疫情",
        image:"bingdu"
      },
      {
        text:"天气预报",
        image:"tianqi"
      },
      {
        text:"姓氏起源",
        image:"xing"
      },
      {
        text:"早安心语",
        image:"taiyang"
      },
      {
        text:"营养成分表",
        image:"yingyangke"
      },
      {
        text:"黄金行情",
        image:"huangjin"
      },
      {
        text:"宠物大全",
        image:"chongwu"
      },
      {
        text:"谣言鉴别",
        image:"cuowu"
      }
    ],
// 趣味娱乐
    interest:[
  {
    text:"网易云热评",
    image:"wangyiyunyinle"
  },
  {
    text:"ONE一个",
    image:"yuedu"
  },
  {
    text:"朋友圈文案",
    image:"pengyouquan"
  },
  {
    text:"神回复",
    image:"shenhuifu"
  },
  {
    text:"脑筋急转弯",
    image:"bianzu6"
  },
  {
    text:"舔狗日记",
    image:"step_count"
  },
  {
    text:"土味情话",
    image:"qinghua"
  },
  {
    text:"名人名言",
    image:"mingxingchanpin"
  },
  {
    text:"故事大全",
    image:"gushihui"
  },
  {
    text:"谜语大全",
    image:"xingbiaoti-"
  },
  {
    text:"星座配对",
    image:"xingzuo"
  },
  {
    text:"雷人笑话",
    image:"gaoxiao"
  }
    ],
//知识问答
    knows:[
  {
    text:"唐诗三百",
    image:"tangshisanbaishou"
  },
  {
    text:"最美宋词",
    image:"songci"
  },
  {
    text:"简说历史",
    image:"lishi"
  },
  {
    text:"小段子",
    image:"duanzi"
  },
  {
    text:"励志名言",
    image:"zhengceguli"
  },
  {
    text:"经典对联",
    image:"xianxingduilian"
  },
  {
    text:"十万个why",
    image:"10why"
  },
  {
    text:"股市术语",
    image:"gushi"
  },
  {
    text:"英语一句话",
    image:"yingyu"
  },
  {
    text:"成语典故",
    image:"chengyugushi"
  },
  {
    text:"民国句子",
    image:"shici"
  },
  {
    text:"新华字典",
    image:"xinhuazidian"
  }
    ],
///智能AI
    ai:[
  {
    text:"图像识别",
    image:"more"
  },
  {
    text:"植物识别",
    image:"more"
  },
  {
    text:"宠物识别",
    image:"more"
  },
  {
    text:"人脸识别",
    image:"more"
  },
  {
    text:"垃圾分类",
    image:"more"
  },
  {
    text:"智能对话",
    image:"more"
  },
  {
    text:"人脸融合",
    image:"more"
  },
  {
    text:"文字识别",
    image:"more"
  },
  {
    text:"藏头诗",
    image:"more"
  },
  {
    text:"情感分析",
    image:"more"
  },
  {
    text:"多语言翻译",
    image:"more"
  },
  {
    text:"路线规划",
    image:"more"
  }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.gotSong()
    Audio.autoplay = true//设置自动播放
    Audio.onPlay(() => {//监测播放事件
      console.log('开始自动播放')
    })
    Audio.onError((res) => {//监测播放失败事件
      console.log(res.errMsg)
      console.log(res.errCode)
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
    var that = this
    Audio.onEnded(() => {//监听歌曲自然播放结束
      that.gotSong();//调用gotsong方法，播放下一首歌
      var isActive = that.data.isActive//设置图标
      if (!isActive) {
        that.setData({
          isActive: true
        })
      }
    })
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

  },
  express (e){
    // console.log(e.detail.index)
    var i= e.detail.index;
    if(i==0){
      console.log("你点击了快递查询")
      wx.navigateTo({
        url: '../express/express',
      })
    }
    if(i==1){
      console.log("你点击了药品说明书")
      wx.navigateTo({
        url: '../drug/drug',
      })
    }
    if(i==2){
      console.log("你点击了BMI标准")
      wx.navigateTo({
        url: '../bmi/bmi',
      })
    }
    if(i==3){
      console.log("你点击了搜搜菜谱")
      wx.navigateTo({
        url: '../menu/menu',
      })
    }
    if(i==4){
      console.log("你点击了疫情查询")
      wx.navigateTo({
        url: '../novel/novel',
      })
    }
    if(i==5){
      console.log("你点击了天气预报")
      wx.navigateTo({
        url: '../weather/weather',
      })
    }
    if(i==6){
      console.log("你点击了姓氏起源")
      wx.navigateTo({
        url: '../surname/surname',
      })
    }
    if(i==7){
      console.log("你点击了早安心语")
      wx.navigateTo({
        url: '..//surname',
      })
    }
    if(i==8){
      console.log("你点击了营养成分表")
      wx.navigateTo({
        url: '..//surname',
      })
    }
    
    //console.log(e)
  },
  // 获取歌曲数据
  gotSong: function () {
    var that = this
    wx.request({//微信的request请求
      url: 'https://api.uomg.com/api/rand.music?sort=热歌榜&format=json',
      success: function (res) {
        that.data.songArray = that.data.songArray.concat(res.data.data)//拼接返回的信息为一个数组
        wx.setStorageSync('songArray', that.data.songArray)//设置本地缓存
        Audio.src = res.data.data.url//设置歌曲路径
        that.setData({//设置信息
          songTitle: res.data.data.name,
          songPath: res.data.data.url,
          songImg: res.data.data.picurl,
          singer: res.data.data.artistsname
        })
        // console.log(res.data.data)
      }
    })
  },
  //上一首
  pre:function(e){
    var that = this;
    var isActive = that.data.isActive;
    if(!isActive){
      that.setData({
        isActive:true
      })
    }
    var len = that.data.songArray.length-2;
    var array = that.data.songArray;
    if(len>=0){
      Audio.src = array[len].url;
      that.setData({
        songTitle:array[len].name,
        songPath: array[len].url,
        songImg: array[len].picurl,
        singer: array[len].artistsname
      })
      that.data.songArray.pop()
    }
  },
  //下一首
  next: function () {
    var that = this
    var isActive = that.data.isActive
    if (!isActive) {
      that.setData({
        isActive: true
      })
    }
    wx.request({
      url: 'https://api.uomg.com/api/rand.music?sort=热歌榜&format=json',
      success: function (res) {
        that.data.songArray = that.data.songArray.concat(res.data.data)
        wx.setStorageSync('songArray', that.data.songArray)
        Audio.src = res.data.data.url
        that.setData({
          songTitle: res.data.data.name,
          songPath: res.data.data.url,
          songImg: res.data.data.picurl,
          singer: res.data.data.artistsname,
        })
       //console.log(res.data.data)
      }
    })
  },
   // 暂停或播放
   play: function () {
    var that = this
    var isActive = that.data.isActive
    var rotated = that.data.rorated
    if (isActive) {
      Audio.pause();
      rotated = ''
      that.setData({
        isActive: false,
        rotated: rotated
      })
      // console.log('暂停了');
    } else {
      rotated: rotated
      that.setData({
        isActive: true,
        rotated: 'rotated'
      })
      Audio.play();
      // console.log('播放了');
    }
  },
})