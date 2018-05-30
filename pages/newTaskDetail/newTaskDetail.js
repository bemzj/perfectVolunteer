// pages/newTaskDetail/newTaskDetail.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    detailData:{
      name:'王文杰',
      phone:'136728398765',
      date:'2018年5月20日，13-15时',
      address:'广州市海珠区新港街道2号广州市海珠区新港街道2号',
      matter:'空调',
      msg: '您已预约成功，请保持手机畅通，方便义工与您联系。祝生活愉快！'
    },
    status:1,
    user_type:'',//登录类型
    bookStatus:null,//预约类型
    bookTitle: ["预约中","预约成功","预约失败"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var num = parseInt(options.bookStatus);
    console.log(num);
    var navTitle = "";
    this.setData({
      user_type: options.user_type,
      bookStatus: num
    })
    if (this.data.user_type=='V')
    {
      navTitle = "新任务详情";
    }else{
      navTitle = this.data.bookTitle[this.data.bookStatus];
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