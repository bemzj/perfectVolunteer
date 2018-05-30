// pages/completed/completed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      { image: '../../images/head01.png', client: '陈小姐', tel: '15999911956', date: '2018.06.02', comment: "",'star':5 ,status:0},
      { image: '../../images/head01.png', client: '陈小姐', tel: '15999911956', date: '2018.06.02', comment: "", 'star': 4,status: 1},
      { image: '../../images/head01.png', client: '陈小姐', tel: '15999911956', date: '2018.06.02', comment: "广东金融学院广东金融学院广东金融学院", 'star': 4,status: 0},
      { image: '../../images/head01.png', client: '陈小姐', tel: '15999911956', date: '2018.06.02', comment: "广东金融学院广东金融学院广东金融学院广东金融学院广东金融学院广东金融学院", 'star': 3,status: 0}
    ],
    index1: null,
    user_type:'U'
  },
  tixing: function (e) {
    // let num = e.currentTarget.dataset.index
    // this.setData({
    //   index1:num
    // })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var navTitle = "";
    if (this.data.user_type == 'V') {
      navTitle = "历史评价";
    } else {
      navTitle = "我的评价";
    }

    wx.setNavigationBarTitle({
      title: navTitle//页面标题为路由参数
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