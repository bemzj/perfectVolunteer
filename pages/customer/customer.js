// pages/completed/completed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      { image: '../../images/head01.png', client: '陈小姐',tel:'15999911956', date: '2018.06.02', address: "广东金融学院广东金融学院" },
      { image: '../../images/head01.png', client: '陈小姐', tel: '15999911956', date: '2018.06.02', address: "广东金融学院广东金融学院广东金融学院" },
      { image: '../../images/head01.png', client: '陈小姐', tel: '15999911956', date: '2018.06.02', address: "广东金融学院广东金融学院广东金融学院" },
      { image: '../../images/head01.png', client: '陈小姐', tel: '15999911956', date: '2018.06.02', address: "广东金融学院广东金融学院广东金融学院广东金融学院广东金融学院广东金融学院" }
    ],
    index1: null
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