// pages/myVolunteer/myVolunteer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      { image: '../../images/head01.png', client: 'XX义工', date: '2018.06.02', event01: '空调' },
      { image: '../../images/head01.png', client: 'XX义工', date: '2018.06.02', event01: '空调' },
      { image: '../../images/head01.png', client: 'XX义工', date: '2018.06.02', event01: '空调' },
      { image: '../../images/head01.png', client: 'XX义工', date: '2018.06.02', event01: '空调' }
    ],
    detailData: {
      name: '王文杰',
      phone: '136728398765',
      serial: 'xxxxxx',
      address: '广州市海珠区新港街道2号'
    },
    popUp:false
  },
  click01:function(){
    this.setData({
      popUp:true
    })
  },
  btn01(e){
    this.setData({
      popUp:false
    })
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