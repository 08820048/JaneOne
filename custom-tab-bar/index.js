Component({
  data: {
    selected: 0,
    color: "#2e2e2e",
    selectedColor: "#42a5f5",
    list: [{
      pagePath: "/pages/tools/tools",
      iconPath: "/image/tools.png",
      selectedIconPath: "/image/tools_1.png",
      text: "首页"
    }, {
      pagePath: "/pages/about/about",
      iconPath: "/image/about.png",
      selectedIconPath: "/image/about_1.png",
      text: "关于"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})