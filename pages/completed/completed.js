// pages/completed/completed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      { image: '../../images/head01.png', client: '陈小姐', date: '2018.06.02',urge:1 },
      { image: '../../images/head01.png', client: '陈小姐', date: '2018.06.02', urge: 0 },
      { image: '../../images/head01.png', client: '陈小姐', date: '2018.06.02', urge: 0 },
      { image: '../../images/head01.png', client: '陈小姐', date: '2018.06.02', urge: 0 }
    ],
    index1:null,
    popText1:''
  },
  tixing:function(e){
    // let num = e.currentTarget.dataset.index
    // this.setData({
    //   index1:num
    // })
  },
  warn:function(e){
    var obj = this.data.dataList;
    var index = e.currentTarget.dataset.index;
    obj[index].urge = 1;
    this.setData({
      dataList:obj,
      tipStatus1: !this.data.tipStatus1,
      popText1:'提醒成功'
    }) 
  },
  // 弹窗1取消
  closeTip: function () {
    this.setData({
      tipStatus1: !this.data.tipStatus1
    });
  },
  // 弹窗2取消
  cancel: function () {
    this.setData({
      tipStatus2: !this.data.tipStatus2
    });
  },
  // 弹窗2确定
  comfirmPop: function () {
    this.setData({
      tipStatus2: !this.data.tipStatus2
    });
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